const chalk = require('chalk');
const fs = require('fs');

function extrairLinks(texto) {    
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegarArquivo(caminhoDoArquivo) {
    const uncoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, uncoding);
        return extrairLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

module.exports = pegarArquivo;
// pegarArquivo('./arquivos/texto1.md')

// function pegarArquivo(caminhoDoArquivo) {
//     const uncoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, uncoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch((erro) => trataErro(erro));
// }

// function pegarArquivo(caminhoDoCaminho) {
//     const uncoding = 'utf-8'
//     fs.readFile(caminhoDoCaminho, uncoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);

//         }
//         console.log(chalk.green(texto));
//     })
// }


// import chalk from 'chalk';
// "type": "module"

// console.log(chalk.red('Hello Word!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// const paragrafo = 'Texto retornado por uma função';

// function texto(string){
//     return string;
// }

// console.log(texto(paragrafo));