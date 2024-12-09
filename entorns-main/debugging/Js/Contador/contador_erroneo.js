let contador = 0;
//la variable se inizializa a fuera ya que de esta forma se permanece en memoria y no se reinicia.
function incrementar() {
    contador++;
    document.getElementById("contador").innerText = contador;
}
