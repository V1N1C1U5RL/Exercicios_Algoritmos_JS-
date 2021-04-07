//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/

var valorJantar = Number(prompt("Valor do Jantar: "));
var taxaGarcom = valorJantar * 0.10;
var vTotal = valorJantar + taxaGarcom;

alert(`Total a Pagar: ${vTotal.toFixed(2)}`)

/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duração total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/

var dias = Number(prompt("Qtd de Dias: "));
var horas = Number(prompt("Qtd de Horas: "));
var tHora = (dias * 24) + horas;

alert(`Tempo Total: ${tHora} hrs`);

/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/

var num = Number(prompt("Insira um Numero: "));

alert(`Numero Anterior: ${num - 1} \n Numero Posterior: ${num + 1}`);


/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
   
var conta = Number(prompt("Valor da Conta: "));
var cliente = Number(prompt("Num de Clientes: "));
var vCliente = conta/cliente;

alert(`Valor por cliente: $ ${vCliente.toFixed(2)}`);


/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
   
var produto = Number(prompt("Preço do Produto: "));
var vista = produto - (produto * 0.10);
var tresX = produto/3;

alert(`Preço a Vista: R$ ${vista.toFixed(2)} ou 3x de R$ ${tresX.toFixed(2)}`);

/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/

var n1 = Number(prompt("Nota 1: "));
var n2 = Number(prompt("Nota 2: "));
var n3 = Number(prompt("Nota 3: "));
var media = (n1 + n2 + n3)/3;

alert(`Media Final: ${media.toFixed(1)}`);