const label = document.querySelector(".file-input")

function onEnter(){
    label.classList.add("active")
}

function onLeave(){
    label.classList.remove("active")
}

label.addEventListener("dragenter", onEnter)
label.addEventListener("drop", onLeave)
label.addEventListener("dragend", onLeave)
label.addEventListener("dragleave", onLeave)

const input = document.querySelector("#file")
const dropzone = document.querySelector("#drop-zone")

input.addEventListener("change", event => {
    if(input.files.lenght > 0){
        console.log(input.files)
    }
})