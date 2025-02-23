/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(paran) {
    if (paran) {
        return true;
    }
    return false;
};



// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy('elen');
isTruthy([]);
isTruthy({});
isTruthy(function() {});

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'gol',
    modelo: 'fiat',
    placa: 'ABC-123',
    ano: 2013,
    cor: 'cinza',
    quantPortas: 4,
    assentos: 5,
    quantPessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(cor) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(cor) {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return 'Este carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.ocupacao = function(pessoas) {
    var total;
    total = carro.quantPessoas + pessoas;
    if (carro.quantPessoas === carro.assentos) {
        return 'O carro já está lotado';
    } else if (total > 5) {
        var quant;
        quant = 5 - carro.quantPessoas;
        if (quant === 1) {
            return ('Só cabe mais' + quant + 'pessoa!');
        } else
            return ('Só cabe mais' + quant + 'pessoas!');


    } else if (total <= 5) {
        carro.quantPessoas = total;
        return ('já temos' + carro.quantPessoas + 'pessoas no carro');

    }
}

/*Agora vamos verificar algumas informações do carro.Para as respostas abaixo, utilize sempre o formato de invocação do método(ou chamada da propriedade),      adicionando comentários _inline_ ao lado com o valor retornado, se o método
    retornar algum valor.
*/
//Qual a cor atual do carro ?
carro.cor;

// Mude a cor do carro para vermelho.
carro.mudarCor(vermelho);

// E agora, qual a cor do carro?
//vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor(verde)

// E agora, qual a cor do carro?
carro.cor

// Qual a marca e modelo do carro?

carro.obterMarcaModelo();

// Adicione 2 pessoas no carro.
carro.ocupacao(2);

// Adicione mais 4 pessoas no carro.
carro.ocupacao(4);

// Faça o carro encher.
carro.ocupacao(carro.assentos);

// Tire 4 pessoas do carro.
carro.quantPessoas = carro.quantPessoas - 4;

// Adicione 10 pessoas no carro.
carro.ocupacao(10);

// Quantas pessoas temos no carro?
carro.quantPessoas;
// Adicione 2 pessoas no carro.
carro.ocupacao(2);

// Adicione mais 4 pessoas no carro.
carro.ocupacao(4);