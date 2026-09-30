let nota, resultado
nota = 10
function verificar()
{
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if (nota <5){
    resultado.innerHTML = "nao aprovado"
    }else if (nota <=0){
    resultado.innerHTML = "recuperacao"
    }else {(nota >6) ;
    resultado.innerHTML = "aprovado"
    }

}

let num1, num2, resultado2
function verificar2()
{
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    resultado2 = document.getElementById("resultado2")

    if (num1 > num2){
        resultado2.innerHTML = num1-num2
    }else if(num2 > num1){
        resultado2.innerHTML = num2-num1
    }
}

let n1, n2, n3, n4, resultado3
function verificar3()
{
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    n3 = Number(document.getElementById("n3").value)
    n4 = Number(document.getElementById("n4").value)
    resultado3 = document.getElementById("resultado3")

    if (n1 > n2 && n1 > n3 && n1 > n4) {
        resultado3.textContent = "O primeiro número é o maior.";
    } else if (n2 > n1 && n2 > n3 && n2 > n4) {
        resultado3.textContent = "O segundo número é o maior.";
    } else if (n3 > n1 && n3 > n2 && n3 > n4) {
        resultado3.textContent = "O terceiro número é o maior.";
    } else {
        resultado3.textContent = "O quarto número é o maior.";
    }

}
