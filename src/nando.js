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