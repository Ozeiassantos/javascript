/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 

    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// transformDegre('50F')

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de error
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não indentificado')
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        let degreeSign = 'C';


    }

    return formula(updatedDegree) + degreeSign

}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50z')
} catch (error) {
    console.log(error)
}