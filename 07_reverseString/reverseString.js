const reverseString = function(word) {
    let ans = "";
    let len = word.length;
    for(let i=len-1;i>=0;i--){
        ans+=word[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
