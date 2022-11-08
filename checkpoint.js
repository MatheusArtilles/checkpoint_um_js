let readlineSync = require('readline-sync');

console.log("---Bem vindo(a) ao microondas Super-Fast--- \n Opções: ");
console.log("1-Pipoca\n2-Macarrão\n3-Carne\n4-Feijão\n5-Brigadeiro");
let lista_escolhas = [1, 2, 3, 4, 5];

let opcao = parseInt(readlineSync.question("Sua escolha: "));
let tempo = parseInt(readlineSync.question("Qual o tempo? "));

function VerificacaoFinal(opcao, tempo){
    if(lista_escolhas.includes(opcao)){
        VerificaValor(opcao, tempo);
        console.log("Prato está pronto");
    }else{
        console.log("Opção inválida!");
    }
};
function CriaObj(numero, padrao){
    let objeto = {
        numero : numero,
        padrao : padrao
    };
    return objeto;
};
function VerificaValor(numero, duracao){
    if(numero == pipoca.numero) {
        VerificaMaior(duracao, pipoca.padrao);
    } else if(numero == macarrao.numero) {
        VerificaMaior(duracao, macarrao.padrao);
    } else if(numero == carne.numero){
        VerificaMaior(duracao, carne.padrao);
    } else if(numero == feijao.numero){
        VerificaMaior(duracao, feijao.padrao);
    } else if(numero == brigadeiro.numero){
        VerificaMaior(duracao, brigadeiro.padrao);
    }
};
function VerificaMaior(duracao, padrao){
    if(duracao >= padrao * 2){
        console.log("Puxa! A comida queimou!");
    }if(duracao >= padrao * 3){
        console.log("KABUMM!");
    }
};
let pipoca = CriaObj(1, 10);
let macarrao = CriaObj(2, 8);
let carne = CriaObj(3, 15);
let feijao = CriaObj(4, 12);
let brigadeiro = CriaObj(5, 8);
VerificacaoFinal(opcao, tempo);