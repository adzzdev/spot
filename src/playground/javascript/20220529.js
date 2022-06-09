/**
 * 2022/05/29
 * Checks out the Array.find() method
 */

const sampleArray = [1,2,3,4,5];

const findValue = sampleArray.find(function(val,i,obj){
    if(val === 5){
        return true;
    }else{
        return false
    }
})

console.log(findValue);
