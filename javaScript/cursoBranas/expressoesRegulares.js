//  sequencia de caracteres que especificam um padrão formal
// - validação de campos
// - extração de dados
// - substituição de caractere em texto

var regExp = /<expressão regular >/
 

var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.exec(telefone)); // ['9999-9999', index:0,input:'9999-9999'] 
console.log(regExp.test(telefone)); // true

//---------------------------------------------------------

var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone)); // true


var regExp = /^\(48\) 9999-9999$/; // ^ inicia com 
var telefone = "(48) 9999-9999"; // $ termina com 
console.log(regExp.test(telefone));

//--------------------------------------------------------

/*
    [abc]  - aceita qualquer caractere do grupo , no caso abc
    [^abc] - Não aceita qualquer caractere dentro do grupo nesses caso abc
    [0-9] - aceita quakquer caractere entre 0 e 9
    [^0-9] - Não aceita qualquer caractere entre 0 e 9
    */


    
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(80) 9876-1324"; 
console.log(regExp.test(telefone)); // true

//-------------------------------------------------------

/*
    {n} - quantifica um numero especifico 
    {n,} - quantifica um numero minimo
    {n,m} - quantifica um numero minimo e um maximo
*/


var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(80) 9876-1324"; 
Console.log(regExp.test(telefone)); 



var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone1 = "(80) 9876-1324"; 
console.log(regExp.test(telefone1));

var telefone2 = "(80) 9876-1324"; 
console.log(regExp.test(telefone2));

//------------------------------------------------------

/*
    ? - Zero ou um 
    * - Zero ou mais
    + - Um ou mais
*/

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

var telefone = "(80) 98761324"; 
console.log(regExp.test(telefone));

var telefone2 = "(80) 9876-1324"; 
console.log(regExp.test(telefone2));

//-----------------------------------------------------

var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));

//-----------------------------------------------------

/*
    . - representa qualquer caractere
    \w - representa o conjunto [a-zA-Z0-9_]
    \W - representa o conjunto [a-zA-Z0-9_]
    \d - representa o conjunto [0-9]
    \D - representa o conjunto [^0-9]
    \s - representa um espaço em branco
    \S - representa um não espaço em branco
    \n - representa uma quebra de linha
    \t - representa um tab
*/

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

// --------------------------------------------------

/*
    i - case-insensitive maatching
    g - global matching
    m - multiline matching
*/


var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

//----------------------------------------------------


var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.replace(regExp, "telefone")); //troca o regex
