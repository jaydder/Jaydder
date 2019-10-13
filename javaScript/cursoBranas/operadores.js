!!0 // false

!!NaN // false

!!'' //false

!!false // false

!!null //false

!!undefined //false

var generateSerial = function(max) {
    max = max || 1000;
    return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
generateSerial(1000);
generateSerial(100);
generateSerial(10);
generateSerial();

var Pessoa = function(nome,idade) {
    this.nome = nome;
    this.idade = idade;
};
var pedro = new Pessoa("Pedro" , 20);
console.log(pedro instanceof Pessoa);
console.log(pedro instanceof Date);
console.log("nome" in pedro);
console.log("peso" in pedro);
delete pedro.nome;
console.log("nome" in pedro);

// ----------------------------------------

//operador ternario // (expressão) ? true:false

