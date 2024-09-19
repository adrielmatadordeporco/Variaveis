let anoAtual = 2024;
const nomeCompleto = "Adriel Schwartz Ranucci";
let idade = 17;
const cursoDeFaculdade = "Psicologia";
let cidadeAtual = "São José dos Pinhais";

console.log (`olá, eu sou o ${nomeCompleto}, eu tenho ${idade} anos morando em ${cidadeAtual}, querendo cursar ${cursoDeFaculdade}`);

anoAtual = 2025;

console.log (anoAtual);

idade = 18;
cidadeAtual = "Fazenda";

console.log (`olá novamente, como disse me chamo ${nomeCompleto}, 
agora tenho ${idade} anos de idade, passando a morar em ${cidadeAtual}, e ainda querendo cursar ${cursoDeFaculdade}`);

//agência de viagens

const nomeComprador = "Adalto";
const CPFComprador = 10120341123;
const idadeComprador = 23;
const listaDestinos = new Array(
  "Singapura",
  " Tokio",
  " Nova York",
  " Paris",
  " Toronto"
);

console.log(`olá sr. ${nomeComprador}, portador do CPF: ${CPFComprador} e idade de: ${idadeComprador} anos, possui a lista : ${listaDestinos}.`);

console.log(listaDestinos[2]);

console.log("");
console.log(`olá sr. ${nomeComprador}, você terá um novo destino que será incluido na lista a seguir: `);

listaDestinos.push("Londres");
console.log(listaDestinos);
