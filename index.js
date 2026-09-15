const Barril = require('./models/Barril')

let resposta = document.getElementById('resposta')

let principal = document.getElementById('principal')

principal.addEventListener('click', ()=>{
    let diamMaior = Number(document.getElementById('diamMaior').value)
    let diamMenor = Number(document.getElementById('diamMenor').value)
    let altura = Number(document.getElementById('altura').value)

    let barril = new Barril(diamMaior, diamMenor, altura)

    console.log(barril)

    let Ab = barril.calcularAb()
    let AB = barril.calcularAB()
    let Al = barril.calcularAl()
    let At = barril.calcularAt()
    let v = barril.calcularVolume()
    let classificacao = barril.classificarBarril()

    console.log(`A área da base da tampa do Barril é: ${Ab.toFixed(2)}`)
    console.log(`A área de ambas as base do Barril é: ${AB.toFixed(2)}`)
    console.log(`A área lateral do Barril é: ${Al.toFixed(2)}`)
    console.log(`A área total do Barril é: ${At.toFixed(2)}`)
    console.log(`O volume do Barril é: ${v.toFixed(2)}`)

    resposta.innerHTML = ``
    resposta.innerHTML += `A área da base da tampa do Barril é: ${Ab.toFixed(2)} cm² <br>`
    resposta.innerHTML += `A área de ambas as base do Barril é: ${AB.toFixed(2)} cm² <br>`
    resposta.innerHTML += `A área lateral do Barril é: ${Al.toFixed(2)} cm² <br>`
    resposta.innerHTML += `A área total do Barril é: ${At.toFixed(2)} cm² <br>`
    resposta.innerHTML += `O volume do Barril é: ${v.toFixed(2)} cm³ <br>`
    resposta.innerHTML += `${classificacao} <br>`

})