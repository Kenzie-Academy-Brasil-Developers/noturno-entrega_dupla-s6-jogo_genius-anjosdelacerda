//ELEMENTOS/LAYOUT CRIADO VIA DOM
const body          = document.querySelector('body')
const container     = document.querySelector('nav')
const fundo         = document.createElement('div')
const botao         = document.createElement('div')
const nav           = document.createElement('nav')
const divAzul       = document.createElement('div')
const divVerde      = document.createElement('div')
const divAmarelo    = document.createElement('div')
const divVermelho   = document.createElement('div')

container.id        = 'container'
fundo.id            = 'fundo'
botao.id            = 'botao'
nav.id              = 'nav'
divAzul.className   = 'divAzul'
divAzul.id          = 0
divVerde.className    = 'divVerde'
divVerde.id          = 1
divAmarelo.className = 'divAmarelo'
divAmarelo.id        = 2
divVermelho.className = 'divVermelho'
divVermelho.id       = 3



container.appendChild(fundo)
fundo.appendChild(botao)
fundo.appendChild(nav)
nav.appendChild(divAzul)
nav.appendChild(divVerde)
nav.appendChild(divAmarelo)
nav.appendChild(divVermelho)

//PASSO--A--PASSO
//1-QUANDO CLICAR NO BOTÃO INCICAR O JOGO COMEÇA
//2-O A PRIMEIRA COR BRILHA
/**
 3. O USUARIO:
 3.1- APERTA NA COR CERTA: A SEQUENCIA CONTINUA
 3.2-NÃO APERTA DA COR CERTA: MENSAGEM DE ERRO E BOTÃO TENTE NOAMENTE
 */

//MODAIS COM AS INSTRUÇÕES:
/**
modal 1: boas-vindas ao jogador;
         apresentando o objetivo do jogo;
         botao jogar
         
modal 2: orientação sobre os botoes
 */

setTimeout(()=>{
    const aside     = document.createElement('aside')
    aside.className = 'aside'
    body.appendChild(aside)
},1000)

//SEQUENCIA DE LUZ:

botao.addEventListener('click',começarJogo)


let azul     = document.querySelector('.divAzul')
let verde    = document.querySelector('.divVerde')
let amarelo  = document.querySelector('.divAmarelo')
let vermelho = document.querySelector('.divVermelho')

const arrayComputador = []
const arrayUsuario = []



console.log(arrayComputador)

function sortear(){
    let arr = [azul, verde, amarelo, vermelho]
    let cor1 = Math.floor(Math.random() * arr.length)
    console.log(cor1)
    arr[cor1].classList.add('bordaWhite')
    setTimeout(()=>{
        arr[cor1].classList.remove('bordaWhite')
            
    }, 1000)

    // arr[cor1].addEventListener('click', começarJogo)
    arrayComputador.push(arr[cor1].id)

}

function jogadaUsuario(evento){


}


function começarJogo(evento){
    console.log(evento)
    sortear()

}