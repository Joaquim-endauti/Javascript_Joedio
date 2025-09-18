//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculadora_idade = require('./calculadora_idade');
import {soma,subtrai,multiplica,divide} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';


const resultadoSoma = soma(5, 3);
console.log(`Resultado da Soma: ${resultadoSoma}`);

const resultadoSubtracao = subtrai(5, 3);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = multiplica(5, 3);
console.log(`Resultado da Multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = divide(5, 3);
console.log(`Resultado da Divisão: ${resultadoDivisao}`);

console.log(calculadora_idade.idade("João", 2000, 2050));

