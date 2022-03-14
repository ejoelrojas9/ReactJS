// const arr = [1, 2]

// const suma = (a, b) => a + b

// const resultado = suma(...arr)

// console.log(resultado)

// arr.push(3)

// console.log(arr)

//Para hacer la copia de arr y no afectar la declaración 

const arr = [1, 2]

const suma = (a, b) => a + b

const resultado = suma(...arr)

const arr2 = [...arr]

arr.push(3)

console.log(arr2, arr)