import anime from 'animejs';
import { Modal } from './Components/Modal.js';

// TEST
Modal.show('Build your very own laser!', 'Assemble the laser from the parts in the box.  Click on the part and then choose where you think it belongs on the diagram')

// HAMBURGER MENU
const burgerBtn = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");
burgerBtn.addEventListener("click", (e) => {
	burgerBtn.classList.toggle('is-active-hamburger');

	if(navLinks.classList.contains("nav-is-in")) {
		navLinks.classList.remove('nav-is-in');
		navLinks.classList.add("nav-is-out");
	} else {
		navLinks.classList.remove('nav-is-out');
		navLinks.classList.add('nav-is-in')
	}
})

class Parts {
    constructor(number, position, name, description, image) {
        this.number = number;
        this.position = position;
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

const Experiment = {

    active: null,
    counter: 0,

    createParts: () => {

        const rootEL = document.querySelector(".experiment");

        const P1 = new Parts(1, 4, 'Focussing Mirror', 'A focussing lens', './imgs/laser/parts/mirror.svg');
        const P2 = new Parts(2, 3, 'Laser Diode', 'A laser diode', './imgs/laser/parts/diode.png');
        const P3 = new Parts(3, 1, 'Battery', 'A battery', './imgs/laser/parts/battery.png');
        const P4 = new Parts(4, 2, 'Laser Driver', 'A laser driver', './imgs/laser/parts/driver.png');

        const parts = [P1, P2, P3, P4];

        const partsContainer = document.createElement("div");
        partsContainer.classList.add("columns", "parts-container");
        
        parts.forEach(part => {
            part.el = document.createElement("div");
            part.img = document.createElement("img");
            part.el.setAttribute("data-tooltip", part.description);
            part.img.setAttribute("src", part.image);
            part.el.classList.add("ex-part", "column", "has-tooltip-bottom");
            part.el.appendChild(part.img);
            partsContainer.appendChild(part.el);

            part.el.addEventListener("click", () => {
                const allParts = document.querySelectorAll('.ex-part');
                allParts.forEach(part => {
                    part.classList.remove("ex-active");
                })
                part.el.classList.add("ex-active");
                Experiment.active = part.position;
                
            })

            rootEL.appendChild(partsContainer);
        })

        const progressBar = document.createElement("div");
        progressBar.classList.add("level", "progress-bar");
        rootEL.appendChild(progressBar);
        
        function createProgressEntry() {
            const entry = document.createElement("div");
            entry.className = 'progress-entry';
            progressBar.appendChild(entry);
        }

        const container = document.createElement("div");
        container.classList.add("columns", "slots-container");
        container.img = document.createElement("img");
        container.img.setAttribute("src", "./imgs/laser/slots/laser.png");
        container.img.className = 'laser-diagram';
        container.appendChild(container.img);
        rootEL.appendChild(container);

        container.slots = [
            {position: 1, id: 'battery'},
            {position: 2, id: 'circuits'},
            {position: 3, id: 'diode'},
            {position: 4, id: 'lens'}
        ];

        container.slots.forEach(slot => {
            slot.el = document.createElement("button");
            slot.el.classList.add("ex-slot", "has-text-primary");
            slot.el.id = slot.id;
            slot.val = slot.position;

            container.appendChild(slot.el);

            slot.el.addEventListener("click", () => {
                if(slot.val === Experiment.active) {
                    Experiment.counter ++;
                    createProgressEntry();
                    slot.el.classList.add("ex-slot-correct");
                    slot.el.innerText = '✔';
                    const allParts = document.querySelectorAll(".ex-part");
                    allParts.forEach(part => {
                        part.classList.remove('ex-active');
                    })

                } else if(slot.val !== Experiment.active) {
                    console.log('WRONG')
                }
                if(Experiment.counter == 4) {
                    Modal.show('Well Done', 'Mouse over each part of the laser to learn more about it')
                    const confirmBtn = document.querySelector(".confirm-button");
                    confirmBtn.addEventListener("click", () => {
                        Modal.hide();
                    })
                }          
            })
            
        })


    },
}

Experiment.createParts();
