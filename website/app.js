
const addServerBtn = document.getElementById("add-server")
const main = document.querySelector("main")
const copyConfBtn = document.getElementById("copy-conf")
const downloadConf = document.getElementById("download-conf")

var i = 0

function addServer() {
    i++
    const num = i.toString()
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

    const deleteServBtn = document.createElement("button")
    deleteServBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>`
    deleteServBtn.classList.add("delete-serv")
    deleteServBtn.addEventListener("click", () => {
        divCase.remove()
    })
    divCase.appendChild(deleteServBtn)
    
    main.insertBefore(divCase, addServerBtn.parentElement)
}

function copyStr(str) {
    navigator.clipboard.writeText(str)
}

function parse(infos) {
    infos = JSON.parse(infos)
    var data = ''

    for (const server of infos) {
        data = data.concat("\n[")
        data = data.concat(server.name)
        data = data.concat("]\n   path = ")
        data = data.concat(server.path)
        data = data.concat("\n   valid users = ")
        data = data.concat(server.users.filter(user => user.read).map(user => user.name).join(", "))
        data = data.concat("\n   write list = ")
        data = data.concat(server.users.filter(user => user.write).map(user => user.name).join(", "))
    }

    return data
}

function getUser(userDiv) {
    var user = {}
    const allInputs = userDiv.querySelectorAll("input")
    user.name = allInputs[0].value
    user.write = allInputs[1].checked
    user.read = allInputs[2].checked

    return JSON.stringify(user)
}

function getInfos() {
    var allData = []

    const allServs = document.querySelectorAll(".server")
    for (const server of allServs) {
        var data = {}
        const currentNum = server.id.split("-")[1].toString()

        // Name
        const currentInputName = server.querySelector("#name-input-".concat(currentNum))
        data.name = currentInputName.value

        // Local path
        const currentInputPath = server.querySelector("#path-input-".concat(currentNum))
        data.path = currentInputPath.value

        // Users
        const usersDivs = server.querySelectorAll(".current-user-div")
        data.users = []
        for (const userDiv of usersDivs) {
            data.users.push(JSON.parse(getUser(userDiv)))
        }
        allData.push(data)
    }

    return JSON.stringify(allData)
}


addServerBtn.addEventListener("click", addServer)
copyConfBtn.addEventListener("click", () => {
    copyStr(
        parse(
            getInfos()
        )
    )
})
