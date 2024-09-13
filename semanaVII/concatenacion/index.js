// concatenar basicamente es unir informacion , se usa el signo (+)
const cadena1 = " Hola ";
const cadena2 = " Mundo ";

console.log(cadena1 + cadena2);

const ejemplo1 = "Hola ";
const ejemplo2 = "mundo ";
const ejemplo3 = ejemplo1 + ejemplo2;

//console.log(ejemplo3);

const nombre = "Felipe";
const mensaje = " Cuentanos, ";
const saludo ="Como estas?";

const imprimr = nombre + mensaje + saludo;
const imprimrSaltolinea = nombre + "\n" + mensaje +"\n" + saludo;

//console.log(imprimr);
//console.log(imprimrSaltolinea);

const nombre2 = "Felipe";
const mensaje2 = " Cuentanos, ";
const saludo2 ="Como estas?";
const imprimir2 = ` ${nombre2} 
${mensaje2}
 ${saludo2}`;

console.log(imprimir2);

