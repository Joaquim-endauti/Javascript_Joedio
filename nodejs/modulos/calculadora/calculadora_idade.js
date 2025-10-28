export function idade(nome, anoNasc, anoAtual){
    const idadeAtual = anoAtual - anoNasc;
    return `Olá ${nome}, em 2025 você terá ${idade} anos. Em 2050 você terá ${idadeAtual} anos.`;
}
