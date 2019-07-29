var homem = {
    sexo: "Masculino"
};

var joao = {
    nome: "João",
    idade: 20,
    // __proto__: homem
};
Object.setPrototypeOf(joao , homem);

var pedro = Object.create(homem);
pedro.nome = "Pedro",
pedro.idade = 18;

for(var property in joao) {
    // if(!joao.hasOwnProperty(property)) continue;
    console.log(property);
}
