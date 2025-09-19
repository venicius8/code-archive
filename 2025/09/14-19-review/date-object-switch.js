/*
Date Object com Switch:

Escreva uma função que recebe uma data (ex: new Date()) e retorna o dia da semana por extenso (ex: "Segunda-feira") usando switch.
Exemplo:

``` js
function getDayName(date) {
  const day = date.getDay();
  switch (day) {
    case 0: return "Domingo";
    // Complete os outros cases
    default: return "Dia inválido";
  }
}
console.log(getDayName(new Date("2025-09-19")));
```

Teste com 3 datas diferentes (ex: hoje, ontem, e uma data futura).
*/

function getDayName(date) {
  const day = date.getDay();
  switch (day) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    default:
      "Dia inválido";
  }
}

console.log(getDayName(new Date()));
