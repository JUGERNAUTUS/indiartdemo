pragma solidity ^0.8.9;

//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract indiartNFT is ERC721URIStorage, ERC721Enumerable, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
        
    mapping (address => bool) public allowedMinters;

    
    modifier onlyMinter {
      require(allowedMinters[msg.sender], "Not permitted to mint NFT on this contract");
      _;
   }
    
    constructor() ERC721("IndiartNFT", "iNFT")  Ownable(){
    }

    
    function addMinter(address minter) public onlyOwner {
        allowedMinters[minter] = true; 
    }
        
    	
    function mintNFT(address receiver, string memory token_URI) public onlyMinter returns (uint256, string memory) {
    	
        _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
        _safeMint(receiver, tokenId);
        _setTokenURI(tokenId, token_URI);
        
        return (tokenId, tokenURI(tokenId));
    }


    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override (ERC721,ERC721Enumerable)
    {
        ERC721Enumerable._beforeTokenTransfer(from, to, tokenId);

    }

    function _burn(
        uint256 tokenId
    ) internal override (ERC721,ERC721URIStorage)
    {
        ERC721URIStorage._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override (ERC721,ERC721Enumerable) returns (bool)
    {
        return ERC721Enumerable.supportsInterface(interfaceId);
    }

    function tokenURI(uint256 tokenId) public view override (ERC721,ERC721URIStorage) returns (string memory)
    {
        return ERC721URIStorage.tokenURI(tokenId);
    }  

      
}
