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
const botaoExc         = document.createElement('div')

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
botaoExc.id          = 'botaoExc'


divAmarelo.classList.add('box')
divAzul.classList.add('box')
divVerde.classList.add('box')
divVermelho.classList.add('box')
divAmarelo.addEventListener('click', jogadaUsuario)
divAzul.addEventListener('click', jogadaUsuario)
divVerde.addEventListener('click', jogadaUsuario)
divVermelho.addEventListener('click', jogadaUsuario)

container.appendChild(fundo)
fundo.appendChild(botao)
fundo.appendChild(nav)
nav.appendChild(divAzul)
nav.appendChild(divVerde)
nav.appendChild(divAmarelo)
nav.appendChild(divVermelho)
nav.appendChild(botaoExc)

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
botaoExc.addEventListener('click', submeterJogada)


let azul     = document.querySelector('.divAzul')
let verde    = document.querySelector('.divVerde')
let amarelo  = document.querySelector('.divAmarelo')
let vermelho = document.querySelector('.divVermelho')

// const box = document.querySelectorAll('.box')
// console.log(box)
// box.addEventListener('click', jogadaUsuario)

const arrayComputador = []
const arrayUsuario = []

//*** 
//APERTA BOTÃO COMEÇAR JOGO => SORTEIO => COR DO ARRAY => ARRAYCOMP. 
//APERTA O QUADRADO => FUNCAO JOGOCOMEÇOU? 
// IF/ELSE ARRAYCOMPUTADOR < 1 => TEM QUE COMEÇAR JOGO ANTES
//ELSE PEGA O ID DO QUADRADO => ARRAYDOUSUARIO => funcao comparaarrays 
// IF/ELSE SE OS ARRAYS FOREM = =>SORTEAR()
//ELSE => VOCÊ PERDEU, COMECE NOV

 ///

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
    // console.log(evento)
    // console.log(evento.target)
    console.log(evento.target.id)
    const cor = evento.target.id
    arrayUsuario.push(cor)
    console.log(arrayUsuario)

}

function submeterJogada(evento){
    evento.target
    
    const arrayNumerizado = []

    for(let i = 0; i < arrayUsuario.length; i++){
        arrayNumerizado.push(parseInt(arrayUsuario[i]))
    }
    console.log(arrayNumerizado)

    compararSequencias(arrayUsuario, arrayComputador)

}

function compararSequencias(arr1, arr2){
    console.log(arr1)
    console.log(arr2)
    if(arrayComputador < 1){
        alert('JOgada invalida!Inicie o jogo antes de fazer a sua jogada.')
        arrayUsuario.splice(0, arrayUsuario.length)

    }else{
        const resposta = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
        console.log(resposta)
        aumentarSequencia(resposta)
    }
}


function aumentarSequencia(resposta){
    if(resposta === true){
        sortear()
        arrayUsuario.splice(0, arrayUsuario.length)
    }else{
        alert('você errou! comece novamente')
        arrayComputador.splice(0, arrayComputador.length)
        arrayUsuario.splice(0, arrayUsuario.length)
    }

}


function começarJogo(evento){
    arrayComputador.splice(0, arrayComputador.length)
    arrayUsuario.splice(0, arrayUsuario.length)
    console.log(evento)
    sortear()

}