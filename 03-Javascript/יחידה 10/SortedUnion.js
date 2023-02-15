function uniteUnique(...arrays) {
    const myArr = [];
    arrays.forEach(arr => {
        arr.forEach(el => {
            if (myArr.indexOf(el) == -1){
                myArr.push(el);
            }
        })
    })
    console.log(myArr)
    return myArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
