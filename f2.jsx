 function x(){
    for(let i=1; i<=2000000;i++){
      setTimeout(function(){//cb
          console.log(i);

      },3000);
    }
    console.log("code with annop saini");
 }
 x();