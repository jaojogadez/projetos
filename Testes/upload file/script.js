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

const input = document.querySelector("input")
const dropzone = document.querySelector("#drop-zone")

input.addEventListener("change", () => {
    if(input.files.length > 0){
        console.log(input.files)
        const type = input.files[0].type
        const formats = ["image/jpeg", "image/png", "image/jpg"]
        if(!formats.includes(type)){
            alert("Formato não permitido")
            return
        }
        
        if(document.querySelector("#cover")){
            dropzone.removeChild(document.querySelector("#cover"))
        }

        const img = document.createElement("img")
        img.id = "cover"
        img.src =   URL.createObjectURL(input.files[0])
        
        dropzone.appendChild(img)
    }
})