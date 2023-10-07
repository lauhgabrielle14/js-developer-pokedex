const pokeApi = {}

window.onload = () => {
    getPokemonIdAndInfo()
}
async function getPokemonIdAndInfo() {
    const queryString = new URLSearchParams(window.location.search)
    const idPokemon = queryString.get('id')
    const url = `https://pokeapi.co/api/v2/characteristic/${idPokemon}/`

    if (isNaN(idPokemon)) {
        return alert("O id informado não está dentro dos padrões")
    }

    const request = await fetch(url)
    const response = await request.json()

    const pokemonDescription = response?.descriptions[7].description
    console.log(pokemonDescription)
   document.getElementById("conteudo").innerHTML = pokemonDescription;
}
