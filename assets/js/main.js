const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore')
const limit = 5;
let offset = 0;



function loadPokemonItems(offset, limit) {
  pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
    const newHTML = pokemons.map((pokemon) => { 
      console.log(pokemon.number)
      
      return `
      <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="details">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>

          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </li>
    `}).join('')
    pokemonList.innerHTML += newHTML
  })
}
  
loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  loadPokemonItems(offset, limit)
})