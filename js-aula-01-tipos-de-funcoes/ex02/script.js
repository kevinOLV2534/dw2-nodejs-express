// EXERCÍCIOS FUNÇÃO

// FUNÇÃO SIMPLES
function showUser() {
  return "Kevin 20 Registro";
}

console.log(showUser());

// FUNÇÃO COM PARÂMETRO
function div(n1,n2) {
  return n1 / n2;
};
let n1 = 1;
let n2 = 1;

console.log(div(n1,n2));


// FUNÇÃO COM RETORNO
function mult(a, b, c){
    return a*b*c;
};
let a = 2;
let b = 2;
let c = 2;

console.log(mult(a,b,c));

// FUNÇÃO COM MAIS DE UM RETORNO
function maiorMenor(idade){
    if(idade>= 18){
        return "Você é maior de idade!";
    }else{
        return "Você é menor de idade";
    }
}
let idade = 19;

console.log(maiorMenor(idade))

// FUNÇÃO ANÔNIMA
const ano = function (x,z){
    media = (x + z)/2;
    if(media <= 5){
        return "Reprovado";
    }else{
        return "Aprovado";
    }
}

let x = 9;
let z = 9;

console.log(ano(x,z));

// FUNÇÃO COM ARROW PARÂMETRO ÚNICO
const triplo = (s) =>{
    return s*s*s;
}
let s = 2;

console.log(`O triplo desse valor é: ${triplo(s)}`);

// FUNÇÃO ARROW COM MAIS PARÂMETROS
const quatro = (num1,num2,num3,num4) =>{
    return num1+num2+num3+num4;
}
let num1 = 5;
let num2 = 5;
let num3 = 5;
let num4 = 5;

console.log(`A soma desses valores é: ${quatro(num1,num2,num3,num4)}`);