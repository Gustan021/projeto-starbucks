let num1 = parseFloat(prompt("Digite o primeiro número do cálculo"))
let sinal = prompt("Digite o sinal. Ex +(soma), -()subtração...")
let num2 = parseFloat(prompt("Digite o segundo número do cálculo"))

function calculadora(num1, sinal, num2) {

    if (sinal == "+") {
        alert("O resultado é =" + (num1 + num2))
    } else if (sinal == "-") {
        alert("O resultado é =" + (num1 - num2))
    } else if (sinal == "*") {
        alert("O resultado é =" + (num1 * num2))
    } else if (sinal == "/") {
        alert("O resultado é =" + (num1 / num2))
    }
}

calculadora(num1, sinal, num2)

let continuar = prompt("Deseja realizar outro cálculo ? (sim/não)").toLowerCase()

while (continuar) {
    if (continuar === "sim") {
        let num1 = parseFloat(prompt("Digite o primeiro número do cálculo"))
        let sinal = prompt("Digite o sinal. Ex +(soma), -()subtração...")
        let num2 = parseFloat(prompt("Digite o segundo número do cálculo"))

        calculadora(num1, sinal, num2)

        continuar = prompt("Deseja realizar outro cálculo ? (sim/não)").toLowerCase()
    } else {
        alert("obrigado por usar nossa calculadora atualize seu navegador quando quiser usar novamente")
        break
    }
}

