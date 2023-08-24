document.addEventListener("DOMContentLoaded", (e) =>{
    let foto_nueva = document.getElementById("foto1")
    let newLink = document.getElementById("link")
    foto_nueva.addEventListener("mouseover", function(){
        foto_nueva.src = "PersonajeD.jpg"
    })
    foto_nueva.addEventListener("mouseout", function(){
        foto_nueva.src = "PersonajeA.jpg"
    })
    newLink.addEventListener("click", function(){
        newLink.href = "https://www.youtube.com/watch?v=SmF4wY7U7QE"
    })

    document.addEventListener("keydown", function(event){
        alert("Hola, te amo mucho")
    })
})