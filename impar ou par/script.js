function imparOuPar() {
    var n = document.getElementById('n').value;

    if (n == '') {
        alert("Por favor, digite um número válido.");
        return;
    } else if (n % 2 == 0) {
        document.getElementById('resultado').innerText = n + " é um número par.";
    } else {
        document.getElementById('resultado').innerText = n + " é um número ímpar.";
    }
}

