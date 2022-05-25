//COMENTÁRIOS:
// comentario de linha
//var y = 0;
var x = 1;
/* comentario seguido 
var a = 2; */
var b = 3;

//DECLARANDO VARIÁVEIS E CONSTANTES: 
//var preco = 2;
var desconto = 0.2;
//constantes são declaradas em caixa alta
const PRECO = 2;
var total = PRECO - desconto;
//preco = preco - desconto; -- não pode ser realizada com a 
//constante, somente com as variáveis


//DECLARANDO FUNÇÕES:
//declara, dá um nome, abre () para declarar parâmetros, 
//e abre {} para dizer o que ela faz
function soma(a, b){
    return a + b; //8
}
//chamando função: 
soma(3, 5);