import anime from 'animejs';
import Mustache from 'mustache';

const Modal = {

    show: (textTitle, textBody) => {
        const template = document.querySelector("#modal-template").innerHTML;
        const output = Mustache.render(template);
        const body = document.querySelector("body");
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = output;
        modalContainer.classList.add("modal", "is-active")
        body.appendChild(modalContainer);
        // modal header
        const modalHeader = modalContainer.querySelector('.modal-header');
        modalHeader.innerText = textTitle;
        // modal body
        const modalBody = modalContainer.querySelector('.modal-body');
        modalBody.innerText = textBody;
        const confirmBtn = modalContainer.querySelector(".confirm-button");
        confirmBtn.addEventListener("click", () => {
            Modal.hide();
        });
        document.addEventListener("keypress", (e) => {
            if(e.keyCode === 27 || e.keyCode === 13) {
                Modal.hide();
            }
        })
    },

    hide: () => {
        const modal = document.querySelector(".modal");
        const modalContent = modal.querySelector(".modal-content");
        modalContent.classList.add("is-leaving-modal");
        modalContent.classList.remove('is-active')
        modal.classList.remove('is-active')
    }

}

export { Modal }