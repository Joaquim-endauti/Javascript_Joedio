//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculadoraIdade = require('./calculadora_idade');
import {soma, subtrai, multiplica, divide} from './funcoes_matematicas.js';
import * as calculadoraIdade from './calculadora_idade.js';

console.log("Soma: " + soma(5, 3));
console.log("Subtração: " + subtrai(5, 3));
console.log("Multiplicação: " + multiplica(5, 3));
console.log("Divisão: " + divide(6, 2));

console.log(calculadoraIdade.idade('Daniel', 2008, 2050));