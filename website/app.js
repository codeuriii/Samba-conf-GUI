
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
    nameInput.placeholder = "Server's name"
    divCase.appendChild(nameInput)

    // Le path du folder
    const localPathInput = document.createElement("input")
    localPathInput.type = "text"
    localPathInput.id = "path-input-".concat(num)
    localPathInput.placeholder = "Local path"
    divCase.appendChild(localPathInput)
    
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
    userDiv.classList.add("all-users")
    addUserBtn.textContent = "Add an user"
    addUserBtn.addEventListener("click", () => {
        // Pour un user
        // Name of user
        // Check box write and access
        // Décoche access decoche aussi write
        // Btn delete user

        const currentUser = document.createElement("div")
        currentUser.className = "current-user-div row"

        const userName = document.createElement("input")
        userName.placeholder = "User's name"
        currentUser.appendChild(userName)

        const writeCheckBox = document.createElement("input")
        writeCheckBox.type = "checkbox"
        writeCheckBox.checked = false
        currentUser.appendChild(writeCheckBox)

        const readCheckBox = document.createElement("input")
        readCheckBox.type = "checkbox"
        readCheckBox.checked = true
        currentUser.appendChild(readCheckBox)

        const deleteUserBtn = document.createElement("button")
        deleteUserBtn.type = "button"
        deleteUserBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>`
        deleteUserBtn.addEventListener("click", () => {
            currentUser.remove()
        })
        currentUser.appendChild(deleteUserBtn)

        userDiv.appendChild(currentUser)
    })

    divCase.appendChild(addUserBtn)
    divCase.appendChild(userDiv)
    
    main.insertBefore(divCase, addServerBtn.parentElement)
}


addServerBtn.addEventListener("click", addServer)