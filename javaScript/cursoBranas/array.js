var carros = ["Ka","Corsa","Palio"];

var carros = [];
carros[0] = "Ka";
carros[1] = "Corsa";
carros[3] = "Palio";

var carros = new Array("Ka","Corsa","Palio");


var carros = new Array(10);

carros.valueOf(); // "Ka","Corsa","Palio"
carros.toString(); // ["Ka","Corsa","Palio"]
carros.length; //3

carros.push("Gol"); // inserido na ultima posição - 04

carros.pop(); // remove o ultimo elemento - Gol 04

carros.unshift("Gol") // inseri no começo do array - 0

carros.shift(); //remove o primeiro elemento - 0
 
carros.indexOf("Corsa"); // localiza o item no array - 1 

var pos = carros.indexOf("Corsa"); //1

carros.splice(pos,1); //["Corsa"]  removeu o item conforme seu item(s)
// apos o 3 parametro do splice seram itens para ser adicionados

carros.splice(pos,1,"Sonic"); // troca o nome da posição 1

carros.splice(pos,0,"Sonic"); // adiciona um item no Array na posição indicada 

carros.forEach(function(elemento){
    // percorre pelo array , mesma função do for padrão
}); 

var carros = [];

carros[0] = {marca:"Ford",modelo:"Ka"};
carros[1] = {marca:"Chevrolet",modelo:"Corsa"};
carros[2] = {marca:"Fiat",modelo:"Palio"};

carros.filtre(function(elemento){
    return elemento.marca ==="Ford"; //[{marca:"Ford",modelo:"Ka"}]
});

carros.every(function(elemento){
    return elemento.marca ==="Ford"; //testa se todos os elementos são da "Ford" - false
});

carros.some(function(elemento){
    return elemento.marca ==="Ford"; //testa se há algum elemento da"Ford" -  true
});


carros.map(function(elemento){
    return elemento.marca ; // cria um novo array derivado.
});

var carros = [];

carros[0] = {marca:"Ford",preco:28800};
carros[1] = {marca:"Chevrolet",preco:34750};
carros[2] = {marca:"Fiat",preco:32000};


carros.reduce(function(prev,cur){
    return prev/*elemento anterior*/ + cur.preco/*elemento atual*/;  //
},0/*começo da contagem*/);

var carros = ["Ka","Corsa","Palio"];
var motos = ["Honda","YAmaha"];

var veiculos = carros.concat(motos); // gera um novo array com os itens 

veiculos.toString(); //["Ka","Corsa","Palio","Honda","Yamaha"]

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

carros.slice(0,2); // ["Ka" , "Corsa"] inicia na posição e terminal na tal -1
carros.slice(1,3); // ["Corsa", "Palio"] inicia na posição e terminal na tal -1
carros.slice(2); // ["Palio","Gol"] começa a partir da posição 2 e vai ate  o fina

carros.reverse(); // retorna o array de traz para frente


var carros = [];

carros[0] = {modelo:"Ka",preco:28800};
carros[1] = {modelo:"Corsa",preco:34750};
carros[2] = {modelo:"Palio",preco:32000};

carros.sort(function(a,b){
    return a.preco - b.preco; //ordena o Array em orde alfabetica e/ou ordem ascedente 
});

carros.valueOf(); // ["Ka","Palio","Corsa"] 


var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";  // separa a String com algum operador 
carros[3] = "Gol";

carros.join(";"); //"Ka;Corsa;Palio;Gol"  