/*
Crie um array com 5 items (tipos variados).
*/
var array = [1, 'helen', true, 2, 3]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    array.push(item);
    return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var array1 = ['a', 'b', 'c'];
console.log(addItem(array1));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + array[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array.length + 'itens')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array[5].length + 'itens')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
var num = 10;
while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10;
console.log('Números ímpares entre 10 e 20:');
while (num <= 20) {
    if (num % 2 != 0) {

        console.log(num);
    }
    num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
num = 100;
while (num <= 120) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}

console.log('Números ímpares entre 111 e 125:');
num = 111;
while (num <= 125) {
    if (num % 2 != 0) {
        console.log(num);
    }
    num++;
}