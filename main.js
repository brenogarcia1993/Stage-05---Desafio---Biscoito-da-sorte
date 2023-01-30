// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnLuckyDiscover = document.querySelector(".cookiebutton")
const btnOpenAnotherCookie = document.querySelector(".cookieopenbutton")
let luckyWordsArray = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não há que ser forte. Há que ser flexível.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "O riso é a menor distância entre duas pessoas.",
    "Os defeitos são mais fortes quando o amor é fraco.",
    "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
    "A paciência na adversidade é sinal de um coração sensível.",
    "Quem olha para fora sonha; quem olha para dentro acorda.",
    "Todas as coisas são difíceis antes de se tornarem fáceis.",
    "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
    "O conhecimento é a única virtude e a ignorância é o único vício.",
    "O nosso primeiro e último amor é… o amor-próprio.",
    "A maior barreira para o sucesso é o medo do fracasso.",
    "Você sempre será a sua melhor companhia!",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "A perseverança é a mãe da boa sorte.",
    "Não é o amor que faz o mundo girar, mas é o amor que faz o giro valer a pena.",
    "O amor é confortável como o sol depois da tempestade.",
    "Os anos ensinam muitas coisas que os dias desconhecem.", 
    "Seus princípios valem mais para você do que dinheiro ou sucesso",
    "Efeitos duradouros derivam de ações constantes e graduais",
    "Nada é um obstáculo para quem sabe trilhar um caminho de sucesso.",
    "Deixe para trás o que não te leva para frente.",
    "A alegria de fazer o bem é a única felicidade verdadeira.",
]
// Eventos

btnLuckyDiscover.addEventListener("click", generatePhrase)
btnOpenAnotherCookie.addEventListener("click", tryNewLuckyCookie)

// Funções

function tryNewLuckyCookie() {
    toggleScreen()    
}

function randomPhrases() {
    let randomCookieIndex = Math.floor(Math.random() * luckyWordsArray.length)
    let randomCookiePhrase = luckyWordsArray[randomCookieIndex]
    let randomPhrase = document.getElementById("luckymsg").innerHTML = randomCookiePhrase
    return randomPhrase
}

function generatePhrase() {
    toggleScreen()
    randomPhrases()
        
}

function toggleScreen() {
    screen2.classList.toggle("hide");
    screen1.classList.toggle("hide");
}