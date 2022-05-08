let sum =0;

const calc=(n)=>{
    for(i=0;i<=n;i++){
        sum+=i;
    }
    return sum;

}
 console.time();
console.log(calc(10));
console.timeEnd();

