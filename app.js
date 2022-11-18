const greeting = document.getElementById("greeting")
const weather = document.getElementById("weather");
const salt = document.getElementById("salt")
const portfolio = document.getElementById("portfolio")


let isMouseHover = false;
greeting.addEventListener('mouseleave', function(e) {
    isMouseHover = false;
    overlay()
})

greeting.addEventListener('mouseover', function(e){
    isMouseHover = true;
    overlay()
})

function overlay(){
    greeting.classList.toggle('overlay1')
}

// $(".hover").mousleave(functon(){
//     $(this).removeClass("hover")
// })