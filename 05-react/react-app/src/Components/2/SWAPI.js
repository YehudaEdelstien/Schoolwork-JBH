async function swapiFetch() {
    try {
        const luke = await fetch("https://swapi.dev/api/people/1").then(res => res.json())
        const films = luke.films;

        const directors = []
        for (let filmSource of films) {
            const film = await fetch(filmSource).then(res => res.json());
            directors.push(film.producer);
        }
        
        console.log(directors)
    } catch {
        console.log("Error: failed to retrieve resource at swapiFetch")
    }
}

swapiFetch();