function mostrarMensaje(){
    console.log("Holaaaa como estas");
}
function agregarTarea(){
function capturaTexto(){
    //capturamos el elemento input
    let input=document.querySelector("#nuevaTarea");
    if(input.value===""){
        alert("El campo no puede estar vacio");
        return;
    }

    //capturamos el valor del input
    let valorInput=input.value;

    //creamos un elemento li
    let ul=document.querySelector("#listaTareas");

    //creamos un elemento li
    let li=document.createElement("li");

    //le asignamos como contenido el valor capturado del input
    li.textContent=valorInput;
    
    //creamos el boton eliminar
    let button=document.createElement("button");
    button.textContent="Eliminar";
    li.appendChild(button);
    button.onclick=function(){
        ul.removeChild(li);
    }
    // le agrego como hijo el li al elemento padre ul
    ul.appendChild(li);
    console.log();

    document.querySelector("#nuevaTarea");
    input.value="";
}