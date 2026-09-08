let nota, resultado
nota = 10
function verificar()
{
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if (nota <5){
    resultado.innerHTML = "nao aprovado"
    }else if (nota <=5){
    resultado.innerHTML = "reprovado/recuperacao"
    // }else {
    // resultado.innerHTML = "aprovado"
    }

}