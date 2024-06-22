
const addServerBtn = document.getElementById("add-server")
const main = document.querySelector("main")

var i = 0

function addServer() {
    const divCase = document.createElement("div")
    divCase.classList.add("case")
    divCase.classList.add("server")
    divCase.textContent = i
    i++
    
    main.insertBefore(divCase, main.firstChild)
}


addServerBtn.addEventListener("click", addServer)