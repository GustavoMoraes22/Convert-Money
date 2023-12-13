
const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector("#currency-select")





//converter do real para outra moeda
const convertValues = async () => {
    const ValueMoney = document.querySelector("#ValueMoney").value//valor que vai ser convertido

    const currencyValueD = document.querySelector(".currency-valueD")//valor em real

    const currencyValueP = document.querySelector(".currency-valueP")//outras moedas


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const euroToday = data.EURBRL.high
    const dolarToday = data.USDBRL.high


    if (currencySelect.value == "dolar") {//se o select selecionado o valor dolar, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(ValueMoney / dolarToday)//colocar o valor convertido na tela
    }
    if (currencySelect.value == "euro") {//se o select selecionado o valor euro, vai entrar aqui
        currencyValueP.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(ValueMoney / euroToday)//colocar o valor convertido na tela
    }

    currencyValueD.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(ValueMoney)//colocar o valor convertido na tela


}

//ira trocar a img das moedas que serao convertidas
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

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)