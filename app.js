//Import da biblioteca de entrada de dados
const readline = require('readline')
const operacao = require('./modulo/operacoesMat')

//Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite a operação desejada: \nadição \nsubtração \nmultiplicação \ndivisão\n', function(operador){
    let escolhaUsuario = operador

    entradaDeDados.question('Digite um numero:' , function(digito1){
        let numero1 = digito1

        entradaDeDados.question('Digite outro numero:' , function(digito2){
            let numero2 = digito2

            let resultado = operacao.operacaoMate(escolhaUsuario,numero1,numero2)

            if(resultado){
                console.log('Seu resultado é: ', resultado)
            }else{
                return false
            }
            

            
        })
        

    })

})