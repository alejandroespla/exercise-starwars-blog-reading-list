// este archivo sirve para trabajar as logicas del fetch

// me traigo todos los personajes
export async function getPeople(){
    const response = await fetch("https://www.swapi.tech/api/people/?expanded=true")
    const data = await response.json()
    console.log(data.results)
    return data.results
}

// me traigo por id el personaje
// export async function getPeopleById() {
//     const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
//     const data = await response.json()
//     console.log(data)
// }


export async function getPlanets(){
    const response = await fetch (`https://www.swapi.tech/api/planets/?expanded=true`)
    const data = await response.json()
    console.log(data.results)
    return data.results
}




