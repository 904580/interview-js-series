let promise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved")},100000);
  
});

async function asyncFunc(){
    let result = await promise;
    console.log(result);
    console.log('hello');
}
asyncFunc();