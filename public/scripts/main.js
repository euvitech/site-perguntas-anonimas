import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")


checkButtons.forEach (button => {
    button.addEventListener("click", event => {
        // Abrir modal
        modalTitle.innerHTML = "Marcar como lido"
        modalDescription.innerHTML = "Têm certeza que deseja Marcar como lido esta pergunta?"
        modal.open()
    })
})

const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach (button =>{
    button.addEventListener("click", handleClick)
})

function handleClick(){
    modal.open()
}