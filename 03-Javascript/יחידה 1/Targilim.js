// 1)

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function displayValues(obj) {
    let str = ""
    const keys = Object.keys(obj);
    keys.forEach(element => {
        str += element + " => " + obj[element] + '\n'
    });
    console.log(str);
}

displayValues(student);

// 2)

function keyCount(obj) {
    return (Object.keys(obj).length)
}
console.log("student key amount => ", keyCount(student));

// 3)

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

function sortByLibraryId(books = [], rising = false) {
    risingMultiplier = rising ? 1 : -1;
    books.sort((a, b) => {
        return (a.libraryID - b.libraryID) * risingMultiplier
    });
    return books;
}
console.log(sortByLibraryId(library, true))

// 4) 

function arrFromObj(obj) {
    const keys = Object.keys(obj)
    const arr = []
    keys.forEach(element => {
        arr.push([element, obj[element]])
    });
    return arr;
}
console.log(arrFromObj(student));

// 5)

function swapKeysAndValues(obj) {
    let keys = Object.keys(obj);
    let newObj = {};
    keys.forEach(element => {
        newObj[obj[element]] = element;
    });
    return newObj;
}
console.log(swapKeysAndValues(student))

// 6)

function doesKeyExist(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(doesKeyExist(student, "name"))
console.log(doesKeyExist(student, "debt"))

// 7)

let charlesLibrary = [
    {
        title: "Bumpty goes to Flumpty",
        author : "Bobby Boop",
        alreadyRead: true
    },
    {
        title: "Flibby has a Gibbly",
        author : "Gibby Gob",
        alreadyRead: true
    },
    {
        title: "Hobbidy does a Kobbidy",
        author : "Kerbo Berbo",
        alreadyRead: false
    },
    {
        title: "Sloppity eats some Choggidy",
        author : "Filly Billy",
        alreadyRead: true
    },
    {
        title: "Zippity flies a Mippidy",
        author : "Kozo Flozo",
        alreadyRead: false
    },
    {
        title: "Hickidy meets a Bickidy",
        author : "Splitty Slop",
        alreadyRead: false
    },
    {
        title: "Shoggedy finds a Yoggidy",
        author : "Wotty Woop",
        alreadyRead: true
    },
    {
        title: "Charles has Enough",
        author : "Charles",
        alreadyRead: false
    },
]

for (let book of charlesLibrary){
    let str = ""
    if (book.alreadyRead) {
        str += "You already read "
    } else {
        str += "You still need to read "
    }
    str += `"${book.title}" by ${book.author}`
    console.log(str);
}