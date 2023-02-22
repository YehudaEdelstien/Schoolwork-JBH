const outputElement = document.getElementById("printout");

const baseUrl = "https://swapi.dev/api/";
const lukeSrc = "people/1/";
const filmsSrc = "films"

async function displayResource(target, printerFunc) {
    outputElement.innerHTML = "Loading...";
    let resource = await fetch(baseUrl + target).then(resource => resource.json())
    printerFunc(resource);
}

function printString(str) {
    outputElement.innerHTML = str;
}

function printLukeData({height, eye_color}){
    printString(`Luke Skywalker<br>Height: ${height}<br>Eye color: ${eye_color}`)
}

function printGeorgeMovieData({results: movies}) {
    const georgeLucas = "George Lucas"

    let str = ""
    for(const movie of movies) {
        if (movie.director = georgeLucas) {
            str += movie.title + "<br>"
        }
    }
    str = str.slice(0, -4); 

    printString(str);
}

function printMoviesWithDarthVader({results: movies}) {
    const darthVader = "https://swapi.dev/api/people/4/"

    let str = ""
    for(const movie of movies) {
        if (movie.characters.includes(darthVader)) {
            str += movie.title + "<br>"
        }
    }
    str = str.slice(0, -4); 

    printString(str);
}

document.getElementById("btn1").addEventListener('click', () => {displayResource(lukeSrc, printLukeData)})
document.getElementById("btn2").addEventListener('click', () => {displayResource(filmsSrc, printGeorgeMovieData)})
document.getElementById("btn3").addEventListener('click', () => {displayResource(filmsSrc, printMoviesWithDarthVader)})
// displayResource(filmsSrc, printMoviesWithDarthVader);
// displayResource(filmsSrc, printGeorgeMovieData)
// displayResource(lukeSrc, printLukeData);