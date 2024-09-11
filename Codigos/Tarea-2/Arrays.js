/*1. Crea una función que reciba como parámetro un array de números 
y retorne la suma de todos los números del array.*/ 
function sum_allArray(array){
        let suma = 0;
        for (let i = 0; i < array.length; i++) {
            suma += array[i];
        }
        return suma;
}

// Otro método (ocupando el metodo reduce de los arrays) más compacto.
function sum_allArrayV2(array){
    return array.reduce((a, b) => a + b, 0);
}

/*2. Crea una función (o varias) que reciba como parámetro un array de números 
y retorne el promedio de todos los números del array.*/
function prom_allArray(array){
    return sum_allArray(array) / array.length;
}

/*3. Crea una función que tome un arreglo de strings como parámetro y devuelva un 
nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.*/
function arrayMAYUS(array) {
    let arrayMAYUS = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(arrayMAYUS[i].toUpperCase());
    }
    return arrayMAYUS;
}

// Otro método (ocupando el metodo map de los arrays) más compacto.
function arrayMAYUSV2(array) {
    return array.map((string) => string.toUpperCase());
}

/* 4. Crea una función que tome un arreglo de números como parámetro y devuelva 
un nuevo arreglo que contenga solo los números pares. */
function arrayPares(array) {
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        array[i] % 2 == 0 && arrayPares.push(array[i]);
    }
    return arrayPares;
}

// Otro método (ocupando el metodo filter de los arrays) más compacto.
function arrayParesV2(array) {
    return array.filter((num) => num % 2 == 0);
}