const convertToCelsius = function(f) {
  let ans = (f-32)*(5/9);
  ans = parseFloat(ans.toFixed(1));
  return ans;
};

const convertToFahrenheit = function(c) {
  let ans = (c*(9/5) + 32);
  ans = parseFloat(ans.toFixed(1));
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
