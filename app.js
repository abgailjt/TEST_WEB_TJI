$(document).ready(function(){
      $('#button1').on('click', function(event) {

        console.log('button1 clicked');
        var abi = [{"constant":false,"inputs":[],"name":"increment","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getIteration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

        // creation of contract object
        var MyContract = web3.eth.contract(abi);

        // initiate contract for an address
        var myContractInstance = MyContract.at('0xc4abd0339eb8d57087278721986382264244252f');

        // call constant function
        var result1 = myContractInstance.increment(function(err,res){
          if(err)
            console.log('the result1 error:'+err);
          else
            console.log('the result1 res:'+res);
        });
        console.log('increment() result:'+result1); // '0x25434534534'

        // send a transaction to a function
        // var result2 = myContractInstance.increment(function(err,res){
        //   if(err)
        //     console.log('the result2 error:'+err);
        //   else
        //     console.log('the result2 res:'+res);
        // });
        // console.log('getIteration() result2:'+result2);



        $('#showButton1')
          .html('the result1 is:'+result1)
          .css('color', 'orange');
      });

});
