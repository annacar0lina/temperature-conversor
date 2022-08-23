//SELECIONAR ELEMENTOS
//selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmReal')

//selecionar os elementos radios(criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('btnLimpar')

//cotacões do dia 14/08/2022
let valorDoDolar = 5.08
let valorDoEuro = 5.21
let valorDaLibra = 6.16
let valorDoBitcoin = 124574.25
let valorEmReal =  0

let moedaEstrangeira = ''
let moedaConvertida = ''

// mensagem formatada para exibir valores monetarios
 function mensagemFormatada(moedaConvertida) {
     isNaN(valorEmReal) ? valorEmReal = 0 : ''
     console.log("Moeda Convertida " + moedaConvertida)
     aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', {style: 'currency',
    currency: 'BRL'}) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
 }

 //verificar se foi digitado algum valor para poder converter
 function bloquearBotao() {
     if(valorDigitado.value == 0 || valorDigitado == "" || valorDigitado == null) {
         btnConverter.setAttribute('disabled', 'disabled')
         btnConverter.style.background = '#ccc'
         btnConverter.style.cursor = 'not-allowed'
     }
 }

 //reativzar botar
 function ativarBotao() {
     if(valorDigitado.value > 0){
         btnConverter.removeAttribute('disabled')
         btnConverter.style.background = '#ffc107'
         btnConverter.style.cursor = 'pointer'
     }else {
         console.log('não ativou')
     }


    }

//verificar qual botao radio esta marcado cheked ou cheked == true
// vincular a verificacao a um evento, click no botao converter
btnConverter.addEventListener('click', function(){
    //fazer o parseFloat dos valores monetarios (converter string para float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++){
        if(moedaSelecionada[i].checked){
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }
})