function contarAs() {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');
  
    // Converter todo o texto para minúsculas para facilitar a contagem
    const textoMinusculo = texto.toLowerCase();
  
    // Contar as ocorrências da letra 'a' usando um regular expression
    const regex = /a/g;
    const matches = textoMinusculo.match(regex);
  
    // Exibir o resultado
    resultado.textContent = `A letra 'a' aparece ${matches ? matches.length : 0} vezes.`;
  }