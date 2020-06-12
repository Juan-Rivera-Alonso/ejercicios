/* ejercicios del capitulo 3, funcion en la que se ingresan 2 numeros y regresa el menor de ellos.

function minimo(a,b) {
    return Math.min(a,b);
}
document.write(minimo( 5,6));
*/


/* segundo ... se ingresa un numero y devuelve un valor boolean, true para numeros pares , false numeros impares.


function isEven(num) {
    if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);
  }
console.log(isEven(-2));
*/


/*   esta funcion anliza los numeros de caracteres que tiene un string y en la consola devuevle un valor de numero que es el conteo de "B" mayusculas en el string.

function countChar(cadena, caracteres){
    let contador= 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracteres) {
            contador += 1;
        }
    }
    return contador;
}

function countBs(cadena) {
    return countChar (cadena , "B");
}

console.log(countBs("BEBECITA"));

*/
