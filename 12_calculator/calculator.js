const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
  let ans =0;
	arr.forEach(e => {
    ans+=e;
  }); 
  return ans;
};

const multiply = function(arr) {
  let ans =1;
	arr.forEach(e => {
    ans*=e;
  }); 
  return ans;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(n) {
	if(n == 0){
    return 1;
  }
  let ans = 1;
  for(let i=1;i<=n;i++){
    ans*=i;
  }
  return ans;
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
