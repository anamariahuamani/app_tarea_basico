function mostrarMensaje(){
    console.log("hola como estas")
}
function capturatexto(){
    // capturamos el valor de input
    let input=document.querySelector
    ("#nuevatarea")
    if (input.value==""){
        alert("el input debe contener un teto")
        return
    }
    // capturamos el valor de input
    let valorInput=input.value
    // capturamos el elemento ul
    let ul=document.createElement("li")
    // asignamos como contenido del li el valor capturado en input
    li.textContent=valorInput
    
    // creamos el boton eliminar
    let button=document.createElement
    ("button")
    button.textContent="eliminar"
    button.onclick=function
    li.appendChild(button)
    // le agregamos como hijo el li al elemento padre ul
    ul.appendChild(li)
}
