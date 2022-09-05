// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
    var total;
    total = a + b;
    return total;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var x;
x = soma(5, 5) + 5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var y;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retorno(y) {
    y = 10;
    return 'O valor da variável agora é: " + y;'

}

// Invoque a função criada acima.
retorno();

// Qual o retorno da função? (Use comentários de bloco).
//O valor da variavl agora é 10;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function teste(a, b, c) {
    if (a == undefined || b == undefined || c == undefined) {
        return 'Preencha os dados corretamente!'
    }
    return (a * b * c + 2);

}

// Invoque a função criada acima, passando só dois números como argumento.
teste(2, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha os dados corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
teste(2, 3, 4)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function newfuncao(a, b, c) {
    if ((a == undefined & b == undefined & c != undefined) || (a == undefined & b != undefined & c == undefined) || (a != undefined & b == undefined & c == undefined)) {
        if (a != undefined) {
            return a;
        } else if (b != undefined) {
            return b;
        } else {
            return c;
        }
    } else if ((a == undefined & b != undefined & c != undefined) || (a != undefined & b != undefined & c == undefined) || (a != undefined & b == undefined & c != undefined)) {
        if (a != undefined & b != undefined) {
            return a + b;
        } else if (a != undefined & c != undefined) {
            return a + c;
        } else {
            return b + c;
        }
    } else if (a != undefined & b != undefined & c != undefined) {
        return ((a + b) / c);
    } else if (a == undefined & b == undefined & c == undefined) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
newfuncao();
newfuncao(1);
newfuncao(1, 2);
newfuncao(1, 2, 3);