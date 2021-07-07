export default function Modal(){
    function open(){
        //Funcionalidade de acrescentar active no código HTML
        document.querySelector(".modal-wrapper").classList.add("active")
    }
    function close(){
        //Funcionalidade de remover active no código HTML
    }

    return {
        open,
        close
    }
}