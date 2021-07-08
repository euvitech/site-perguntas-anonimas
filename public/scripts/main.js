import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
const modalButtonColor = document.querySelector('.modal button.red')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")


checkButtons.forEach (button => {
    button.addEventListener("click", (event) => handleClick(event, true))

})

const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach (button =>{
    button.addEventListener ("click", (event) => handleClick(event, false))
})



function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} Esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} está pergunta como lida?` : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = `Sim, ${text}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}