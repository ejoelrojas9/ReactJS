// function fn1(a, b) {
//     return a + b
// }

// const resultado = fn1(1, 2)

// console.log(resultado)

function fn2(a, b) {
    return a + b
}

const resultad = fn2(1, 2)

console.log("Primer Resultado " + resultad)


//Con fat arrow functions

const fn1 = (a, b) => a + b

const resultado = fn1(1, 2)

console.log("Segundo Resultado " + resultado)


//Si se quiere escribir la sentencia fat arrow functions con mas de una linea

const fn3 = (a, b) => {
    return a + b
}

const resulta = fn3(1, 2)
console.log("Tercer Resultado" + resulta)