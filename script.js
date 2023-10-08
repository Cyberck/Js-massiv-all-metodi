
// Massiv - eto struktura dannih, hranyashaya nabor znacheniy, massiv oboznachaetsya kvadratnimi skobkami []

// Perberayushiye metodi massiva

let array = ['Zafar', 'Doniyor', 'Shuhtat', 'Asd'];

// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }


// Metod forEach() = vipolyaet ukazannuyu funksiyu odin raz dlya kajdogo elementa v massive.

/* array.forEach((item, i) => console.log(i)) */

/* forEch sovremenniy sposob, Nazvaniye orgumentov mojno napisat vse chto hotite no obichno pishet item i posle dlya vvoda klucha 'i' */


// ***************************************************************

//Metod map() - sozdayot noviy massiv so svesemi elementami, proshedshim proverku v peredavaemoy funksii,

// let numbers = [5, 10, 15, 20, 50];

// for(let i = 0; i < numbers.length; i++) { /* Umnojaem nashi elementi na 5 cherez sikl for */
// 	console.log(numbers[i] * 5);
// }

// ***********       *********

/* let newArray = numbers.map((item, i) => console.log(item * 5));  *//* Umnojaem elementi na 5 cherez Map() */
// let newArray = numbers.map((item, i) => item * 5); /* eto shitayetsya pravilnoy */
// *********        *******

/*let newArray = numbers.map((item, i) => { }); - esli pishite odnu strochku to eto {} ne nado. Esli mnogo pishite to nujno */

// ***********   *   ***********

// Metod filter() - sozdayot noviy massiv so vsemi elementami, proshedshimi proverku, zadavayemuyu v peredavayemoy funksii

// let numbers = [5, 10, 15, 20, 50];

// let filtered = numbers.filter((item, i) => item > 18);
// console.log(filtered);

// for(let i = 0; i < numbers.length;i++) {
// 	if (numbers[i] > 18) {
// 		console.log(numbers[i]);
// 	}
// }

// ************ * * * * *************

// Metod reduce() - prinayet funksiyu k akkumlaytoru i kakdomu znacheniyu massiva (sleva napravo) privodya ego k odnomu znacheniyu.

// let numbers = [5, 10, 15, 20, 50, 70];
// let result = numbers.reduce((acc, item) => acc + item);

// console.log(result);

// *** ***

// for (let i = 0; i < numbers.length; i++) {
// 	result += numbers[i]
// }

// console.log(result);


// ******************************

// Metod sort() - delaet sortirovku nashego massiva

let numbers = [5, 2, 14, 40, 29, 6, 45]; 

numbers.sort((prev, next) => prev - next);

console.log(numbers);

























