const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector("#currency-select")
const convertSelect = document.querySelector("#Convert-select")

const euroToday = 5.24
const dolarToday = 4.89
const libraToday = 6.00
const bitcoinToday = 173.494
const realToday = 0.29


function choice(){
    if(convertSelect.value == "real"){
        convertReal()
    }

    if(convertSelect.value == "dolar"){
        convertDolar()
    }
    if(convertSelect.value == "euro"){
        convertEuro()
    }
    if(convertSelect.value == "libra"){
        convertEuro()
    }
    if(convertSelect.value == "bitcoin"){
        convertEuro()
    }
}

function convertReal() {
    const ValueMoney = document.querySelector("#ValueMoney").value//valor que vai ser convertido

    const currencyValueD = document.querySelector(".currency-valueD")//valor em real

    const currencyValueP = document.querySelector(".currency-valueP")//outras moedas


    if (currencySelect.value == "dolar") {//se o select selecionado o valor dolar, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(ValueMoney/dolarToday )//colocar o valor convertido na tela
    }
    if (currencySelect.value == "euro") {//se o select selecionado o valor euro, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(ValueMoney / euroToday)//colocar o valor convertido na tela
    }
    if (currencySelect.value == "libra") {//se o select selecionado o valor libra, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(ValueMoney / libraToday)//colocar o valor convertido na tela
    }

    if (currencySelect.value == "bitcoin") {//se o select selecionado o valor bitcoin, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(ValueMoney / bitcoinToday)//colocar o valor convertido na tela
    }

    if (currencySelect.value == "real") {//se o select selecionado o valor real, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(ValueMoney)//colocar o valor convertido na tela
    }




    currencyValueD.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(ValueMoney)//colocar o valor convertido na tela


}


function convertDolar(){
    const ValueMoney = document.querySelector("#ValueMoney").value//valor que vai ser convertido

    const currencyValueD = document.querySelector(".currency-valueD")//valor em dolar

    const currencyValueP = document.querySelector(".currency-valueP")//outras moedas

    if (currencySelect.value == "dolar") {//se o select selecionado o valor dolar, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(ValueMoney)//colocar o valor convertido na tela
    }
    if (currencySelect.value == "euro") {//se o select selecionado o valor euro, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((ValueMoney * realToday)/euroToday)//colocar o valor convertido na tela
    }
    if (currencySelect.value == "libra") {//se o select selecionado o valor libra, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((ValueMoney * realToday)/libraToday)//colocar o valor convertido na tela
    }

    if (currencySelect.value == "bitcoin") {//se o select selecionado o valor bitcoin, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format((ValueMoney * realToday)/bitcoinToday)//colocar o valor convertido na tela
    }

    if (currencySelect.value == "real") {//se o select selecionado o valor real, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(ValueMoney*realToday)//colocar o valor convertido na tela
    }




    currencyValueD.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(ValueMoney)//colocar o valor convertido na tela
}



function changeCurrency() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".countries")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "assets/real.png"
    }

    choiceCurrency()

}


function convertCurrency(){
    const currencyName = document.querySelector(".convert-name")
    const currencyImg = document.querySelector(".countriesD")

    if (convertSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "assets/dolar.png"
    }

    if (convertSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/Euro.png"
    }

    if (convertSelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/libra.png"
    }

    if (convertSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "assets/bitcoin.png"
    }

    if (convertSelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "assets/real.png"
    }

    choiceCurrency()

}

function choiceCurrency (){
    if(convertSelect.value == "dolar"){
        convertDolar()
    }
    if(convertSelect.value == "real"){
        convertValues()
    }
   
    }








convertSelect.addEventListener("change", convertCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", choice)



