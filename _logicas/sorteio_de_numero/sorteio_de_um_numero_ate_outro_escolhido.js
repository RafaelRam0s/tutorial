




function sorteioAlcance(min, max) {
    var numero_max = max - min + 1

    var numero_max_digitos = ('' + Math.abs(numero_max)).length

    var numero_sorteado = parseInt(Math.random() * (10 ** numero_max_digitos)) + 1

    var numero_maximo_sorteado = ''
    for (var x = 0; numero_max_digitos - x != 0; x++) {
        numero_maximo_sorteado += 9
    }
    numero_maximo_sorteado = Number(numero_maximo_sorteado) + 1

    numero_sorteado = (numero_max * numero_sorteado) / numero_maximo_sorteado

    if (numero_sorteado % 1 > 0) {
        numero_sorteado = parseInt(numero_sorteado) + 1
    } else if (numero_sorteado % 1 < 0) {
        numero_sorteado = parseInt(numero_sorteado) - 1
    }

    numero_sorteado = numero_sorteado + min - 1

    document.getElementById('sorteio').innerHTML += '<br>' + numero_sorteado
}


function sortearNumerosEntre(min, max) {
	let numMin = 0, numMax = 0;
    if (min < max) {
    	numMin = min;
        numMax = max;
    } else {
    	numMin = max;
        numMax = min;
	}
    
	let raio = Math.abs(numMax - numMin + 1);
    let numSorteado = numMin + Math.floor(Math.random() * raio);
    
    return numSorteado;
}





// <!DOCTYPE html>
// <html>
// <body>

// <button onclick="sortearNumerosEntre(1, 100)">Tente</button>

// <script>
// function sortearNumerosEntre(min, max) {
// 	let numMin = 0, numMax = 0;
//     if (min < max) {
//     	numMin = min;
//         numMax = max;
//     } else {
//     	numMin = max;
//         numMax = min;
// 	}
    
// 	let raio = Math.abs(numMax - numMin + 1);
//     let sorteado = numMin + Math.floor(Math.random() * raio);
    
//     window.alert(sorteado);
// }
// </script>

// </body>
// </html>



