let addtoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let InputText = document.getElementById("InputText");
let clearToDo = document.getElementById("clearToDo");

addtoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML =InputText.value;
    InputText.value ="";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration ="line-through";
    })
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })
    clearToDo.addEventListener("click", function(){
        paragraph.remove(toDoContainer);
    })
})