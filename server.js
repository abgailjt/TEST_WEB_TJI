var myAcc = 'c922872411f6de12a5d0060a766e9f7433112d06'; // Imported Account on ROPSTEN
//var myAcc = '0x4a7af8e22fb5ccca4e69d5625901d228c820ee3b';

var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//admin.startRPC("127.0.0.1", 8545, "*", "web3,db,net,eth");

web3.eth.defaultAccount = myAcc;
console.log(web3.eth.accounts);


//Build the server
var express = require('express');
var app = express();
var localAssetsDir = __dirname;//Point to index.html
app.use(express.static(localAssetsDir));
var server = app.listen(9091, function(){
var host = server.address().address;
var port = server.address().port;

console.log("server starting ...");
});
