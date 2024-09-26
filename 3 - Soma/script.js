function calcularSoma() {
    const numero = parseInt(document.getElementById('numero').value);
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
      soma += i;
    }
    document.getElementById('resultado').textContent = `A soma dos números de 1 até ${numero} é: ${soma}`;
  }