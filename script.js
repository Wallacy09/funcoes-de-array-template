function multiplicarPor3(arrayDeNumeros){
  let novoArray = []
  for(let i = 0; i < arrayDeNumeros.length; i++){
    novoArray.push(arrayDeNumeros[i] * 3)
  }
  return novoArray
}

const arrayNumerico = [1, 3, 5, 6, 10]


const retornarPares = (arrayDeNumeros) =>{
  let novoArray = []
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] % 2 === 0){
      novoArray.push(arrayDeNumeros[i])
    }
  }
  return novoArray
}

console.log(retornarPares(arrayNumerico));

function fazerOperacoes(array, callback){
    const novoArray = callback(array)
    return novoArray
  }

console.log("callback multiplicando por 3", fazerOperacoes(arrayNumerico, multiplicarPor3));
console.log("pegar pares em callback", fazerOperacoes(arrayNumerico, retornarPares));

//----------------------------------------------
//map()

const comoFazerOMap = array.map((elemento, indice, array) => {
  return //algum valor

})

//elemnto: item que vai mudar a cade ieração do map - OBRIGATORIO !!!

//indece: indica o indice atual a cada interação do array - opcional

//array: representa o própio array - opcional


const tripicarValor = arrayNumerico.map((numero, indice, array) => {
  return numero * 3
})

console.log("MAP", tripicarValor);

// -----------------------------------------

//filter()

const comoFazerOFilter = array.filter((elemento, indice, array) => {
  //codigo que vai filtrar os elemntos do array
  return //boleano - se for true, o elemento entra no novo array
})

//elemento: item que vai filtrado a cada iteração do filter - OBRIGATÓRIO !!!
//indice: indica o indince atual a cada iteração do array - opcional
//array: representa o próprio array - opcional

//callback separada

const retornarParess = (numero) => {
  return numero % 2 === 0
}

const filterPares = arrayNumerico.filter(retornarParess)

console.log("filter", filterPares);

//callback direto no filter

const pegarPares = arrayNumerico.filter((numero) => {

  return numero % 2 === 0
})

console.log("filter2", pegarPares);


//-------------------------------------------

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const pokemonsVida = pokemons.map((poke) =>{
  nome:poke.name;
  vida:poke.vida = 100;
  return poke
})

console.log(pokemonsVida);

//Filter

const pokeFilter = pokemons.filter((poke) => {
  return poke.tipo === "fogo";
})

console.log(pokeFilter);