// area of circle

const radius =[3,1,2,4];

const calculateArea = function(raduius){
    const output = [];
    for(let i=0;i<radius.length;i++){
    output.push(Math.PI*radius[i]*radius[i]);
}
return output;
};

console.log(calculateArea(radius));

//area of circumference


const calculateCircumference = function(radius){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(2*Math.PI*radius[i]*radius[i]);
    }
    return output;

};

console.log(calculateCircumference(radius));

//area of diameter

const calculateDiameter = function(radius){
    const output=[];
    for(let i=0;i<radius.length; i++){
        output.push(2*radius[i]);
    }
    return output;
};

console.log(calculateDiameter(radius));
