//3.1

ele = document.getElementById("ele1")

function pintar(){
ele.style.backgroundColor = 'yellow'
}

ele.addEventListener("click", pintar);

//3.2

el = document.getElementById("el")

function pintar1(color='green'){
el.style.backgroundColor = color;
}

el.addEventListener("click", function(){
    pintar1('yellow');
});


