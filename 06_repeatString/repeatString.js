const repeatString = function(word, n) {
    if (n < 0) return "ERROR";
    let ans = "";
    for(let i=1;i<=n;i++){
        ans += word;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
