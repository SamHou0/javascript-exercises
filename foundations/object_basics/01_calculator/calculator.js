const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(input) {
	return input.reduce((sum,item)=>sum+item,0);
};

const multiply = function(input) {
    return input.reduce((res,item)=>res*item,1)
};

const power = function(base,exp) {
    let res = 1;
	for(let i=0;i<exp;i++){
        res*=base;
    }
    return res;
};

const factorial = function(num) {
    if(num===0) return 1;
    let res = num;
    for(let i=1;i<num;i++){
        res*=i;
    }
    return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
