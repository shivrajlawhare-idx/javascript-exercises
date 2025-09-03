const removeFromArray = function(arr,...x) {
    let ans = [];
    arr.forEach(element => { 
        if(!x.includes(element)){
            ans.push(element);
        }
    });
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
