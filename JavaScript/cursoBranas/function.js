var produto={nome:'Sapato', preco:  150};

var formularImpostoA = function(preco){return preco*0.01;};
var formularImpostoB = function(preco){return preco*0.02;};


var calculPreco = function(produto,formularImpostoA) {
    return produto.preco + formularImpostoA(produto.preco);
}

calculPreco(produto,formularImpostoA); //165
calculPreco(produto,formularImpostoB); //180 


var helloWord = function () {
    return function() {
        return "Hello World";
    };
};

console.log(helloWord);
console.log(helloWord()); //[Function]
console.log(helloWord()()); //'Hello World'

var pessoa = {
    nome: "João",
    idade: 20,
    getIdade:function() {
        return this.idade; // refencia da idade no escopo global
    }
};

console.log(pessoa); // retorna tudo
console.log(pessoa.getIdade); // [Function]
console.log(pessoa.getIdade()); //20

var getIdade = function() {
    return this.idade;
};

var pessoa = {
    nome:"João",
    idade:20,
    getIdade:getIdade // referencia da função getIdade
};
console.log(getIdade); // [Function]
console.log(pessoa.getIdade()); // 20

// função.call(escopo,parametro1,parametro2) 
// função.apply(escopo,parametros)

var getIdade = function() {
    return this.idade + extra;
};

var pessoa = {
    nome:"João",
    idade:20,
    getIdade:getIdade // referencia da função getIdade
};

console.log(pessoa.getIdade(2)); // 22
console.log(getIdade()); // undefined
console.log(getIdade.call(pessoa,2 , 1 , 3)); // 22 -  parametros ignorados, acessando atravez de arguments o
                                             // mesmo vale para apply
console.log(getIdade.apply(pessoa,[2 , 1 , 3])); // 22 - parâmetros são atraves de Array  

// Funções Contrutoras vs. Funções Fábrica

//Funções Fábrica

var criarPessoa = function(nome,idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(criarPessoa("Pedro",20));
console.log(criarPessoa("Maria",33)); // faz mais de um objeto sem "instacia" o mesmo , opcional para varios
                                     // repetido nos codigo


// Função Construtoras

var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

console.log(new Pessoa("Pedro",20)); // sempre usa-se operador new em função construtora
console.log(new Pessoa("Maria",33)); // cria objeto com "instancia" 

var pedro = {};

Pessoa.call(pedro, "Pedro" , 20);
console.log(pedro);

var helloWord = function() {
    var message = "Hello World"; // referencia 
    return function() {
        return message; // mantem a refencia
    };
};

//closures  mantem referencia de function, fazendo usar denovo o resultado mesmo dps da function ser retornada.


var counter  = 0;
var add = function () {
    return ++counter; 
};

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

var itens = [];
var add = function (item) {
    itens.push(item);
    return item;
};

console.log(add("A")); //[A]
console.log(add("B")); //[A,B]
console.log(add("C")); //[A,B,C]

console.log(add()); // undefined

// objeto é um mapa onde se adiciona remove e modifica valores a qualquer momento

var counter = {
  value = 0,
  add: function() {
      return ++this.value;
  }  
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
    value = [],
    add: function(item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(add("A")); //[A]
console.log(add("B")); //[A,B]
console.log(add("C")); //[A,B,C]

counter.value = undefined;
counter.add(); //NaN

//Funções são objetos que contém um bloco de código executavel
//bloco é isolado

var counter = function() {
    var value = 0;
    var add = function() {
        return ++value;
    };
};

console.log(counter.value); // undefined
console.log(counter.add); //undefined



var createCounter = function() {
    var value = 0;
    return{
        add = function() {
            return ++value;
          } 
    };
};                              // Factory Function
var counter = createCounter();
counter.value; // undefined
counter.add(); // 1 
counter.add(); // 2              
counter.add(); // 3




var Counter = function() {
    var value = 0;
    this.add = function() {
            return ++value;
    };
};                                // Constructor Function          
var counter = new Counter();
counter.value; // undefined
counter.add(); // 1 
counter.add(); // 2               
counter.add(); // 3


var counter = (function() {
    var value = 0;
    return {
           add: function () {
               return ++value;
           },
           reset: function() {
               return value = 0;
           }
    };
})();                              // Module Pattern

console.log(counter.value); // undefined
console.log(counter.add()); // 1 
console.log(counter.add()); // 2               
console.log(counter.add()); // 3
counter.reset(); // resta a contagem
cons,ole.log(counter.add()); // 1



var counter = (function() {
    var _value = 0;
    var _add = function () {
        return ++_value;
    };
    var reset = function() {
        return _value = 0;
    };
    return {
      _add: _add,
      _reset: _reset     
    };                                  
})();                                // Revealing Module Pattern

console.log(counter.value); // undefined
console.log(counter.add()); // 1 
console.log(counter.add()); // 2              
console.log(counter.add()); // 3
counter.reset(); // resta a contagem
console.log(counter.add()); // 1
