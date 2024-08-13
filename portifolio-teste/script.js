function expandir1(){
    var element = document.getElementById('p1')
    element.style.display = 'flex'
}
function voltar1(){
    var element = document.getElementById('p1')
    element.style.display = 'none'
}

function expandir2(){
    var element = document.getElementById('p2')
    element.style.display = 'block'
}
function voltar2(){
    var element = document.getElementById('p2')
    element.style.display = 'none'
}

function expandir3(){
    var element = document.getElementById('p3')
    element.style.display = 'block'
}
function voltar3(){
    var element = document.getElementById('p3')
    element.style.display = 'none'
}

function expandir4(){
    var element = document.getElementById('p4')
    element.style.display = 'block'
}
function voltar4(){
    var element = document.getElementById('p4')
    element.style.display = 'none'
}

function expandir5(){
    var element = document.getElementById('p5')
    element.style.display = 'flex'
}
function voltar5(){
    var element = document.getElementById('p5')
    element.style.display = 'none'
}

function expandir6(){
    var element = document.getElementById('p6')
    element.style.display = 'block'
}
function voltar6(){
    var element = document.getElementById('p6')
    element.style.display = 'none'
}

function expandir7(){
    var element = document.getElementById('p7')
    element.style.display = 'block'
}
function voltar7(){
    var element = document.getElementById('p7')
    element.style.display = 'none'
}

function expandir8(){
    var element = document.getElementById('p8')
    element.style.display = 'block'
}
function voltar8(){
    var element = document.getElementById('p8')
    element.style.display = 'none'
}
function expandir9(){
    var element = document.getElementById('p9')
    element.style.display = 'block'
}
function voltar9(){
    var element = document.getElementById('p9')
    element.style.display = 'none'
}









window.addEventListener('scroll', function() {
var header = document.querySelector('.menu--movel');
var scrollTop = window.scrollY;

    if (scrollTop > 70) {
        header.classList.add('menu--show');
    } else {
        header.classList.remove('menu--show');
    };
});

// Função alert para dar rolagem na tela 
var Alert = document.getElementById('alerta')
var Main = document.getElementById('main')
function onLoadPg(){
    Alert.classList.add('alert--show')
    Main.classList.add('main--blur')
}
function hiddenAlert(){
    document.body.style.overflow = 'auto';
    Alert.classList.remove('alert--show')
    Main.classList.remove('main--blur')

}