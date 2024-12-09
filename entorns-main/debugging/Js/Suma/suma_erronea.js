function calcularSuma() {
    const num1 = Number(document.getElementById('num1').value); //declarar que es un numero, agregando la funcion "Number(...)"
    const num2 = Number(document.getElementById('num2').value); //declarar que es un numero, agregando la funcion "Number(...)"
    const suma = num1 + num2; 
    document.getElementById('resultado').innerText = `La suma es: ${suma}`;
}
