function sumAll(arr) {
    let counter = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        counter += i;
    }

    return counter;
}

console.log(
    sumAll([1, 4]), sumAll([4, 1])
);