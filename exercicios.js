// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados;
        * name: string
        *age: Number (interger)
        *atars: Number (float)
        *isSubcribed: Boolean
*/

let name = "ozeias"
let age =38
let atars =4.8 
let isSubscribed = true

/* 
    4. A Variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atanção, substitua <name> <age> e <weight> pelos valeres de cada propriedade do abjeto
*/

let student ={
    name: "Ozeais",
    age: 38,
    weight: 4.8,
    isSubscribed: true,
};

console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`)

/*
    5.Declare uma veriável do tipo Array, de nome stundents e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let stundents = []

/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da quetão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/
students = [
    student
]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima

*/

console.log(students[0])

/*
    8.Crie um novo student e coloque na posição 1 do Array students

*/

const jhon = {
    name: "jhon",
    age: 23, 
    weight: 57.3,
    isSubscribed: true,
}

/*
    9. SEm rodar o código responda qua é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a= 1

*/