//container 1
document.getElementById('division').addEventListener('submit', function(event){event.preventDefault();

const divisor1 = parseFloat(document.getElementById('divisor1').value);
const divisor2 = parseFloat(document.getElementById('divisor2').value);
const resultado = divisor1 / divisor2;

document.getElementById('resultado1').textContent=`Cajas: ${resultado.toFixed(2)} `;
document.getElementById('resultado4').textContent=`Cajas: ${resultado.toFixed(2)} `;

});

//container 2
document.getElementById('multiplicador').addEventListener('submit',function(event){event.preventDefault();

const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const resultado1 = num1 * num2;

document.getElementById('resultado2').textContent=`Precio: ${resultado1.toFixed(2)}`;
document.getElementById('resultado5').textContent=`Precio: ${resultado1.toFixed(2)}`;
});

//container 3

document.getElementById('multiplicador2').addEventListener('submit',function(event){event.preventDefault()

const nu1 = parseFloat(document.getElementById('nu1').value);
const nu2 = parseFloat(document.getElementById('nu2').value);
const resultado3 = nu1 * nu2;

document.getElementById('resultado3').textContent=`Total: ${resultado3.toFixed(2)}`;

});


