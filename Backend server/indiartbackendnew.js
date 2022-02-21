
const HDWalletProvider = require('@truffle/hdwallet-provider');
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const { MongoClient } = require("mongodb");
const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri);

//const charmabi = require('./charmabi.js');
//const daoabi = require('./SocTokDAO_ABI.js');

const nftabi = require('./indiartNFT_ABI.js');
const marketabi = require('./indiartMarket_ABI.js');

var Web3 = require('web3');
const { TWO_POW256 } = require('ethereumjs-util');


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Backend server is running @ PORT-", port);
	
});


const config = {
                contractAddress : "0xdDC61370e7048B39fAB9858E4130f62637a31060",
                buyersAddress : "0xfc8094594b07BF0120613Abb388eC0276DBd3Fd0",
                indiartMarketAddress: "0xc2c6dfA811E171676Dd5855E179facd101D11D5F",
                account : "0x20263d77C79efaCE77F8fAB3D5649b444d2c349F",
                privateKey: "dfe777278008beebc4a7524833e59f00981337a8e6074080a252af53483e86bc",
                buyerspK: "965b8bd15d79f52d6186561deda6d12d60737548b9b4cf87cf1656a16a584a00",
                rpc: "http://localhost:7545"
             }



const owner = new HDWalletProvider(config.privateKey, config.rpc)
const buyer = new HDWalletProvider(config.buyerspK, config.rpc)

const web3 = new Web3(owner)
const buyerweb3 = new Web3(buyer)

//const watchweb3 = new Web3(new Web3.providers.WebsocketProvider('wss://speedy-nodes-nyc.moralis.io/833cf87df6d280847ac4787c/polygon/mumbai/ws'))
const watchweb3 = new Web3(new Web3.providers.WebsocketProvider(config.rpc))

const nftABI = JSON.parse(nftabi);
const marketABI = JSON.parse(marketabi);

const contract = new web3.eth.Contract(nftABI, config.contractAddress);
const contractMarket = new web3.eth.Contract(marketABI, config.indiartMarketAddress);

const contractBuyer = new buyerweb3.eth.Contract(marketABI, config.indiartMarketAddress);

const contractWatcher = new watchweb3.eth.Contract(nftABI, config.contractAddress);

const account = owner.getAddress();
const buyerAccount = buyer.getAddress();

console.log("account",account);


app.post("/addminter", function(req,res){
    
    console.log("Reached here",req.body);

    var sendResponseObject={};

    contract.methods.addMinter("0x20263d77C79efaCE77F8fAB3D5649b444d2c349F").send({from: account}, function(error, transactionHash){  })
    
    //contract.methods.mintSocTokNFT(account, req.body.ipfsHash).send({from: account}, function(error, transactionHash){  })
      .on('error', function(error){ console.log("error",error); })
      .on('transactionHash', function(transactionHash)
      
      { 
        console.log("txHash",transactionHash); 
     })
      .on('receipt', function(receipt){

      console.log("receipt",receipt);
      console.log("Reached here");
      
      sendResponseObject['txhash'] = receipt.events.Transfer.transactionHash;
      sendResponseObject['signature'] = receipt.events.Transfer.signature;
      sendResponseObject['blocknumber'] = receipt.events.Transfer.blockNumber;
      //sendResponseObject['tokenID'] = receipt.events.Transfer.returnValues.Result[tokenId];
      sendResponseObject['account'] = account;
      
      //addNFT(req.body);

      console.log(sendResponseObject,"sendresponse");  

      let jsonString= JSON.stringify(sendResponseObject)
      console.log(jsonString,"jsonString");
      res.send(jsonString);

      });
    })


app.post("/mintNFT", function(req,res){
    
    console.log("Reached here",req.body, req.body.ipfsHash);

    var sendResponseObject={};

    //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
                                                     
    contract.methods.mintNFT(account, req.body.ipfsHash).send({from: account}, function(error, transactionHash){  })
      .on('error', function(error){ console.log("error",error); })
      .on('transactionHash', function(transactionHash)
      
      { 
        console.log("txHash",transactionHash); 
     })
      .on('receipt', function(receipt){

      console.log("receipt",receipt);

      let tokenId =  receipt.events.Transfer.returnValues.tokenId;
      let txhash = receipt.events.Transfer.transactionHash;  

      
      sendResponseObject['txhash'] = txhash;
      sendResponseObject['signature'] = receipt.events.Transfer.signature;
      sendResponseObject['blocknumber'] = receipt.events.Transfer.blockNumber;
      sendResponseObject['tokenId'] = tokenId;
      sendResponseObject['nftContract'] = config.contractAddress;
      sendResponseObject['account'] = account;
      sendResponseObject['timestamp'] = Date.now();
      sendResponseObject['ipfsHash'] = req.body.ipfsHash;
      sendResponseObject['name'] = req.body.name;
      sendResponseObject['creatorname'] = req.body.creatorname;
      sendResponseObject['media'] = req.body.media;
      sendResponseObject['category'] = req.body.category;
      sendResponseObject['bundle'] = req.body.bundle;
      sendResponseObject['description'] = req.body.description;
      sendResponseObject['listprice'] = 0;


      addNFT(sendResponseObject);

      console.log(sendResponseObject,"sendresponse");  

      let jsonString= JSON.stringify(sendResponseObject)
      //console.log(jsonString,"jsonString");
      res.send(jsonString);

      });
    })

    

    app.post("/listNFT", function(req,res){
      
        var sendResponseObject={};
    
        //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
        
        let listprice = Math.floor((req.body.price/220000)*(10**6));                                        
        
        console.log(listprice,req.body,"listprice",config.contractAddress);
        
        let tokenID =parseInt(req.body.tokenID);

        console.log(tokenID,"tokenID");
        contract.methods.setApprovalForAll(config.indiartMarketAddress,true).send({from: account}).then(function(response,err){

        if(response)
        {    
            //console.log(response,"response");

        contractMarket.methods.addItemToMarket(config.contractAddress, account, tokenID, listprice).send({from: account}, function(error, transactionHash){  })
          .on('error', function(error){ console.log("error",error); })
          .on('transactionHash', function(transactionHash)
    
          { 
            console.log("txHash",transactionHash); 
         })
          .on('receipt', function(receipt){
            

          console.log("receipt",receipt.events.IndiartOfferCreated.returnValues);
    
          let tokenId =  receipt.events.IndiartOfferCreated.returnValues.tokenId;
          let txhash = receipt.events.IndiartOfferCreated.transactionHash;  
          let seller =  receipt.events.IndiartOfferCreated.returnValues.seller;
          let creator =  receipt.events.IndiartOfferCreated.returnValues.creator;
          let price =  receipt.events.IndiartOfferCreated.returnValues.price;
          let listingTime =  receipt.events.IndiartOfferCreated.returnValues.listingTime;
          let expiryTime =  receipt.events.IndiartOfferCreated.returnValues.expiryTS;
       
          console.log("Reached here");
          
          sendResponseObject['txhash'] = txhash;
          sendResponseObject['signature'] = receipt.events.IndiartOfferCreated.signature;
          sendResponseObject['blocknumber'] = receipt.events.IndiartOfferCreated.blockNumber;
          sendResponseObject['nftContract'] = config.contractAddress;
          sendResponseObject['tokenId'] = tokenId;
          sendResponseObject['seller'] = seller;
          sendResponseObject['creator'] = creator;
          sendResponseObject['price'] = req.body.price;
          sendResponseObject['listingTime'] = listingTime;
          sendResponseObject['expiryTime'] = expiryTime;
          
          addListing(sendResponseObject);
          //addTransaction(sendResponseObject);
    
          console.log(sendResponseObject,"sendresponse");  
    
          let jsonString= JSON.stringify(sendResponseObject)
          console.log(jsonString,"jsonString");
          res.send(jsonString);
    
          });
        }
        })
        })


        app.post("/buyNFT", function(req,res){
      
            var sendResponseObject={};
        
            //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
            
            let listprice = Math.floor((req.body.price/220000)*(10**6));                                        
            
            console.log(listprice,req.body,"listprice",config.contractAddress);
            
            let tokenId = parseInt(req.body.tokenId);
    
            console.log(tokenId,"tokenID");

            contractBuyer.methods.getMarketItem(config.contractAddress,tokenId).call({from: buyerAccount}).then(function(response,err){
             
            if(response)
            {    
                console.log(response,"response");
                
                let listprice = response.price;                                        
            
                console.log(listprice,req.body,"listprice");
                

            contractBuyer.methods.sellItemAndTransferOwnershipETH(config.contractAddress, tokenId ).send({from: buyerAccount, value: listprice}, function(error, transactionHash){  })
              .on('error', function(error){ console.log("error",error); })
              .on('transactionHash', function(transactionHash)
        
              { 
                console.log("txHash",transactionHash); 
             })
              .on('receipt', function(receipt){
                
    
              console.log("receipt",receipt.events.IndiartItemSold);


        
              let tokenId =  receipt.events.IndiartItemSold.returnValues.tokenId;
              let nftContract =  receipt.events.IndiartItemSold.returnValues.nftContract;
              let txhash = receipt.events.IndiartItemSold.transactionHash;  
              let seller =  receipt.events.IndiartItemSold.returnValues.seller;
              let buyer =  receipt.events.IndiartItemSold.returnValues.buyer;
              let price =  receipt.events.IndiartItemSold.returnValues.price;

           
              console.log("Reached here");
              
              sendResponseObject['txhash'] = txhash;
              sendResponseObject['signature'] = receipt.events.IndiartItemSold.signature;
              sendResponseObject['blocknumber'] = receipt.events.IndiartItemSold.blockNumber;
              sendResponseObject['tokenId'] = tokenId;
              sendResponseObject['nftContract'] = nftContract;
              sendResponseObject['seller'] = seller;
              sendResponseObject['buyer'] = buyer;
              sendResponseObject['price'] = price;
              
              
              addTransaction(sendResponseObject);
        
              console.log(sendResponseObject,"sendresponse");  
        
              let jsonString= JSON.stringify(sendResponseObject)
              console.log(jsonString,"jsonString");
              res.send(jsonString);
                
              });
            }
            else
            {
                sendResponseObject['error'] = error;

            }
            })
            })
                
    

    app.post("/getallNFTs", function(req,res){
    
        var sendResponseObject={};

		console.log("Reached here",req.body);
        var tokens = [];

    var sendResponseObject={};

    //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
    
    contract.methods.balanceOf(account).call({from: account})
    .then(function(response,err){
        
            if(response)

            {
                console.log(response, "balance");
                let balance = response;
                let index = balance - 1; 
              
                
                while(index >= 0)  // Newer wallets appear on top - Rendered in descending order
					{
                    
                    let tokenID;
                    let tokenURI;   
                    
                    let tmp = index;

                contract.methods.tokenOfOwnerByIndex(account,index).call({from: account})
                .then(function(response,err){  
                    
                    if(response) {
                        
                        console.log(response,"tokenID")
                        tokenID = response;
    
                        contract.methods
                            .tokenURI(tokenID)
                                .call({from: account}).then(function(response,err){
                        
                                         if(response) {
                                            //console.log(response,"tokenURI")        
                                            
                                            tokenURI = response;	
                                        
                                        console.log("token ID and URI",tokenID,tokenURI)    

                                        //Check uri extensions. Minor fix here.
                                        
                                        var url = 'http://127.0.0.1:8080/ipfs/'+tokenURI;
                                         
                                        //console.log("url",url);
                                        
                                        fetchNFT(tokenID).then(function(response,err){        

                                        if(response)
                                        {

                                        console.log("Mongo response", response);

                                        let data = {};

                                        data.tokenID = tokenID;
                                        data.tokenURI = url;
                                        data.tokenDets={};
                                        if(response[0])
                                        {
                                        data.tokenDets = response[0];  
                                        }      
                                        tokens.push(data);	 
                                    

                                        if( tmp == 0)
                                        {
                                            console.log(tokens,"tokens");

                                            sendResponseObject['tokens'] = tokens;
      
                                            let jsonString= JSON.stringify(sendResponseObject)
                                            
                                            console.log(jsonString,"jsonString");
                                            
                                            res.send(jsonString);
                                        }

                                        }

                                        })

                                        }
                                         
                                       else	{
                                            console.log(err);
                                            }
                                    
                                     })
                                }	     
                                
                                else	{
                                            console.log(err);
                                        }
                                    })      
                          index--;
                          
                          }
                        }                          
        })
    })
                  
    app.post("/getallmarketNFTs", function(req,res){
    
        var sendResponseObject={};

		console.log("Reached here",req.body);
        var tokens = [];

    

    //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
    
    fetchAllNFTs().then(function(response,err){   
    
        
            if(response)

            {
                console.log(response, "NFTs");
                
                sendResponseObject['NFTs'] = response;

                let jsonString= JSON.stringify(sendResponseObject)
                                            
                console.log(jsonString,"jsonString");
                
                res.send(jsonString);
                
            }
            
            else
            {
                console.log(err, "error");

                sendResponseObject['error'] = err;

                let jsonString= JSON.stringify(sendResponseObject)
                                            
                console.log(jsonString,"jsonString");
                
                res.send(jsonString);
            }
            
        })
    })



    app.post("/getProvenance", function(req,res){
      
        var sendResponseObject={};
    
        //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
        let nftContract;

        if(!req.body.nftContract)
            nftContract = config.contractAddress
        else
            nftContract = req.body.nftContract
            
        const contractWatcher = new watchweb3.eth.Contract(nftABI, nftContract);

                contractWatcher.getPastEvents('Transfer', {             
                filter: {tokenId: req.body.tokenId}, 
                fromBlock: 0,
                toBlock: 'latest'
                })
                .then(function(events){
                  
                for(let i=0; i < events.length;i++)
                {
                    let t = i;
                    web3.eth.getBlock(events[t].blockNumber).then(function(response,err){
                    var tmp = new Date(response.timestamp);
                    var timestamp = tmp.toLocaleString();
                    events[t].timestamp = timestamp;
                    
                    if(t == events.length-1)
                    {
                    sendResponseObject['events'] = events;
                    let jsonString= JSON.stringify(sendResponseObject)
                    //console.log(jsonString,"jsonString");
                    res.send(jsonString);
                    }
                })
                }  

                });
		})


        app.post("/getTradeData", function(req,res){
            
            var sendResponseObject={};
    
            //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
            
            const marketContract = config.indiartMarketAddress
  
                
            const contractWatcher = new watchweb3.eth.Contract(marketABI, marketContract);
    
                    contractWatcher.getPastEvents('IndiartItemSold', {             
                    filter: {nftContract: req.body.nftContract, tokenId: req.body.tokenId}, 
                    fromBlock: 0,
                    toBlock: 'latest'
                    })
                    .then(function(events){
                      
                    for(let i=0; i < events.length;i++)
                    {
                        let t = i;
                        web3.eth.getBlock(events[t].blockNumber).then(function(response,err){
                        var tmp = new Date(response.timestamp);
                        var timestamp = tmp.toLocaleString();
                        events[t].timestamp = timestamp;
                        events[t].price = Math.ceil((events[t].returnValues.price*220000)/(10**6))
                        console.log("price",events[t].price);
                        if(t == events.length-1)
                        {
                        sendResponseObject['events'] = events;
                        let jsonString= JSON.stringify(sendResponseObject)
                        //console.log(jsonString,"jsonString");
                        res.send(jsonString);
                        }
                    })
                    }  
    
                    });
            })

        app.post("/getListings", function(req,res){
            
            var sendResponseObject={};
    
            //contract.methods.addMinter(account).send({from: account}, function(error, transactionHash){  })
            
            const marketContract = config.indiartMarketAddress
  
                
            const contractWatcher = new watchweb3.eth.Contract(marketABI, marketContract);
    
                    contractWatcher.getPastEvents('IndiartOfferCreated', {             
                    filter: {nftContract: req.body.nftContract, tokenId: req.body.tokenId}, 
                    fromBlock: 0,
                    toBlock: 'latest'
                    })
                    .then(function(events){
                      
                    for(let i=0; i < events.length;i++)
                    {
                        let t = i;
       
                        let tempDate;
                        tempDate = new Date(events[t].returnValues.listingTime*1000);
                        events[t].listingTimeISO = tempDate.toLocaleString();
                        tempDate = new Date(events[t].returnValues.expiryTS*1000);
                        events[t].expiryTimeISO = tempDate.toLocaleString();
                        events[t].price = Math.ceil((events[t].returnValues.price*220000)/(10**6))
                        
                        if(t == events.length-1)
                        {
                        sendResponseObject['events'] = events;
                        let jsonString= JSON.stringify(sendResponseObject)
                        //console.log(jsonString,"jsonString");
                        res.send(jsonString);
                        }
                    
                    }  
    
                    });
            })

    async function addNFT(JSdoc) {

        try
        {
    
            await client.connect();
    
            const database = client.db("indiart");
    
            const coll = database.collection("nfts");
    
            let tokenId = JSdoc.tokenId; 
            let nftContract = JSdoc.nftContract;
            
            JSdoc._id = {tokenId,nftContract};

            JSdoc.listprice = 0;
            
            const results = await coll.insertOne(JSdoc);
    
            console.log(
    
                `${results.insertedCount} documents were inserted with the _id: ${results.insertedId}`,
    
            );
    
            return;
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    }
    

    async function fetchNFT(tokenId) {

        try
        {
            
            console.log(tokenId, "token ID");
            await client.connect();
    
            const database = client.db("indiart");
    
            const coll = database.collection("nfts");
    

            const Cursor = await coll.find({"tokenId":tokenId}).project({_id:0}).toArray();

            return Cursor;

        }
                
                catch(error)
                {
                    console.log(error);
                }
        }


        async function fetchAllNFTs() {

            try
            {
                
                await client.connect();
        
                const database = client.db("indiart");
        
                const coll = database.collection("nfts");
        
                //Enable Greater than clause to check only listed NFTS

                //const Cursor = await coll.find({listprice: { $gt: 0 }}).project({_id:0}).toArray();
                
                const Cursor = await coll.find().project({_id:0}).toArray();

                return Cursor;
    
            }
                    
                    catch(error)
                    {
                        console.log(error);
                    }
            }
        
              

        async function addTransaction(JSdoc) {

            try
        {
    
            await client.connect();
    
            const database = client.db("indiart");
    
            const coll = database.collection("transactions");
    
            const doc = JSdoc;
    
            const results = await coll.insertOne(JSdoc);
    
            console.log(
    
                `${results.insertedCount} documents were inserted with the _id: ${results.insertedId}`,
    
            );
    
            return;
        }
        catch(error)
        {
            console.log(error);
            return;
        }          
    }


    async function addListing(JSdoc) {

        try
    {

        await client.connect();

        const database = client.db("indiart");

        const coll = database.collection("listing");

        const coll2 = database.collection("nfts");


        let tokenId = JSdoc.tokenId; 
        let nftContract = JSdoc.nftContract;

        JSdoc._id = {tokenId,nftContract};


        const results = await coll.update( { _id: JSdoc._id  },
            {
                $set: {JSdoc}
            },
            {
              upsert: true
            }
         );

        console.log(results.n,"Documents inserted");

       console.log(JSdoc.price, JSdoc,"Price");

        const results2 = await coll2.update( { tokenId: { $eq: tokenId } , nftContract: { $eq: nftContract } },
            {
            $set: {
                listprice: JSdoc.price,
                listingTime: JSdoc.listingTime,
                expiryTime: JSdoc.expiryTime
            }
            },
            {
              upsert: true
            }
         );

        console.log(results2.n,"Documents updated");
        
         return;
    }
    catch(error)
    {
        console.log(error);
        return;
    }          
}