ScrollReveal().reveal('.SobreNosContent', { delay: 300 }, { reset: true });
ScrollReveal().reveal('.ProdutosContent', { delay: 300 }, { reset: true });
ScrollReveal().reveal('.avaliarProdutoContent', { delay: 300 }, { reset: true });


function star1(){
    document.getElementById("s1").src = "main/assets/img/star1.png";
    document.getElementById("s2").src = "main/assets/img/star0.png";
    document.getElementById("s3").src = "main/assets/img/star0.png";
    document.getElementById("s4").src = "main/assets/img/star0.png";
    document.getElementById("s5").src = "main/assets/img/star0.png";
}
function star2(){
    document.getElementById("s1").src = "main/assets/img/star1.png";
    document.getElementById("s2").src = "main/assets/img/star1.png";
    document.getElementById("s3").src = "main/assets/img/star0.png";
    document.getElementById("s4").src = "main/assets/img/star0.png";
    document.getElementById("s5").src = "main/assets/img/star0.png";
}

function star3(){
    document.getElementById("s1").src = "main/assets/img/star1.png";
    document.getElementById("s2").src = "main/assets/img/star1.png";
    document.getElementById("s3").src = "main/assets/img/star1.png";
    document.getElementById("s4").src = "main/assets/img/star0.png";
    document.getElementById("s5").src = "main/assets/img/star0.png";
}
function star4(){
    document.getElementById("s1").src = "main/assets/img/star1.png";
    document.getElementById("s2").src = "main/assets/img/star1.png";
    document.getElementById("s3").src = "main/assets/img/star1.png";
    document.getElementById("s4").src = "main/assets/img/star1.png";
    document.getElementById("s5").src = "main/assets/img/star0.png";
}
function star5(){
    document.getElementById("s1").src = "main/assets/img/star1.png";
    document.getElementById("s2").src = "main/assets/img/star1.png";
    document.getElementById("s3").src = "main/assets/img/star1.png";
    document.getElementById("s4").src = "main/assets/img/star1.png";
    document.getElementById("s5").src = "main/assets/img/star1.png";
}

function mostrarComentario(){
    const comentario = document.getElementById("comentario").value;
    const nomeCliente = document.getElementById("clientName").value;
    
  

    if(document.getElementById("radio1star").checked){
        const avaliacaoHTML = `<div class="cardAvaliar flexContainer flexColumn alignAllCenter"> <div class="flexContainer flexRow alignAllCenter"><p class="text-wine nameClientCardAvaliar"> ${nomeCliente} </p><img src="main/assets/img/star1.png"><img src="main/assets/img/star0.png"><img src="main/assets/img/star0.png"><img src="main/assets/img/star0.png"><img src="main/assets/img/star0.png"></div><div class="comentarioCardAvaliar"><p class="text-wine comentarioCardAvaliar">  ${comentario}  </p></div></div>`

        document.getElementById("avaliacoes").insertAdjacentHTML("beforeend", avaliacaoHTML);
        const form = document.getElementById("avaliacao-form");
        form.reset();
        const reset = document.getElementById("radio1star");
        reset.checked = true;
        
    }
    if(document.getElementById("radio2star").checked){
        const avaliacaoHTML = `<div class="cardAvaliar flexContainer flexColumn alignAllCenter"> <div class="flexContainer flexRow alignAllCenter"><p class="text-wine nameClientCardAvaliar">${nomeCliente}</p><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star0.png"><img src="main/assets/img/star0.png"><img src="main/assets/img/star0.png"></div><div class="comentarioCardAvaliar"><p class="text-wine comentarioCardAvaliar">  ${comentario}  </p></div></div>`

        document.getElementById("avaliacoes").insertAdjacentHTML("beforeend", avaliacaoHTML);
        const form = document.getElementById("avaliacao-form");
        form.reset();
        const reset = document.getElementById("radio1star");
        reset.checked == true;
        
        
    }
    if(document.getElementById("radio3star").checked){
        const avaliacaoHTML = `<div class="cardAvaliar flexContainer flexColumn alignAllCenter"> <div class="flexContainer flexRow alignAllCenter"><p class="text-wine nameClientCardAvaliar">${nomeCliente}</p><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star0.png"><img src="main/assets/img/star0.png"></div><div class="comentarioCardAvaliar"><p class="text-wine comentarioCardAvaliar">  ${comentario}  </p></div></div>`

        document.getElementById("avaliacoes").insertAdjacentHTML("beforeend", avaliacaoHTML);
        const form = document.getElementById("avaliacao-form");
        form.reset();
    }
    if(document.getElementById("radio4star").checked){
        const avaliacaoHTML = `<div class="cardAvaliar flexContainer flexColumn alignAllCenter"> <div class="flexContainer flexRow alignAllCenter"><p class="text-wine nameClientCardAvaliar">${nomeCliente}</p><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star0.png"></div><div class="comentarioCardAvaliar"><p class="text-wine comentarioCardAvaliar">  ${comentario}  </p></div></div>`

        document.getElementById("avaliacoes").insertAdjacentHTML("beforeend", avaliacaoHTML);
        const form = document.getElementById("avaliacao-form");
        form.reset();
    }
    if(document.getElementById("radio5star").checked){
        const avaliacaoHTML = `<div class="cardAvaliar flexContainer flexColumn alignAllCenter"> <div class="flexContainer flexRow alignAllCenter"><p class="text-wine nameClientCardAvaliar">${nomeCliente}</p><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"><img src="main/assets/img/star1.png"></div><div class="comentarioCardAvaliar"><p class="text-wine comentarioCardAvaliar">  ${comentario}  </p></div></div>`

        document.getElementById("avaliacoes").insertAdjacentHTML("beforeend", avaliacaoHTML);
        const form = document.getElementById("avaliacao-form");
        form.reset();
    }
    
}

   
