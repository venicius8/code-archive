/*
Filter Method:

No freeCodeCamp, você fez o módulo "Football Team Cards". Crie um array de objetos (ex: jogadores de futebol) e use filter() para retornar apenas jogadores com idade acima de 25 anos.
Exemplo:

``` js
const players = [
  { name: "João", age: 22 },
  { name: "Pedro", age: 27 },
  { name: "Ana", age: 30 }
];
const olderPlayers = players.filter(... => ...);
console.log(olderPlayers); // [{ name: "Pedro", age: 27 }, { name: "Ana", age: 30 }]
```
*/

const players = [
  { name: "Gustavo", age: 44 },
  { name: "Roberta", age: 18 },
  { name: "Bruna", age: 32 },
  { name: "Maria", age: 25 },
  { name: "Lucas", age: 28 },
  { name: "Clara", age: 20 },
];

const olderPlayers = players.filter((player) => player.age > 25);

console.log(olderPlayers);
