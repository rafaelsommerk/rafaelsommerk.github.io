 // variavel usada para pausar execucao
 let pausa = false;

 function animar(){
    let animacao1 = document.getElementById('animacao1');
    let animacao2 = document.getElementById('animacao2');
    let animacao3 = document.getElementById('animacao3');
    let animacao4 = document.getElementById('animacao4');

    
    
    animacao1.style.marginLeft = numeroAleatorio()+'%';
    animacao1.style.backgroundColor = corAleatoria();
    animacao1.style.opacity = 1;

    animacao2.style.marginLeft = numeroAleatorio()+'%';
    animacao2.style.backgroundColor = corAleatoria();
    animacao2.style.opacity = 1;

    animacao3.style.marginLeft = numeroAleatorio()+'%';
    animacao3.style.backgroundColor = corAleatoria();
    animacao3.style.opacity = 1;

    animacao4.style.marginLeft = numeroAleatorio()+'%';
    animacao4.style.backgroundColor = corAleatoria();
    animacao4.style.opacity = 1;

    //pausa o codigo em milissegundos e chama uma funcao
    setTimeout(remover_animacao, 500);

    
    
}

function remover_animacao() {
    let animacao1 = document.getElementById('animacao1');
    let animacao2 = document.getElementById('animacao2');
    let animacao3 = document.getElementById('animacao3');
    let animacao4 = document.getElementById('animacao4');

    animacao1.style.opacity = 0;
    animacao2.style.opacity = 0;
    animacao3.style.opacity = 0;
    animacao4.style.opacity = 0;
}

function corAleatoria(){
    let cores = ['#191970','#4682B4','#66CDAA','#9ACD32','#B8860B','#7B68EE','#BA55D3','#B22222','#FFD700'];
    let numero_cor = parseInt(Math.random() * cores.length);
    return cores[numero_cor];

}

function numeroAleatorio(){
    let numero =  parseInt((Math.random()  * 92)+1);
    return numero;
}