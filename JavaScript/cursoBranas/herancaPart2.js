// var criarHomem = function(nome,idade) {
//     return {
//         nome: nome,
//         idade: idade,
//         sexo: sexo
//     };
// };

// var joao = criarHomem("João" , 20);
// var pedro = criarHomem("Pedro" , 18);

//-------------------------------------

var Homem = function(nome , idade) {
    this.nome = nome;
    this.idade = idade;

};

Homem.prototype.sexo = "Masculino";

var joao = new Homem("João" , 20);
console.log(joao);
console.log(joao.sexo);

var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro,"Pedro" , 18);
console.log(pedro);
console.log(pedro.sexo);

Homem.prototype.sexo = "Feminino"; 
console.log(joao.sexo);
console.log(pedro.sexo);

// [[prototype]] - prototipo do objeto ,cadeia de prototipo e caso não encontre a propriedade busca direto no prototipo 
// prototype - propriedade prototipe , objeto que as funçoes tem e servem para compartilhar propriedade criados por mim daquela função  
