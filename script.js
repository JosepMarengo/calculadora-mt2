//container 1
function calcularDivision() {
    const metrosCuadrados = parseFloat(document.getElementById('metrosCuadrados').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    if (divisor !== 0) {
        const resultado = metrosCuadrados / divisor;
        document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'El divisor no puede ser cero.';
    }

    //container 2
    document.getElementById('multiplicadorForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);
        const resultadoo = numero1 * numero2;
        
        document.getElementById('resultadoo').textContent = `Resultadoo: ${resultadoo.toFixed(2)}`;
    });

    //container 3
    document.getElementById('multiplicadorForm2').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numero1 = parseFloat(document.getElementById('numero-1').value);
        const numero2 = parseFloat(document.getElementById('numero-2').value);
        const resultadoo = numero1 * numero2;
        
        document.getElementById('resultadooo').textContent = `Resultadooo: ${resultadoo.toFixed(2)}`;
    });
 }

