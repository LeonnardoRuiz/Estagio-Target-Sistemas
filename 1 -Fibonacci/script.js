function verificar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
  
    function pertenceFibonacci(num) {
      let a = 0, b = 1;
      while (a <= num) {
        if (a === num) return true;
        [a, b] = [b, a + b];
      }
      return false;
    }
  
    resultado.textContent = pertenceFibonacci(numero) ? 
      `O número ${numero} pertence à sequência de Fibonacci.` :
      `O número ${numero} não pertence à sequência de Fibonacci.`;
  }