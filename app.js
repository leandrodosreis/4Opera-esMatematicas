//Import da biblioteca de entrada de dados
const readline = require('readline')
const operacao = require('./modulo/operacoesMat')
const validacao = require('./modulo/validacoesNumeros')

//Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('********************\nDigite a operação desejada: \nadição \nsubtração \nmultiplicação \ndivisão\n********************\n', function(operador){
    let escolhaUsuario = operador.trim().toLowerCase()

    entradaDeDados.question('Digite um numero: ' , function(digito1){
        let numero1 = digito1.replace(/,/g,'.')

        entradaDeDados.question('Digite outro numero: ' , function(digito2){
            let numero2 = digito2.replace(/,/g,'.')

            let validacoes = validacao.validacaoLetras(escolhaUsuario, numero1, numero2)

            if(validacoes){
                let resultado = operacao.operacaoMate(escolhaUsuario, numero1, numero2)

                console.log('Seu resultado é: ', Number(resultado.toFixed(2)))
            }else{
                return false
            }
            

            
        })
        

    })

})