import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach (button => {
    button.addEventListener("click", event => {
        // Abrir modal
        modal.open()
    })
})

//pegar quando o marcar como lido for clicado


// Abrir modal
