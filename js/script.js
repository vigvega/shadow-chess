function sombraTorre(){
        document.getElementById("rojeando1").style.backgroundColor = "red";
        document.getElementById("rojeando2").style.backgroundColor = "red";
        document.getElementsByClassName("cuadrado").style.backgroundColor = "blue";
    }
var colum_tablero = new Array(8);

function rellenarTablero(){
    let num = 0;
    for (let i = 0; i<8; i++){
        colum_tablero[i] = new Array(8);
    }

    for (let j = 0; j<8; j++){
        for (let k = 0; k<7; k++){
            colum_tablero[j][k] = num;
            num++;
        }
    }
}

/*
Para probar texto
const text = document.querySelector('h1');
text.textContent = "hola mundo";
*/