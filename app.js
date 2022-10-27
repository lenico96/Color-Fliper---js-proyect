const generate = document.getElementById('generate')
const reset = document.getElementById('reset')
const showColor = document.querySelector('.color-hex')

let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

document.addEventListener('click', e => {
    if (e.target === generate) {   //si el evento "e" es igual a la variable del boton generate ejecuta lo siguiente.
        let color = "#";
        for (let i = 0; i<6; i++){   //buble de 6 veces, ya que necesito cambiar 6 caracteres del codigo hex,
            
            color += hex[randomNumber()]
        }
        showColor.innerHTML = color;
        document.body.style.background = color;
    }
    if (e.target === reset){ //si e target es igual a la variable reset ejecuta lo siguiente
        showColor.innerHTML = "#303134";
        document.body.style.background = "#303134"
    }
})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}//el mat.floor redondear un valor que les des dentro en este caso otro math.random porque quiero que
//me genere un numero aleatorio, para que me genere con la longitud de mi array le multiplico mi array * length (longitud)
