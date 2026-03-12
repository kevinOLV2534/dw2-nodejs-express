// CLASSES NO JAVASCRIPT

// NOME DE CLASSES DEVEM INICIAR COM A PRIMEIRA LETRA MAIÚSCULA
class Carro{
    // DEFINIDO OS ATRIBUTOS
    constructor(marca,modelo,ano){
        // this é uma referência às instâncias que serão criadas através dessa classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        // DEFININDO MÉTODOS
    }
        buzinar(){
            return "Beep! Beep!";
        }
}

// INSTÂNCIANDO OBJETOS
const carroPopular = new Carro("Fiat", "Uno", "2012");


carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2020";


document.write(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo}
é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);