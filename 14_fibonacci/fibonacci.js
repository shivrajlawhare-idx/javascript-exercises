const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }else if(n==0){
        return 0;
    }else if(n==1 || n==2){
        return 1;
    }
    let arr = [1,1];
    let temp = 0;
    for(let i=2;i<n;i++){
        temp = arr[i-1] + arr[i-2];
        arr.push(temp);
    }
    return arr[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
