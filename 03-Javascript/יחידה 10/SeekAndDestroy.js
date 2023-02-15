function destroyer(arr) {
    const args = Array.from(arguments);
    arr = arr.filter(el => args.indexOf(el) === -1);
    return arr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);