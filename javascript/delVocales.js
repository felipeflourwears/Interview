/*
Escribe una función en JavaScript que reciba una cadena de texto
y devuelva la misma cadena pero sin vocales.
Las vocales a eliminar son: a, e, i, o, u (minúsculas y mayúsculas).

Ejemplo:
Entrada: "Hello World"
Salida: "Hll Wrld"
*/

function sinVocales(cadena) {
  return cadena.replace(/[aeiouAEIOU]/g, '');
}

const sentence = sinVocales("Hello World");
console.log(sentence);

/*console.log("Hello")*/