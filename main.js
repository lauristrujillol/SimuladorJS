

//SIMULADOR CDT

//La simulación del CDT se hace con base a 360 días

//Pido una contraseña al usuario hasta que la ingrese correctamente:

alert ("Hola, bienvenido... Ingresa tu contraseña para que puedas realizar la simulación.")

const passwordAutorizado = 1234;

for(let i = 0; i<= 2; i++) {
    let passwordUsuario = parseInt(prompt("Ingresa tu contraseña"));
    if(passwordUsuario === passwordAutorizado) {
        console.log("Contraseña correcta, puedes ingresar");
        break;
    } else {
        alert("La contraseña es incorrecta, vuelve a intentarlo")
    }
}


alert ("Con el plazo y el monto que quieres invertir podrás simular el comportamiento aproximado de la inversión. A continuación ingresa los siguienes datos:")

let valorInvertir = parseInt(prompt("Ingrese el monto a invertir: "));
console.log (valorInvertir);
console.log (typeof valorInvertir);

let dias = parseInt(prompt("Ingrese la cantidad de días del plazo fijo, recuerda que este simulador funciona máximo a 12 meses, ingresando los días, por ejemplo 30,60,90...360"));
console.log (dias);
console.log (typeof dias);

//Aquí calculo la rentabilidad que se va a tener dependiendo de los meses

const tasaInteresDiaria = 0.000416; //0.0416%;
let rentabilidad = (valorInvertir * tasaInteresDiaria * dias)
let montoFinal = valorInvertir + rentabilidad;


if(dias < 30){
alert ("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360")
} else if(dias == 30) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >= 31 && dias <=59) {
alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360")
} else if(dias == 60) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >= 61 && dias <=89) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360")
} else if (dias == 90) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >= 91 && dias <=119) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360")    
} else if (dias == 120) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >= 121 && dias <=149) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360")     
} else if (dias == 150) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=151 && dias <=179) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 180) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=181 && dias <=209) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 210) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=211 && dias <=239) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 240) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=241 && dias <=269) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 270) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=271 && dias <=299) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 300) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=301 && dias <=329) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 330) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else if (dias >=331 && dias <=359) {
    alert("Hola, recuerda que los plazo deben de ser por meses, por ejemplo 30,60,90... hasta máximo 360") 
} else if (dias == 360) {
    alert ("La rentabilidad para tu CDT con un plazo de " + dias + " días y un valor a invertir de " + valorInvertir + " es de "  +  montoFinal.toFixed(0));
} else {
    alert ("Si deseas simular un CDT mayor a 360 días, contactate con un asesor para que te cuente sobre las tasas preferenciales y los beneficios.")
}



