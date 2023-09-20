// Crie novas funções para responder os diferentes exercícios conforme se pede
function example(){
   //Função de exemplo. Para a executar abra o arquivo index.html e no seu navegador chame o nome dessa função ( example() ) e dê enter para a executar.
   //Essa é uma função de exemplo que usa cria um novo Objeto Date() do javascript para mostrar a data atual no formato ISO.
   let Data = new Date()
   alert("Você executou a função example.");
   console.log("Essa função foi executada em: " + Data.toISOString());
}

function parameterExample(n1, n2){
   //Função de exemplo. Para a executar abra o arquivo index.html e no seu navegador chame o nome dessa função ( example() ) e dê enter para a executar.
   //Essa é uma função de exemplo que têm 2 valores como parâmetros, n1 e n2. 
   alert("Você executou a função parameter Example");
   console.log(n1 + n2)
}

function limpar(){
   console.clear()
}


//1.1
function olaMundo(){
	alert("Ola mundo");
}
//1.2
function mostraNome(){
   let nome = prompt("Digita o seu nome> ")
   alert("o nome digitado foi:   " + nome);
}
//1.3
function concatenaPalavras(){
   let palavra1 = prompt("Digite a palavra 1> ")
   let palavra2 = prompt("Digite a palavra 2> ")
   let final = palavra1 + palavra2
   console.log("A concatenacao e: " + final);
}


//2.1
function somaNumeros(){
   let num1 = parseInt(prompt("Digite o num1> "))
   let num2 = parseInt(prompt("Digite o num2> "))
   let final = num1 + num2
   alert(final)
}
//2.2
function subtraiNumeros(n1, n2){
   let resultado = n1 - n2
   return resultado //permite que quando a função é usada o resultado seja retornado
}
function exibeSubtracao(){
   let funcaoSubtracao = subtraiNumeros(30, 3)
   console.log(funcaoSubtracao);
}

//2.3
function criaObjetos(){
   let nome = prompt("Digite o nome> ")
   let idade = prompt("Digite a idade> ")
   let timeFavorito = prompt("Digite o time favorito> ")

   let cliente = {
      nome: nome,
      idade: idade,
      timeFavorito: timeFavorito
   }
   console.log(cliente)
}


//3.1
function calculadora(){
   let num1 = parseInt(prompt("Digite um numero inteiro> "))
   let num2 = parseInt(prompt("Digite outro numero inteiro> "))
   let op = prompt("Digite a operação desejada (soma/sub/mult/div)> ")
   let final;
   switch(op){
      case "soma":
         final = num1 + num2
         break;
      case "sub":
         final = num1 - num2
         break;
      case"mult":
         final = num1 * num2
         break;
      case "div":
         final = num1 / num2
         break;
      default:
         alert("invalido")
         break;
   }
   console.log(final)
}

//3.2
function mudaConstante(){
   const nome = prompt("Digite seu nome> ")
   console.log(nome)
   nome = prompt("Digite seu novo nomekk> ")
   console.log(nome)

}



//4.1
function manipulaArrays(){
   let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]
   //4.2
   console.log("coloca o laranja como ultimo valor: ")
   cores.push("laranja")
   console.log(cores)
   //4.3
   console.log("tira o ultimo valor do array: ")
   console.log(cores.pop())
   //4.4
   console.log("organizando o array: ")
   console.log(cores.sort())
   //4.5
   console.log("removendo o azul: ")
   console.log(cores.splice(1, 1))
   //4.6
   let priValor = cores[0]
   let ultValor = cores[cores.length -1]
   console.log("a primeira cor é: " + priValor)
   console.log("a ultima cor é: " + ultValor)
   //4.7
   console.log("removendo uma cor.....")
   console.log(cores.shift())
}