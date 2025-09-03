const { e } = require("../04_mathEquations/mathEquations");

const getTheTitles = function(arr) {
    let ans = [];
    arr.forEach(e => {
        ans.push(e.title);
    });
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
