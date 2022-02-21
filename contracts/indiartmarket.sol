// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract IndiartMarket is ReentrancyGuard{

    using Counters for Counters.Counter;
    Counters.Counter private _itemsSold;
    address payable owner;
    //uint256 listingPrice = 0.1 ether;
    uint private constant numberOfDays = 24 days;


    //Data Structure to represent the item being listed or offered
    
    struct IndiartItem {
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address creator;
    uint256 price;
    uint listingTime;
    uint expiryTS;
    }
    
    mapping(bytes32 => IndiartItem) private idToIndiartItem;

    event IndiartOfferCreated (    
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address creator,
    uint256 price,
    uint256 listingTime,
    uint expiryTS
    );

    event IndiartItemSold (    
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address buyer,
    uint256 price
    );


    function decimals() pure public returns(uint)  {
        return 6;
    }

    
    function addItemToMarket(address nftContract, address creator, uint256 tokenId,uint256 price) public payable nonReentrant {       
        
        require(price > 0, "Price must be greater than zero");
        require( IERC721(nftContract).isApprovedForAll(msg.sender,address(this)),"Please approve offers contract to transfer NFT");
        //require(msg.value == listingPrice, "Price must be equal to listing price");
        bytes32 encodedKey =  keccak256(abi.encodePacked(tokenId, nftContract));
        idToIndiartItem[encodedKey] =  IndiartItem(
        nftContract,
        tokenId,
        payable(msg.sender),
        creator,
        price,
        block.timestamp,
        block.timestamp + numberOfDays 
        );

        //IERC721(nftContract).safeTransferFrom(msg.sender, address(this), encodedKey);

        emit IndiartOfferCreated(
        idToIndiartItem[encodedKey].nftContract,
        idToIndiartItem[encodedKey].tokenId,
        idToIndiartItem[encodedKey].seller,
        idToIndiartItem[encodedKey].creator,
        idToIndiartItem[encodedKey].price,
        idToIndiartItem[encodedKey].listingTime,
        idToIndiartItem[encodedKey].expiryTS
        );

    }

    function getMarketItem(address nftContract, uint256 tokenId) public view returns (IndiartItem memory) {
        
        bytes32 encodedKey =  keccak256(abi.encodePacked(tokenId, nftContract));
        
        IndiartItem memory item = idToIndiartItem[encodedKey];

        require(IERC721(nftContract).isApprovedForAll(idToIndiartItem[encodedKey].seller,address(this)),"Not available for sale");

        return item;
    }

    
    //Eth

    function sellItemAndTransferOwnershipETH(address nftContract, uint256 tokenId) public payable nonReentrant {

        bytes32 encodedKey =  keccak256(abi.encodePacked(tokenId, nftContract));

        require(idToIndiartItem[encodedKey].price != 0, "Item is not listed for sale");

        require(idToIndiartItem[encodedKey].seller != msg.sender, "Buyer and seller cannot be same");
        
        uint price = idToIndiartItem[encodedKey].price;
        
        uint expiredTS = idToIndiartItem[encodedKey].expiryTS;
        
        require(msg.value >= price, "Please submit the asking price in order to complete the purchase");
        
        require(IERC721(nftContract). isApprovedForAll(idToIndiartItem[encodedKey].seller,address(this)),"Not available for sale");

        require(expiredTS > block.timestamp , "Offer has expired"); // Not able to sell expired items
        
        IERC721(nftContract).transferFrom(idToIndiartItem[encodedKey].seller, msg.sender, tokenId);

        idToIndiartItem[encodedKey].seller.transfer(price);

        emit IndiartItemSold (  
        idToIndiartItem[encodedKey].nftContract,
        idToIndiartItem[encodedKey].tokenId,
        idToIndiartItem[encodedKey].seller,
        msg.sender,
        price 
        );      

        _itemsSold.increment();

        idToIndiartItem[encodedKey].price = 0;    
        
    }
   
    //erc20

    function sellItemAndTransferOwnershipERC20(address nftContract,uint256 tokenId,address token) public payable nonReentrant{
        
        bytes32 encodedKey =  keccak256(abi.encodePacked(tokenId, nftContract));
        
        uint price = idToIndiartItem[encodedKey].price;
        
        uint expiredTS = idToIndiartItem[encodedKey].expiryTS;

        require(price != 0, "Item is not listed for sale");
       
        require(msg.value >= price, "Please submit the asking price in order to complete the purchase");
        
        require(IERC20(token).allowance(msg.sender, address(this)) >= price,"Token allowance too low");

        require(IERC721(nftContract).isApprovedForAll(idToIndiartItem[encodedKey].seller,address(this)),"Not approved for sale");
        
        require(expiredTS < block.timestamp , "Indiart item have expired"); // Not able to sell expired items
        
        IERC721(nftContract).transferFrom(idToIndiartItem[encodedKey].seller, msg.sender, tokenId);
        
        IERC20(token).transferFrom(msg.sender, idToIndiartItem[encodedKey].seller ,tokenId);

        emit IndiartItemSold (  
        idToIndiartItem[encodedKey].nftContract,
        idToIndiartItem[encodedKey].tokenId,
        idToIndiartItem[encodedKey].seller,
        msg.sender,
        price 
        );
        
        _itemsSold.increment();

        idToIndiartItem[encodedKey].price = 0; 
    
    }



}

