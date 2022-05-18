


// Sorteia um número de 1 até qualquer outro positivo passado como parâmetro
// Sorteia um número de -1 até qualquer outro negativo passado como parâmetro
function sorteio(numero_max) {
    // Verifica quantos digitos tem o numero de faces do dado
    var numero_max_digitos = ('' + Math.abs(numero_max)).length

    // sorteia um número de 1 até algum outro 
    var numero_sorteado = parseInt(Math.random() * (10 ** numero_max_digitos)) + 1

    // Fala qual é o número máximo que pode ser sorteado
    var numero_maximo_sorteado = ''
    for (var x = 0; numero_max_digitos - x != 0; x++) {
        numero_maximo_sorteado += 9
    }
    numero_maximo_sorteado = Number(numero_maximo_sorteado) + 1

    // Faz o cálculo para colocar o número sorteado dentro das possibilidades do dado
    numero_sorteado = (numero_max * numero_sorteado) / numero_maximo_sorteado
    
    // Se o número for quebrado é arredondado para cima
    if (numero_sorteado % 1 > 0) {
        numero_sorteado = parseInt(numero_sorteado) + 1
    } else if (numero_sorteado % 1 < 0) {
        numero_sorteado = parseInt(numero_sorteado) - 1
    }
}

