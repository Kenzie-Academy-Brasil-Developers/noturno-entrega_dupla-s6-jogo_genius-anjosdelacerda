//ELEMENTOS/LAYOUT CRIADO VIA DOM
const body          = document.querySelector('body')
const container     = document.querySelector('nav')
const fundo         = document.createElement('div')
const botao         = document.createElement('div')
const nomeBotao     = document.createElement('h5')
const nomeExc     = document.createElement('h5')
const nav           = document.createElement('nav')
const divAzul       = document.createElement('div')
const divVerde      = document.createElement('div')
const divAmarelo    = document.createElement('div')
const divVermelho   = document.createElement('div')
const botaoExc         = document.createElement('div')

container.id        = 'container'
fundo.id            = 'fundo'
botao.id            = 'botao'
nomeBotao.className = 'botaoGo'
nomeBotao.innerText = 'Go'
nomeExc.className   = 'botaoSbt'
nomeExc.innerText   = 'Submit'
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
botao.appendChild(nomeBotao)
botaoExc.appendChild(nomeExc)
fundo.appendChild(nav)
nav.appendChild(divAzul)
nav.appendChild(divVerde)
nav.appendChild(divAmarelo)
nav.appendChild(divVermelho)
fundo.appendChild(botaoExc)


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
    aside.innerHTML = `
    <h1 class="nameGame"> Genius Kenzie </h1>
    <h2 class="regraGame"> Como Jogar </h2>
    <div class="regraCont">
    <p>Clique no botão "Go" para iniciar o jogo! </p>
    <p> O Genius sorteatá uma cor aleatória a cada rodada, e o jogador
    deverá memorizar a sequência e submeter a sua jogada clicando no botão
    "submit"! </p>
    <p> O jogador vence quando acertar 7 sequências! </p>
    </div>
    `
    aside.classList.add('aside')
    body.appendChild(aside)
},1000)

//SEQUENCIA DE LUZ:

botao.addEventListener('click',começarJogo)
botaoExc.addEventListener('click', submeterJogada)


let azul     = document.querySelector('.divAzul')
let verde    = document.querySelector('.divVerde')
let amarelo  = document.querySelector('.divAmarelo')
let vermelho = document.querySelector('.divVermelho')



let arrayComputador = []
let arrayUsuario = []
let arrayComputadorIds = []

//*** 
//APERTA BOTÃO COMEÇAR JOGO => SORTEIO => COR DO ARRAY => ARRAYCOMP. 
//APERTA O QUADRADO => FUNCAO JOGOCOMEÇOU? 
// IF/ELSE ARRAYCOMPUTADOR < 1 => TEM QUE COMEÇAR JOGO ANTES
//ELSE PEGA O ID DO QUADRADO => ARRAYDOUSUARIO => funcao comparaarrays 
// IF/ELSE SE OS ARRAYS FOREM = =>SORTEAR()
//ELSE => VOCÊ PERDEU, COMECE NOV

 ///

// console.log(arrayComputador)

function sortear(){

    if(arrayComputador.length > 6){
        alert('Você venceu, parabéns!')
    arrayComputador.splice(0, arrayComputador.length)
    arrayUsuario.splice(0, arrayUsuario.length)
    arrayComputadorIds.splice(0, arrayUsuario.length)

    }else{

        let arr = [azul, verde, amarelo, vermelho]
        let cor1 = Math.floor(Math.random() * arr.length)
            
        setTimeout(() => {
            arr[cor1].classList.add('bordaWhite')
        }, 3030);
        setTimeout(()=>{
            arr[cor1].classList.remove('bordaWhite')
        }, 3260)
    
        
        arrayComputador.push(arr[cor1].id)
    }


}

function jogadaUsuario(evento){
    
    const cor = evento.target.id
    evento.target.classList.add('bordaWhite')
    arrayUsuario.push(cor)
   
    setTimeout(()=>{
        evento.target.classList.remove('bordaWhite')
            
    }, 1000)

}

function submeterJogada(evento){
    arrayComputadorIds.splice(0, arrayUsuario.length)

    if(arrayComputador < arrayUsuario){
        alert('Jogada invalida!Inicie o jogo antes de submeter sua jogada.')
        arrayUsuario.splice(0, arrayUsuario.length)
        arrayComputadorIds.splice(0, arrayUsuario.length)
        arrayComputador.splice(0, arrayUsuario.length)
    } else{

        for(let i = 0; i <= arrayComputador.length -1; i++){
          console.log(arrayComputadorIds.push(parseInt(arrayComputador[i])))
        }
        // console.log(arrayComputadorIds)
    
    }
    
    compararSequencias(arrayComputador,arrayUsuario )

}

function compararSequencias(arr1, arr2){
    console.log(arr1)
    console.log(arr2)
    if(arrayComputador < 0){
        alert('Jogada invalida!Inicie o jogo antes de submeter sua jogada.')
        arrayUsuario.splice(0, arrayUsuario.length)
        arrayComputadorIds.splice(0, arrayUsuario.length)
        arrayComputador.splice(0, arrayUsuario.length)

    }else{

    
        const resposta = arr1.length === arr2.length && arr1.every((value, index) => value == arr2[index])
        console.log(resposta)
        aumentarSequencia(resposta)
    }
 }



function aumentarSequencia(resposta){
    
    if(resposta === true){
        mostrarSequencia()
        sortear()
    
        arrayUsuario.splice(0, arrayUsuario.length)
    }else{
        alert('você errou! comece novamente')
        arrayComputador.splice(0, arrayComputador.length)
        arrayUsuario.splice(0, arrayUsuario.length)
        arrayComputadorIds.splice(0, arrayUsuario.length)
    }

}


let arrayQuadrado = []
// console.log(arrayQuadrado)

function transform(){
    const quadrado = document.querySelectorAll('.box')
    for(let i = 0; i < quadrado.length; i++){
        const item = quadrado[i]
        arrayQuadrado.push(item)
    }
}

transform()

function mostrarSequencia(){
    for(let i = 0; i <= arrayComputadorIds.length; i++){

                arrayComputadorIds.forEach(function(currentValue, index) {
                    switch(index) {
                        case 0:
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                 box.classList.add("bordaWhite")
                                //  box.classList.remove("bordaWhite")
                                
                            }, 230);

                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                //  box.classList.add("bordaWhite")
                                 box.classList.remove("bordaWhite")
                            }, 460);
                            break;
                        case 1:
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                 box.classList.add("bordaWhite")
                                //  box.classList.remove("bordaWhite")
                                
                            }, 690);

                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                //  box.classList.add("bordaWhite")
                                 box.classList.remove("bordaWhite")
                            }, 920);
                            break;
                            case 2:
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                 box.classList.add("bordaWhite")
                                //  box.classList.remove("bordaWhite")
                                
                            }, 1150);

                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                //  box.classList.add("bordaWhite")
                                 box.classList.remove("bordaWhite")
                            }, 1380);
                            break;
                            case 3:
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                 box.classList.add("bordaWhite")
                                //  box.classList.remove("bordaWhite")
                                
                            }, 1610);

                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                //  box.classList.add("bordaWhite")
                                 box.classList.remove("bordaWhite")
                            }, 1840);
                            break;
                            case 4:
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                 box.classList.add("bordaWhite")
                                //  box.classList.remove("bordaWhite")
                                
                            }, 2070);

                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                //  box.classList.add("bordaWhite")
                                 box.classList.remove("bordaWhite")
                            }, 2300);
                            break;
                            case 5:
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                box.classList.add("bordaWhite")
                                    //  box.classList.remove("bordaWhite")
                                    
                                }, 2530);
    
                            setTimeout(function() {
                                let box = arrayQuadrado.find((indexx) => indexx.id == arrayComputadorIds[index])
                                console.log(box.id)
                                 //  box.classList.add("bordaWhite")
                                box.classList.remove("bordaWhite")
                                }, 2800);
                            break; 
                          
                    }
                    
                });
                
    }
}

function começarJogo(evento){
    arrayComputador.splice(0, arrayComputador.length)
    arrayUsuario.splice(0, arrayUsuario.length)
    arrayComputadorIds.splice(0, arrayUsuario.length)
    console.log(evento)
    sortear()
}