/*
Escribe una función en JavaScript que reciba una lista de números
y la imprima en orden inverso.

Entrada: [1, 2, 3, 4, 5]
Posibles salidas:
5
4
3
2
1

[5, 4, 3, 2, 1]
*/

/*const numeros = [1, 2, 3, 4, 5];*/

function printReverse(lista) {
  for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
  }
  
  const listaInvertida = lista.slice().reverse();
  console.log(listaInvertida);
}

printReverse([1, 2, 3, 4, 5]);
