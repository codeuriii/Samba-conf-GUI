
const addServerBtn = document.getElementById("add-server")
const main = document.querySelector("main")

var i = 0

function addServer() {
    const divCase = document.createElement("div")
    divCase.classList.add("case")
    divCase.classList.add("server")
    divCase.textContent = i
    i++

    // Liste des choses a mettre dans un serveur
    // Le nom
    // Le path du folder
    
    // Les users
    // Btn ajouter un user
    // Pour un user
    // Check box write and access
    // Décoche access decoche aussi write
    // Btn delete user

    // Mode invité
    
    main.insertBefore(divCase, addServerBtn.parentElement)
}


addServerBtn.addEventListener("click", addServer)