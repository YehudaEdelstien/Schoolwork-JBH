function myFilter(callbackfn, thisArg = undefined) {
    callbackfn = callbackfn.bind(thisArg);
    let myArr = [];
    for(let i = 0; i < this.length; i++){
        if(callbackfn(this[i], i, this)){
            myArr.push(this[i]);
        }
    }
    return myArr;
}
Array.prototype.MyFilter = myFilter;


function myFind(callbackfn, thisArg = undefined) {
    callbackfn = callbackfn.bind(thisArg);
    for (let i = 0; i < this.length; i++){
        if(callbackfn(this[i], i, this)){
            return this[i]
        }
    }
    return undefined;
}
Array.prototype.MyFind = myFind;


function myReduce(callbackfn, initialValue) {
    let accumulator;

    if (initialValue === undefined){
        accumulator = this[0];
    } else {
        accumulator = callbackfn(initialValue, this[0], 0, this)
    }

    for(let i = 1; i < this.length; i++){
        accumulator = callbackfn(accumulator, this[i], i, this);
    }
    return accumulator;
}
Array.prototype.MyReduce = myReduce


// Tests
const testArr = [1, 52, 34, 7, 28, 90];
const numArr = [1, 2, 3, 4, 5, 6]

console.log(numArr.MyFilter(function(element, index, array){
    return this[index] > 10;
}, testArr));

console.log((numArr.MyFind(function(element, index, array){
    return this[index] > 10;
}, testArr)))

console.log(testArr.MyReduce((accumulator, currentValue) => accumulator + currentValue, 10))