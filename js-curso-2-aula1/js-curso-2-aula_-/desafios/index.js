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




// ASYNC

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if(!response) {
//             throw new Error(`Erro HTTP! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log("Usuários encontrados:")
//         for (let user of data) {
//             console.log(`- ${user.name}`);
//         }
//     })
//     .catch(error => {
//         console.error("Erro ao buscar usuários:", error);
//     })



// const urlAPI = "https://jsonplaceholder.typicode.com/users";

// async function procurarUser() {
//     try {
//         const response = await fetch(urlAPI);
//         if(!response.ok) {
//             throw new Error(`Erro HTTP! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Usuários encontrados:");
//         for (let user of data) {
//             console.log(`- ${user.name}`);
//         }
//     } catch(error) {
//         console.log(`Erro ao buscar usuários: ${error}`);
//     }
// }

// procurarUser()

// const urlUser = "https://jsonplaceholder.typicode.com/users/1";
// const urlPost = "https://jsonplaceholder.typicode.com/posts/1";
// const urlComment = "https://jsonplaceholder.typicode.com/comments/1"

// async function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             fetch(urlUser) 
//                 .then((response) => {
//                     if(!response.ok) {throw new Error(`Erro HTTP! Status: ${response.status}`);}
//                     return response.json();
//                 })
//                 .then((data) => {
//                     resolve(`Usuário encontrado: ${data.name}`);
//                 })
//                 .catch((error) => {
//                     console.error(`Ocorreu um erro: ${error}`)
//                 })
//         }, 1000);
//     })
// }

// async function getPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             fetch(urlPost)
//                 .then((response) => {
//                     if(!response.ok) {throw new Error(`Erro HTTP! Status: ${response.status}`);}
//                     return response.json();
//                 })
//                 .then((data) => {
//                     resolve(`Posts carregados: ${data.title}`)
//                 })
//                 .catch((error) => {
//                     console.error(`Ocorreu um erro: ${error}`);
//                 })
//         }, 2000)
//     }) 
// }

// async function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             fetch(urlComment)
//                 .then((response) => {
//                     if(!response.ok) {throw new Error(`Erro HTTP! Status: ${response.status}`);}
//                     return response.json();
//                 })
//                 .then((data) => {
//                     resolve(`Comentários carregados: ${data.name}`);
//                 })
//                 .catch((error) => {
//                     console.error(`Ocorreu um erro: ${error}`);
//                 })
//         }, 3000)
//     })
// }

// Promise.all([getUser(), getPosts(), getComments()])
//     .then((resultados) => {
//         console.log("Todos as informações foram carregadas! ", resultados)
//     })


// class Calculadora {
//     static somar(a, b) {
//         return a + b;
//     }

//     static multiplicar(a, b) {
//         return a * b;
//     }
// }

// console.log(Calculadora.somar(199, 347));


// import soma, { subtracao, multiplicacao, divisao } from './calculadora.js';

// const operacoes = {soma, subtracao, multiplicacao, divisao};

// let funcao = prompt("Digite uma função: ")
// let requisicaoA = Number(prompt("Digite um valor: "));
// let requisicaoB = Number(prompt("Digite mais um valor: "));

// console.log(operacoes[funcao](requisicaoA, requisicaoB));

// import('./mensagens.js')
//     .then(module => {
//         console.log(module.mensagem("Sergio"));
//     })
//     .catch(error => {
//         console.error("Erro ao carregar o módulo", error);
//     })



const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(lista, preco, maxPreco) {
    lista.sort((a, b) => {
        if(a[preco] < b[preco]) {
            return 1;
        }
        if(a[preco > b[preco]]) {
            return -1;
        }
        return 0;
    })
    return lista.filter((produto) => {
        if(produto[preco] <= maxPreco) {
            return produto
        }
    })
}

console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 'preco', 80.99))