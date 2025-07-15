let string = "Um \"texto\""; // Escapar caractere e poder utilizar duas vezes aspas duplas dentro da string.
console.log(string);

let string2 = "Texto";
console.log(string2[1]); // Verifica o index da string
console.log(string2.charAt(3)); // Verifica o char do index selecionado da string
console.log(string2.concat(' Concatenado', ' assim')); // Concatena com string
console.log(string2.indexOf('o', 1)); // Busca index
console.log(string2.lastIndexOf('T', 1)); // Busca index ao contrário
console.log(string2.match(/[a-z]/g)); // Retorna as letras da string