function send(){
    var name = document.getElementById("name")
    var info = document.getElementById("informacao")

    var final = name.value;
    
    info.innerHTML = final

}

function sendColor(){
    var cor = document.getElementById("btn-color")
    var colorfinal = cor.color;

    var info = document.getElementById("informacao")

    info.style.color = colorfinal

}