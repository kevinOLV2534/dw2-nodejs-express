// comentário de linha

/* comentário 
de 
bloco */

// Variáveis podem ser declaradas de 3 formas:
// Var,Let e Const

// VAR: No geral evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando NÃO precisar reatribuir o valor da variável.

// VAR sobrescreve outra informação:
var cidade = "registro";
var cidade = "Sete Barras";
document.write(cidade);

let nome = "Maria";
nome = "Maria";
document.write(nome);

// CONST não pode sobrepor outra informação
const pais = "Brasil";
pais = "Argentina";
// O valor de uma constante não pode ser alterado
document.write(pais);
