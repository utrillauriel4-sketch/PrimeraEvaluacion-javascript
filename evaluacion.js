// PRIMERA EVALUACIÓN - FUNDAMENTOS DE PROGRAMACIÓN
// Todas las respuestas y ejercicios están en un solo archivo JavaScript.

// ==========================================================
// RETO 1 - EJERCICIO 1
// Un estudiante realiza 4 exámenes, calcular el promedio.
// ==========================================================

function ejercicio1() {
    let examen1 = Number(prompt("Ejercicio 1 - Nota del examen 1:"));
    let examen2 = Number(prompt("Ejercicio 1 - Nota del examen 2:"));
    let examen3 = Number(prompt("Ejercicio 1 - Nota del examen 3:"));
    let examen4 = Number(prompt("Ejercicio 1 - Nota del examen 4:"));

    let promedio = (examen1 + examen2 + examen3 + examen4) / 4;

    console.log("Ejercicio 1 - Promedio:", promedio);
}


// ==========================================================
// RETO 1 - EJERCICIO 2
// Calcular el área de un rectángulo.
// ==========================================================

function ejercicio2() {
    let base = Number(prompt("Ejercicio 2 - Ingrese la base del rectángulo:"));
    let altura = Number(prompt("Ejercicio 2 - Ingrese la altura del rectángulo:"));

    let area = base * altura;

    console.log("Ejercicio 2 - Área del rectángulo:", area);
}


// ==========================================================
// RETO 1 - EJERCICIO 3
// Calcular el área de un triángulo.
// ==========================================================

function ejercicio3() {
    let base = Number(prompt("Ejercicio 3 - Ingrese la base del triángulo:"));
    let altura = Number(prompt("Ejercicio 3 - Ingrese la altura del triángulo:"));

    let area = (base * altura) / 2;

    console.log("Ejercicio 3 - Área del triángulo:", area);
}


// ==========================================================
// RETO 1 - EJERCICIO 4
// Calcular el área de una circunferencia. (π = 3.14)
// ==========================================================

function ejercicio4() {
    let radio = Number(prompt("Ejercicio 4 - Ingrese el radio:"));
    const PI = 3.14;

    let area = PI * radio * radio;

    console.log("Ejercicio 4 - Área de la circunferencia:", area);
}


// ==========================================================
// RETO 1 - EJERCICIO 5
// Hallar el promedio de todos los elementos del arreglo.
// Entrada: [2, 6, 1, 8]
// Salida: Promedio: 4.25
// ==========================================================

function ejercicio5() {
    let arreglo = [2, 6, 1, 8];

    let suma = 0;

    for (let numero of arreglo) {
        suma += numero;
    }

    let promedio = suma / arreglo.length;

    console.log("Ejercicio 5 - Arreglo:", arreglo);
    console.log("Ejercicio 5 - Promedio:", promedio);
}


// ==========================================================
// RETO 1 - EJERCICIO 6
// De un arreglo de números, retornar la suma de todos los pares.
// Entrada: [1, 2, 5, 8, 9, 12, 2, 3]
// Salida: 24
// ==========================================================

function ejercicio6() {
    let arreglo = [1, 2, 5, 8, 9, 12, 2, 3];
    let sumaPares = 0;

    for (let numero of arreglo) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    console.log("Ejercicio 6 - Arreglo:", arreglo);
    console.log("Ejercicio 6 - Suma de pares:", sumaPares);
}


// ==========================================================
// RETO 1 - EJERCICIO 7
// Mostrar el nombre del libro y autor de los libros con Status true.
// ==========================================================

function ejercicio7() {
    const library = [
        {
            author: "Bill Gates",
            title: "The Road Ahead",
            Status: true
        },
        {
            author: "Steve Jobs",
            title: "Walter Isaacson",
            Status: true
        },
        {
            author: "Suzanne Collins",
            title: "Mockingjay: The Final Book of The Hunger Games",
            Status: false
        }
    ];

    console.log("Ejercicio 7 - Libros con Status true:");

    for (let libro of library) {
        if (libro.Status === true) {
            console.log("Título:", libro.title);
            console.log("Autor:", libro.author);
        }
    }
}


// ==========================================================
// RETO 1 - EJERCICIO 8
// Unir dos arreglos y retornar true si la longitud del nuevo
// arreglo es mayor o igual a 10; de lo contrario false.
// ==========================================================

function ejercicio8() {
    let arreglo1 = [2, 5, 2, 3, 7, 2];
    let arreglo2 = [1, 5, 3, 3];

    let arregloNuevo = arreglo1.concat(arreglo2);
    let resultado = arregloNuevo.length >= 10;

    console.log("Ejercicio 8 - Arreglo nuevo:", arregloNuevo);
    console.log("Ejercicio 8 - Resultado:", resultado);
}


// ==========================================================
// RETO 1 - EJERCICIO 9
// Unir dos arreglos de enteros y multiplicar cada elemento por 2.
// [2,5,2] + [1,5,3] -> [4,10,4,2,10,6]
// ==========================================================

function ejercicio9() {
    let arreglo1 = [2, 5, 2];
    let arreglo2 = [1, 5, 3];

    let arregloNuevo = arreglo1.concat(arreglo2).map(numero => numero * 2);

    console.log("Ejercicio 9 - Arreglo nuevo:", arregloNuevo);
}


// ==========================================================
// RETO 1 - EJERCICIO 10
// Solicitar una calificación entre 1 y 10 y mostrar:
// menor de 6 = reprobado
// 6 a 8 = regular
// 9 = bien
// 10 = excelente
// ==========================================================

function ejercicio10() {
    let calificacion = Number(prompt("Ejercicio 10 - Ingrese una calificación entre 1 y 10:"));

    if (calificacion < 1 || calificacion > 10 || Number.isNaN(calificacion)) {
        console.log("Ejercicio 10 - Error: la calificación debe estar entre 1 y 10.");
    } else if (calificacion < 6) {
        console.log("Ejercicio 10 - Reprobado");
    } else if (calificacion <= 8) {
        console.log("Ejercicio 10 - Regular");
    } else if (calificacion === 9) {
        console.log("Ejercicio 10 - Bien");
    } else {
        console.log("Ejercicio 10 - Excelente");
    }
}


// ==========================================================
// RETO 1 - EJERCICIO 11
// Solicitar 2 números entre 1 y 50.
// Mostrar los números del 1 al 50 y colocar "¡Lotería!"
// solo en los números indicados.
// ==========================================================

function ejercicio11() {
    let numero1 = Number(prompt("Ejercicio 11 - Primer número (1-50):"));
    let numero2 = Number(prompt("Ejercicio 11 - Segundo número (1-50):"));

    if (
        numero1 < 1 || numero1 > 50 ||
        numero2 < 1 || numero2 > 50 ||
        Number.isNaN(numero1) || Number.isNaN(numero2)
    ) {
        console.log("Ejercicio 11 - Error: los dos números deben estar entre 1 y 50.");
        return;
    }

    console.log("Ejercicio 11 - Resultado:");

    for (let i = 1; i <= 50; i++) {
        if (i === numero1 || i === numero2) {
            console.log("¡Lotería!");
        } else {
            console.log(i);
        }
    }
}


// ==========================================================
// RETO 1 - EJERCICIO 12
// Iterar del 1 al 100:
// múltiplos de 3 = Fizz
// múltiplos de 5 = Buzz
// múltiplos de 3 y 5 = FizzBuzz
// ==========================================================

function ejercicio12() {
    console.log("Ejercicio 12 - FizzBuzz:");

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


// ==========================================================
// RETO 1 - EJERCICIO 13
// Bono por antigüedad:
// 1 año = $100
// 2 años = $200
// ...
// 5 años = $500
// Más de 5 años = $1000
// ==========================================================

function ejercicio13() {
    let antiguedad = Number(prompt("Ejercicio 13 - Ingrese los años de antigüedad:"));
    let bono;

    if (antiguedad <= 0 || Number.isNaN(antiguedad)) {
        console.log("Ejercicio 13 - Error: la antigüedad debe ser mayor a 0.");
        return;
    }

    if (antiguedad > 5) {
        bono = 1000;
    } else {
        bono = antiguedad * 100;
    }

    console.log("Ejercicio 13 - Bono recibido: $" + bono);
}


// ==========================================================
// RETO 1 - EJERCICIO 14
// Salario inicial $1500, incremento del 10% anual durante 6 años.
// Mostrar el salario de cada uno de los 6 años y el salario final.
// ==========================================================

function ejercicio14() {
    let salario = 1500;

    console.log("Ejercicio 14 - Salario inicial:", salario);

    for (let anio = 1; anio <= 6; anio++) {
        salario = salario * 1.10;
        console.log("Año " + anio + " - Salario: $" + salario.toFixed(2));
    }

    console.log("Ejercicio 14 - Salario al cabo de 6 años: $" + salario.toFixed(2));
}


// ==========================================================
// RETO 1 - EJERCICIO 15
// Encontrar la palabra más larga.
// ==========================================================

function ejercicio15() {
    let palabras = ["manzana", "banana", "cereza", "uva", "fresa"];
    let palabraMasLarga = palabras[0];

    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    console.log("Ejercicio 15 - Palabra más larga:", palabraMasLarga);
}


// ==========================================================
// RETO 1 - EJERCICIO 16
// Contar cuántas cartas únicas existen.
// ==========================================================

function ejercicio16() {
    let cartas = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 10];

    let cartasUnicas = [...new Set(cartas)];

    console.log("Ejercicio 16 - Cartas únicas:", cartasUnicas);
    console.log("Ejercicio 16 - Cantidad de cartas únicas:", cartasUnicas.length);
}


// ==========================================================
// RETO 1 - EJERCICIO 17
// Precio de helado según topping:
// Sin topping = 50 MXN
// Oreo = 10 MXN extra
// KitKat = 15 MXN extra
// Brownie = 20 MXN extra
// ==========================================================

function ejercicio17() {
    let topping = prompt(
        "Ejercicio 17 - Elija un topping: oreo, kitkat, brownie o ninguno"
    ).toLowerCase();

    const precioBase = 50;
    let precioFinal;

    switch (topping) {
        case "oreo":
            precioFinal = precioBase + 10;
            console.log("Ejercicio 17 - Precio del helado: " + precioFinal + " MXN");
            break;

        case "kitkat":
            precioFinal = precioBase + 15;
            console.log("Ejercicio 17 - Precio del helado: " + precioFinal + " MXN");
            break;

        case "brownie":
            precioFinal = precioBase + 20;
            console.log("Ejercicio 17 - Precio del helado: " + precioFinal + " MXN");
            break;

        case "ninguno":
            precioFinal = precioBase;
            console.log("Ejercicio 17 - Precio del helado: " + precioFinal + " MXN");
            break;

        default:
            console.log("Ejercicio 17 - No tenemos este topping, lo sentimos.");
            console.log("Ejercicio 17 - Precio del helado sin topping: " + precioBase + " MXN");
    }
}


// ==========================================================
// RETO 1 - EJERCICIO 18
// Programas educativos:
// Course = $4999 MXN / 2 meses
// Carrera = $3999 MXN / 6 meses
// Master = $2999 MXN / 12 meses
//
// Becas:
// Facebook = 20%
// Google = 15%
// Jesua = 50%
// ==========================================================

function ejercicio18() {
    let programa = prompt(
        "Ejercicio 18 - Elija el programa: Course, Carrera o Master"
    ).toLowerCase();

    let beca = prompt(
        "Ejercicio 18 - Beca: Facebook, Google, Jesua o ninguna"
    ).toLowerCase();

    let precioMensual;
    let meses;

    switch (programa) {
        case "course":
            precioMensual = 4999;
            meses = 2;
            break;

        case "carrera":
            precioMensual = 3999;
            meses = 6;
            break;

        case "master":
            precioMensual = 2999;
            meses = 12;
            break;

        default:
            console.log("Ejercicio 18 - Programa no válido.");
            return;
    }

    let descuento;

    switch (beca) {
        case "facebook":
            descuento = 0.20;
            break;

        case "google":
            descuento = 0.15;
            break;

        case "jesua":
            descuento = 0.50;
            break;

        case "ninguna":
            descuento = 0;
            break;

        default:
            console.log("Ejercicio 18 - Beca no válida. Se aplicará 0% de descuento.");
            descuento = 0;
    }

    let precioConDescuento = precioMensual * (1 - descuento);
    let costoTotal = precioConDescuento * meses;

    console.log("Ejercicio 18 - Programa:", programa);
    console.log("Ejercicio 18 - Precio mensual sin descuento: $" + precioMensual.toFixed(2));
    console.log("Ejercicio 18 - Descuento aplicado: " + (descuento * 100) + "%");
    console.log("Ejercicio 18 - Precio mensual con descuento: $" + precioConDescuento.toFixed(2));
    console.log("Ejercicio 18 - Duración: " + meses + " meses");
    console.log("Ejercicio 18 - Total del curso: $" + costoTotal.toFixed(2));
}


// ==========================================================
// RETO 1 - EJERCICIO 19
// Solicitar números al usuario.
// Guardarlos si son números.
// Terminar cuando el usuario ingrese 0.
// ==========================================================

function ejercicio19() {
    let numeros = [];

    while (true) {
        let entrada = prompt("Ejercicio 19 - Ingrese un número (0 para terminar):");

        if (entrada === null) {
            break;
        }

        let numero = Number(entrada);

        if (Number.isNaN(numero)) {
            console.log("Ejercicio 19 - El valor ingresado no es un número.");
            continue;
        }

        if (numero === 0) {
            break;
        }

        numeros.push(numero);
    }

    console.log("Ejercicio 19 - Números capturados:", numeros);
}


// ==========================================================
// RETO 1 - EJERCICIO 20
// Calcular total a pagar según vehículo, kilómetros y litros.
//
// Coche   = 0.20 por km
// Moto    = 0.10 por km
// Autobús = 0.50 por km
//
// Si litros entre 0 y 100 -> extra 5
// Si litros > 100         -> extra 10
//
// Total = (precio por km * km recorridos) + extra
// ==========================================================

function ejercicio20() {
    let vehiculo = prompt(
        "Ejercicio 20 - Tipo de vehículo: coche, moto o autobús"
    ).toLowerCase();

    let kilometros = Number(prompt("Ejercicio 20 - Kilómetros recorridos:"));
    let litros = Number(prompt("Ejercicio 20 - Litros consumidos:"));

    let precioKilometro;

    switch (vehiculo) {
        case "coche":
            precioKilometro = 0.20;
            break;

        case "moto":
            precioKilometro = 0.10;
            break;

        case "autobús":
        case "autobus":
            precioKilometro = 0.50;
            break;

        default:
            console.log("Ejercicio 20 - Tipo de vehículo no válido.");
            return;
    }

    if (kilometros < 0 || litros < 0 || Number.isNaN(kilometros) || Number.isNaN(litros)) {
        console.log("Ejercicio 20 - Error: kilómetros y litros deben ser valores válidos.");
        return;
    }

    let extra = litros <= 100 ? 5 : 10;
    let total = (precioKilometro * kilometros) + extra;

    console.log("Ejercicio 20 - Precio por kilómetro: $" + precioKilometro.toFixed(2));
    console.log("Ejercicio 20 - Extra por litros: $" + extra.toFixed(2));
    console.log("Ejercicio 20 - Total a pagar: $" + total.toFixed(2));
}


// ==========================================================
// FIN DE LA EVALUACIÓN
// ==========================================================
//
// Las funciones están separadas por ejercicio para que cada
// respuesta pueda revisarse individualmente.
// ==========================================================


// Para ejecutar todos los ejercicios de manera consecutiva,
// quite los comentarios de las siguientes líneas:
//
// ejercicio1();
// ejercicio2();
// ejercicio3();
// ejercicio4();
// ejercicio5();
// ejercicio6();
// ejercicio7();
// ejercicio8();
// ejercicio9();
// ejercicio10();
// ejercicio11();
// ejercicio12();
// ejercicio13();
// ejercicio14();
// ejercicio15();
// ejercicio16();
// ejercicio17();
// ejercicio18();
// ejercicio19();
// ejercicio20();
