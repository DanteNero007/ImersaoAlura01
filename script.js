//Abaixo captura todo html d tag input
var inputAll  =  document.querySelector('#filme');

function oi(){
alert("ola mundo")}

function addMovie(){
  
//captura somente o valor do campo input
var inputValue  =  document.querySelector('#filme').value;
  
 //chama a função analisar com o parametro
 // inputvalue que recebeu a url da imagem do usuario
 analisar(inputValue);
}

//
var osis = 0; 
//Abaixo função envocada de dentro de outra função
function analisar(url){
  
  //Abaixo estabelece se a url passada tem o formato da uma imagem 
  //Abaixo ensdeWith() verifica se o fim da url possui o .jpg no final
if (url.endsWith('.jpg')){
   
  //Comentario abaixo inseri a imagem porem apaga todo conteudo
   //document.write("<img src = " + inputValue +">")
  
  //Abaixo captura o id do elemento div no htnml 
   var listaFilmes = document.querySelector("#listaFilmes");
  
  /*Abaixo insere dentro do elemento div capturado
  a tag img com o valor do caminho da imagem que foi 
  passda pelo parametro dentro da função addMovie
  OBS: `${}` coloca uma variavel dentro da chave ja com seu valor
  que foi guardado e os aspas  `para esquerda` leem o resto do codigo
  como em html*/
 
  listaFilmes.innerHTML += `<span style="--i: ${osis =osis + 1} ;" ><img class='imgembedded' onclick='oi()' src = ${url}></span>`
  }else{
    alert("endereço incorreto de imagem verifique se seu endereço é tem a extensão jpg")
  }
 inputAll.value = " ";
  console.log(osis)
}