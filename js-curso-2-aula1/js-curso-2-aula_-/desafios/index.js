// let altura = document.getElementById('altura');
// let peso = document.getElementById('peso');
// //fazer depois sem parametros
// function calculoIMC(alt, pes) {
//     let resultado = document.getElementById('resultadoIMC');
//     resultado.innerHTML = parseInt(pes / Math.pow(alt, 2))
// }

// calculoIMC(1.68, 55)
//IMC



// let resultado = document.getElementById('resultadoIMC');

// function fatorial(num) {
//     let fator = 0;
//     if (num === 0 || num === 1){
//         return resultado.innerHTML = 1 
//     } 
//     for(let i = 1; i < num; i++) {
//         let res = num * (num - i);
//         fator += res
//     }
//     resultado.innerHTML = fator
// }

// fatorial(4)
//FATORIAL



// let resultado = document.getElementById('resultadoIMC');

// function realToDolar(dolar) {
//     let realEmDolar = dolar * 6.04;
//     resultado.innerHTML = realEmDolar;

// }
// realToDolar(2)
//DOLAR



// let resultado = document.getElementById('resultadoIMC');

// function salaRetangular(alt, base) {
//     let area = base * alt;
//     let perimetro = 2 * (base + alt)

//     resultado.innerHTML = `Área: ${area} <br> Perímetro: ${perimetro}`;
// }

// salaRetangular(3, 7)
//AREA E PERIMETRO RETANGULO



// let resultado = document.getElementById('resultadoIMC');

// function salaCircular(raio) {
//     let area = Math.floor(((raio * raio) * 3.14) * 100) / 100;
//     let perimetro = Math.floor((2 * 3.14 * raio) * 100) / 100;

//     resultado.innerHTML = `Área: ${area} <br> Perímetro: ${perimetro}`;
// }

// salaCircular(5)
//AREA E PERIMETRO CIRCULO



// let resultado = document.getElementById('resultadoIMC');
// let num = 9
// resultado.innerHTML = `Tabuada do ${num} <br>`

// function tabuadaEspecifica(num) {
//     for(let i = 1; i <= 10; i++) {
//         let tabuada = num * i
//         resultado.innerHTML += `${num} x ${i} = ${tabuada} <br>`
//     }
// }

// tabuadaEspecifica(num)


//ARRAY


// let listaNomes = [];
// listaNomes.push('Cristiano', 'Messi', 'Neymar');

// let resultado = document.getElementById('resultadoIMC');
// resultado.innerHTML = listaNomes[listaNomes.length - 1];