function filterDoubles(arr = []){
    return arr.filter((element, index) => arr.indexOf(element) === index)
}

const myArr = ["hello", "hello", 99, 99, 84, 72, "book", "funny", "funny"]

console.log(filterDoubles(myArr));