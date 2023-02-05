const listPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();

    let cards = '';

    data.results.forEach((pokemon, index) => {
        cards += `

    <div>
        <img alt="${pokemon.name}"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png"
            class="mx-auto h-25 w-25 object-cover " />
        
        <p class="text-center text-lg font-bold text-gray-700">${pokemon.name}</p>
    </div>

    `;
    });
    document.getElementById('cards').innerHTML = cards;

}

window.addEventListener('load', function () {
    listPokemon();
});
