
const addServerBtn = document.getElementById("add-server")
const main = document.querySelector("main")

var i = 0

function addServer() {
    const num = (i + 1).toString()
    const divCase = document.createElement("div")
    divCase.classList.add("case")
    divCase.classList.add("server")
    divCase.id = "server-".concat(num)

    // Liste des choses a mettre dans un serveur
    // Le nom
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name-input-".concat(num)
    divCase.appendChild(nameInput)

    // Le path du folder
    const localPathInput = document.createElement("input")
    localPathInput.type = "text"
    localPathInput.id = "path-input-".concat(num)
    
    // Les users
    const separator = document.createElement("div")
    separator.classList.add("separator")
    divCase.appendChild(separator)

    // Btn ajouter un user
    const addUserBtn = document.createElement("button")
    addUserBtn.id = "add-user-".concat(num)
    addUserBtn.classList.add("server-btn")
    const userDiv = document.createElement("div")
    userDiv.classList.add("column")
    addUserBtn.addEventListener("click", () => {
        // Pour un user
        // Name of user
        // Check box write and access
        // Décoche access decoche aussi write
        // Btn delete user

        const currentUser = document.createElement("div")
        currentUser.className = "current-user-div row"

        const userName = document.createElement("input")
        currentUser.appendChild(userName)

        const writeCheckBox = document.createElement("input")
        writeCheckBox.type = "checkbox"
        writeCheckBox.checked = false
        currentUser.appendChild(writeCheckBox)

        const readCheckBox = document.createElement("input")
        readCheckBox.type = "checkbox"
        readCheckBox.checked = true
        currentUser.appendChild(readCheckBox)

        userDiv.appendChild(currentUser)
    })

    divCase.appendChild(addUserBtn)
    divCase.appendChild(userDiv)
    
    main.insertBefore(divCase, addServerBtn.parentElement)
}


addServerBtn.addEventListener("click", addServer)