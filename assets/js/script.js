// inserindo o caminho da api

function loadPokemon(name){
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(baseUrl)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        
        const meuArray = data['types'];
        const moves = data['moves'];
        const pokemonMove = [];
        
        for (let index = 0; index < moves.length; index++) {
            pokemonMove.push(data['moves'][index]['move']['name']);
            
        }
        
        if(!meuArray[1]){
            let tipo = data['types']['0']['type']['name'];
            document.getElementById('type').innerHTML = tipo;
        }else{
            let tipo = data['types']['0']['type']['name'];
            let tipo2 = data['types']['1']['type']['name'];
            document.getElementById('type').innerHTML = tipo+ '/' + tipo2;
        }
      

        
        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('numero').innerHTML = data['id'];
        document.getElementById('pokemon-weight').innerHTML = 'weight: '+data['weight'];
        document.getElementById('pokemon-height').innerHTML = 'height: '+data['height'];
        document.getElementById('pokemon-moves').innerHTML =  pokemonMove;

             
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src',img);
        //console.clear();
        console.log(data);
        //o que fazer com os dados que vem por json
    })
   .catch((erro)=>{
        //tramento de erro
        console.log('Erro' + erro);
   });
}
const nome =  window.location.search;

document.getElementById('procurar').onclick = loadPokemon(nome.split('=')[1]);






