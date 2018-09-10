let lista = [];
let input = document.querySelector("#addLista");
let botao = document.querySelector('#botao');
let h1 = document.querySelector('h1');
let btn = document.querySelector('#btn');
certei = document.querySelector(".certei") ;
numero1 = document.querySelector('#numero');
numero2 = document.querySelector('#numero2');
btnU = document.querySelector('#btnU');


btnU.onclick = function () { 
if(btnU.onclick) {

    if(numero1.value && numero2.value < 0 || numero1.value < 0 || numero1.value < 0 && numero2.value > 0 ) {
        alert('Você precisa por um número maior que 0');
        return btnU.onclick;

        if (numero1.value === numero2.value) { 
            alert('Você não pode sortear números iguais');
        }
    }   
    if(numero2.value < numero1.value) {

        alert('O número inicial não pode ser maior que o segundo');
        return btnU.onclick;
    }
    let resultado =  Math.floor(Number(Math.random()  * [numero2.value] + [numero1.value]));
    console.log(resultado);

    btnChut = document.querySelector('#chute');
    document.querySelector(".text-in").classList.add("ocultar");
    document.querySelector('.escondido').style.height = "300px";
    document.querySelector('.acerto').style.height = "400px";
    document.querySelector('.acerto').style.width= "300px";
    document.querySelector('.acerto').style.marginBottom = "10px";
 
// A parte de cima está calculando o resultado

// Quando o usuario clicar no botão enviar chute, ele verá se acertou ou não
btnChut.onclick = function() { 

if(Number(certei.value) === resultado) {

    document.querySelector(".certei").classList.add("ocultar");
    document.querySelector(".text-in").classList.add("ocultar");
    document.querySelector("#btnU").classList.add("ocultar");
    document.querySelector("#chute").classList.add("ocultar");
    document.querySelector('.container').style.backgroundColor = "green";
    document.querySelector('.escondido').style.height = "250px";
    document.querySelector("#tenteDnv").style.fontSize = "80px";
    document.querySelector("#tenteDnv").style.marginBottom = "0px";
    document.querySelector("#tenteDnv").style.marginTop = "5px";
    document.querySelector("#tenteDnv").style.paddingBottom = "0px";
    document.querySelector('#tenteDnv').innerHTML = resultado;

    // Aviso que é menor ou maior

    document.querySelector('#acertou').innerHTML = "Isso aí, você acertou ;) ";
    document.querySelector('#racertou').innerHTML = "";
    let aviso = document.querySelector('.maior');
    aviso.classList.remove("ocultar");
    aviso.style.backgroundColor = "green";
    aviso.style.height = "60px";
    aviso.style.padding = "10px";
    aviso.style.marginBottom = "10px";


   let reload =  document.querySelector('#reload');
   reload.classList.remove('ocultar');

 reload.onclick = function reload() {
        location.reload();
        console.log(reload);
    }
   
//


}


  


if(resultado >  Number(certei.value)) {

  
    document.querySelector('.container').style.backgroundColor = "red";
    document.querySelector('#tenteDnv').innerHTML = "Você errou! Tente novamente";
    document.querySelector('.acerto').style.height = "800px";
    document.querySelector('.acerto').style.width = "400px";
    document.querySelector('span').innerHTML = "Maior";
    let aviso = document.querySelector('.maior');
    aviso.classList.remove("ocultar");
    aviso.style.marginBottom = "20px";


    } 

    if(resultado < Number(certei.value)) {

        document.querySelector('.container').style.backgroundColor = "red";
        document.querySelector('#tenteDnv').innerHTML = "Você errou! Tente novamente";
        document.querySelector('.acerto').style.height = "800px";
        document.querySelector('.acerto').style.width = "400px";
        document.querySelector('span').innerHTML = "Menor";
        let aviso = document.querySelector('.maior');
        aviso.classList.remove("ocultar");
        aviso.style.marginBottom = "20px";

        } 
        


}}}

