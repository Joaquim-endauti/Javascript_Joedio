const funcoesMatematicas = require('./funcoes_matematicas');
const calculadora_idade = require('./calculadora_idade');

const resultadoSoma = funcoesMatematicas.soma(5, 3);
console.log(`Resultado da Soma: ${resultadoSoma}`);

const resultadoSubtracao = funcoesMatematicas.subtrai(5, 3);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplica(5, 3);
console.log(`Resultado da Multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.divide(5, 3);
console.log(`Resultado da Divisão: ${resultadoDivisao}`);

console.log(calculadora_idade.idade("João", 2000, 2050));

