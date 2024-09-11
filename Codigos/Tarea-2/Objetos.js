/* 1. Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como
nombre, edad y género. Luego, muestra la información de esa persona por la consola.*/
const persona = {
    nombre: "Juan",
    edad: 25,
    genero: "Masculino"
};
console.log(persona);

/* 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías 
y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir 
cada propiedad del objeto y el tipo de dato que es.*/
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 20,
    fotografias: 15,
    estado: "Buen estado"
}; 
console.log(caja);
console.log(`Cuadernos: ${caja.cuadernos}, tipo de dato: ${typeof caja.cuadernos}`);
console.log(`Lápices: ${caja.lapices}, tipo de dato: ${typeof caja.lapices}`);
console.log(`Papel: ${caja.papel}, tipo de dato: ${typeof caja.papel}`);
console.log(`Fotografías: ${caja.fotografias}, tipo de dato: ${typeof caja.fotografias}`);
console.log(`Estado: ${caja.estado}, tipo de dato: ${typeof caja.estado}`);