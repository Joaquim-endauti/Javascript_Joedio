const funcoesMatematicas = require('./funcoes_matematicas');

const resultadoSoma = funcoesMatematicas.soma(5, 3);
console.log(`Resultado da Soma: ${resultadoSoma}`);

const resultadoSubtracao = funcoesMatematicas.subtrai(5, 3);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplica(5, 3);
console.log(`Resultado da Multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.divide(5, 3);
console.log(`Resultado da Divisão: ${resultadoDivisao}`);
