
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    // Calcular el IMC
    const imc = (peso / (estatura * estatura)).toFixed(2);

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Nombre: ${nombre} ${apellido}</p>
        <p>Edad: ${edad} años</p>
        <p>Peso: ${peso} kg</p>
        <p>Estatura: ${estatura} m</p>
        <p><strong>Índice de Masa Corporal (IMC): ${imc}</strong></p>
    `;
});
