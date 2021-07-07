export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.modal-wrapper .cancel')

    cancelButton.addEventListener('click', close)

    function open(){
        //Funcionalidade de acrescentar active no código HTML
        modalWrapper.classList.add("active")
    }
    function close(){
        //Funcionalidade de remover active no código HTML
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}