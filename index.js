const prompt = require('prompt-sync');
const entrada = prompt();

let anoAtual = 2024;
const nomeCompleto = "Adriel Schwartz Ranucci";
let idade = 17;
const cursoDeFaculdade = "Psicologia";
let cidadeAtual = "São José dos Pinhais";

console.log (`olá, eu sou o ${nomeCompleto}, eu tenho ${idade} anos morando em ${cidadeAtual}, querendo cursar ${cursoDeFaculdade}`);

anoAtual = 2025;

console.log (anoAtual);

idade = 18;
cidadeAtual = "Fazenda Rio Grande";

console.log (`olá novamente, como disse me chamo ${nomeCompleto}, agora tenho ${idade} anos de idade, passando a morar em ${cidadeAtual}, e ainda querendo cursar ${cursoDeFaculdade}`);

console.log("");

//agência de viagens

console.log("‼️                      ‼️");
console.log("    🔒   LOGIN   🔒      ");
console.log("‼️                      ‼️");

const loginCerto = "Adriel";
const senhaCerta = 12345;

var login = entrada("Digite o seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto) {
  console.log("Login não encontrado❗️");
  login = entrada("Digite novamente seu login: ");
}
while(senha != senhaCerta) {
  console.log("Senha incorreta ❌");
  senha = entrada("Digite a senha novamente: ");
}

console.log(" ");
console.log("🗿                            🗿");
console.log(`    🔓   bem vindo ${loginCerto}    🔓 `);
console.log("🗿                            🗿");

var nomeComprador = entrada("qual o seu nome? ");
var CPFComprador = entrada("qual o seu CPF? ");
var idadeComprador = entrada("qual é a sua idade? ");
const listaDestinos = new Array(
  " Singapura",
  " Tokio",
  " Nova York",
  " Paris",
  " Toronto"
);

console.log(`olá sr.${nomeComprador}, portador do CPF: ${CPFComprador} e idade de: ${idadeComprador} anos, possui a lista:${listaDestinos}.`);

console.log(listaDestinos[2]);

console.log("");
console.log(`olá sr.${nomeComprador}, você terá um novo destino que será incluido na lista a seguir: `);

listaDestinos.push(" Londres");
console.log(listaDestinos);

if(idadeComprador < 18) {
  console.log(`infelizmente não lhe podemos vender a passagem, pois o senhor(a) é menor de idade`);
}
if(idadeComprador > 18) {
  console.log(`você tem acesso a compra da passagem, sendo elas: ${listaDestinos}`);
}