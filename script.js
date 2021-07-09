// Questão 7

//A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

//Somente uma das cores da paleta deve ter a classe selected de cada vez;

//Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

//ANOTAÇÕES:

// Primeiro selecionar  cor (COR  y selecionada = classe selected)
// tenho q incluir condiçoes oara que a classe selected seja de somente uma das cores?
// Como identificar a cor selecionada?
// Usarei um evento para isso? Um click no mouse?
// SE vou clicar ele tem que virar um botão? certo?
// como ele vai preender o pixel no quadro ?(tipo identificando o quadro q o usuario escolheu com a cor selecionada fazendo a ligação entre elas.
// esse evento tem q terminar para eu conseguir mudar de cor

 const selecionaCor= document.getElementById("color-palette");

 function mudaCor(){
     selecionaCor.addEventListener('click',function(event){
         let corSelecionada=document.querySelector(".selected");
         corSelecionada.classList.remove("selected");
         event.target.className +=" selected";
     })
    
 } 
 mudaCor();