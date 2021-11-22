function esconder(){
    document.getElementById('informations').style.opacity='0%';
    
    function headerText(){
        document.getElementById('Agenda2030').style.opacity='100%';
    }
    function imageODS(){
    let area = document.getElementById('informationSpace');
    area.innerHTML='<img id="OdsImg" src="https://i.ibb.co/t3n53ZK/4.pnghttps://i.ibb.co/t3n53ZK/4.png">';
    document.getElementById('informations').style.opacity='100%';
    document.getElementById('tableTop').style.display='none';
    }
    function conteudo(){
        document.getElementById('conteudo-view').style.display='block';
    }
    setTimeout(headerText, 5000);
    setTimeout(imageODS, 5000);
    setTimeout(conteudo, 8500);
}
//function textoOds(){
  //  document.getElementById('documentoOds').style.display='block';
    //function textoOpacity(){
      //  document.getElementById('texto').style.opacity='100%';
    //}
   //setTimeout(textoOpacity, 3000)
//}
//setTimeout(textoOds, 22000);
setTimeout(esconder, 12000);

function HappyDance(){
    document.body.style.backgroundImage='url("https://acegif.com/wp-content/gif/confetti-40.gif")';
    document.getElementById('dance').style.display='inline-block';
    document.getElementById('song').play();
    document.getElementById('song').volume='0.6';
    function people1(){
        document.getElementById('people1').style.opacity='100%';
    }
    function people2(){
        document.getElementById('people2').style.opacity='100%';
    }
    function people3(){
        document.getElementById('people3').style.opacity='100%';
    }
    function people4(){
        document.getElementById('people4').style.opacity='100%';
    }
    function people5(){
        document.getElementById('people5').style.opacity='100%';
    }
    function people6(){
        document.getElementById('people6').style.opacity='100%';
    }
    function people7(){
        document.getElementById('people7').style.opacity='100%';
    }
    function people8(){
        document.getElementById('people8').style.opacity='100%';
    }

    setTimeout(people1, 2800);
    setTimeout(people2, 5300);
    setTimeout(people3, 10800);
    setTimeout(people4, 15300);
    setTimeout(people5, 8000);
    setTimeout(people6, 17000);
    setTimeout(people7, 19500);
    setTimeout(people8, 22500);
}
//Animação por scroll
const target = document.querySelectorAll('[data-anime]');
const animateClass = 'animate';
function animeScroll(){
const janelaTop = window.pageYOffset+((window.innerHeight *3)/4);
target.forEach(function(element){
    if((janelaTop) > element.offsetTop){
        element.classList.add(animateClass);
    }else{
        element.classList.remove(animateClass);
    }
})
}
animeScroll();
function scrollEvent(){
    window.addEventListener('scroll', function(){
        animeScroll();
    } )
}
setInterval(scrollEvent, 200);
