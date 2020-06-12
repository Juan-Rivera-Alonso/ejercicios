
//first
/* 
for (let hash = "#" ;
hash.length <=7 ; hash+="#") {
    console.log(hash);
    }
 */ 



//second
/* 

 for ( let juan =1; juan <=100; juan++) {
     let carlos= "";
     if (juan % 3 == 0) carlos +="fizz";
     if (juan % 5 ==0) carlos +="buzz";
     console.log( carlos || juan);
 }
*/



//third
/*
 let size= 20;
 let dot = "";
 
for (let columnas=0; columnas < size; columnas++){
    for(let filas= 0; filas < size; filas++){
        if (( filas  + columnas) % 2==0){
            dot +=" ";
        } else{
            dot +="#";
        }
    }
    dot += "\n";
}
console.log(dot);
*/


/* tablas de verdad or
 console.log (false||true); //true
 console.log (false||false); //falso
 console.log (true||true); //true
 console.log(true||false); //true 
*/

/* tabla de verdad and
 console.log( true&&true );  //true 
 console.log(false&&false); //false
 console.log(true&&false);  //false
 console.log(false&&true); //false
*/
/* tabla de verdad not
console.log(false || !true); // falso
console.log(true&& !true);  //falso
*/


/* compararciones con los iguales 
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
*/

/* 
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);
*/


/*recursiva

let factorial= function(n) {
    if (n == 0) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  }

  console.log(factorial(3));
*/


 
