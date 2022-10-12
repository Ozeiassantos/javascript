/* ### Transforma notas escolares

Crie um algoritmo que tranforme as notas de sistema numerico para sistema de notas em caractere tipo A B C

* De 90 para cima - A
* Entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* Menor que 60    - F

*/

function getScore (score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <=  89
    let scoreC = score >= 70 && score <=  79
    let scoreD = score >= 60 && score <=  69
    let scoreE = score <  60 && score >=   0

    let scoreFinal ;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreE) {
        scoreFinal = "E"
    } else {
        scoreFinal = "Nota inválida"
    }
    
    return scoreFinal
}

console.log(getScore (101))
console.log(getScore ( -1))
console.log(getScore (  0))
console.log(getScore (  1))
console.log(getScore ( 45))
console.log(getScore ( 60))
console.log(getScore ( 61))
console.log(getScore ( 75))
console.log(getScore ( 85))
console.log(getScore ( 95))
