
var valorFinal = document.getElementById("numeroAtual");
var valorIncial = 0;

function subtrair() {
    valorIncial = valorIncial - 1;
    valorFinal.innerHTML = valorIncial;
}

function somar() {
    console.log('1- ', valorFinal);
    valorIncial = valorIncial + 1;

    valorFinal.innerHTML = valorIncial;
}