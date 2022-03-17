const obj = {
    a: 1,
    b: 2,
}

const obj1 = {
    data: {
        ...obj,
    }
}

obj1[`c`] = 3

console.log(obj, obj1)