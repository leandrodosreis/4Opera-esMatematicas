function validacaoLetras(operador,digito1,digito2){
    let operacao = operador
    let numero1 = Number(digito1)
    let numero2 = Number(digito2)

    if(operacao == "" || numero1 == "" || numero2 == "" || isNaN(numero1) || isNaN(numero2) || !isNaN(operacao)){
        console.log("Erro")
        
    }

    return true
}


module.exports = {
    validacaoLetras
}