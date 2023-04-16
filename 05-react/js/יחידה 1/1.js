function sumArray(numArr = [0]) {
    return new Promise((resolve, reject) => {
        let sum = numArr.reduce((a, b) => a + b)
        if (sum > 10) {
            resolve("The sum was good! It's " + sum);
        } else {
            reject("The sum was too small")
        }
    });
}

sumArray([1,2,3,4,5])
    .then(sum => console.log(sum))
    .catch(error => console.log(error));