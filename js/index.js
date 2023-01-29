const listPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();

  console.log(data.results);

  let cards='';

  data.results.forEach((pokemon, index) => {
    cards += `

<div class="col mb-4" id="${index}">
  <div class="card">

  <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" class="card-img-top" alt="...">
            </div>
            <div class="flip-card-back">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.png" class="card-img-top" alt="...">
 
     
            </div>
        </div>
    </div>
    <br>
    <br>
      <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
      </div>
    </div>

</div>

    
  
  
  `;
  });
  document.getElementById('cards').innerHTML = cards;






}

window.addEventListener('load', function () {
  listPokemon();
});

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
//https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/versions/generation-v/black-white/back

/*
<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Avatar">
            </div>
            <div class="flip-card-back">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                    alt="Avatar">
            </div>
        </div>
    </div>*/
