function Calculo() {
    var qntdC = Number(input_qntdC.value)
    var valorC = Number(input_valorC.value)
    var valorT = qntdC * valorC
    var tempo = Number(input_tempo.value)
    var temperatura = (input_temperatura.value)

    var morteCaprinos = qntdC * 0.18  // morte de 27 caprinos. ele ja esta tirando 27 + 27 e fazendo pelo tempo de vendas
    morteCaprinos = morteCaprinos * tempo
    morteCaprinos = qntdC - morteCaprinos
    var valor_sem_monitoramento = morteCaprinos * valorC


    if (temperatura < 23) {
        div_mensagem.innerHTML += `A temperatura ideal no capril é de 23.9 á 29.4. Porém a tempertatura atual é de ${temperatura}° graus celsius, e está a baixo da média. Fique de olho! <br> Com isso a quantidade de caprinos para venda, SEM monitoramento é de: ${morteCaprinos} e seu retorno financeiro SEM nosso monitoramento seria apenas de: R$${valor_sem_monitoramento}<br><br>Mas, com o nosso monitoramento e os CUIDADOS necessarios, voce passará a ganhar até: R$${valorT}`

    } else if (temperatura >= 32.2) {
        div_mensagem.innerHTML += `a temperatura ideal é de 23.9 á 29.4. Porém tempertatura está acima do ideal ${temperatura}°, seus animais correm perigo! <br> A quantidade de caprinos SEM monitoramento para venda é de: ${morteCaprinos} e o valor total SEM nosso monitoramento é de : R$${valor_sem_monitoramento}>Mas, com o nosso monitoramento e os CUIDADOS necessarios, voce passará a ganhar até: R$${valorT}`
    } else if (temperatura >= 23.9 && temperatura <= 29.4) {
        alert('a temperatura está confortavél! meus bixinhos não correm risco. Continue com os cuidados adequados.')
    }


}
