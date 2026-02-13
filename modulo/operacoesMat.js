function operacaoMate(operador, digito1 , digito2){

    let operacao = operador
    let numero1 = Number(digito1)
    let numero2 = Number(digito2)
    let resultado

    if(operacao == 'adicao'){
    resultado = numero1 + numero2

    return resultado
    }else if(operacao == 'subtracao'){
    resultado = numero1 - numero2

    return resultado
        
    }else if(operacao == 'multiplicacao'){
    resultado = numero1 * numero2
    
    return resultado
            
    }else if(operacao == 'divisao'){
        if(numero1 == 0 || numero2 == 0){
            console.log('Resultado impossivel amigo: não dividmos por 0 aqui')
        }else{
    resultado = numero1 / numero2}
    
    return resultado
            
    }else{
        return false
    }
}


module.exports = {
    operacaoMate 
}