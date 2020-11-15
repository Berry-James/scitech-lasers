import { FullPage } from './Components/Fullpage.js';
import { Game } from './Components/Game.js';
import { Scroll } from './Components/Scroll.js';
import { Quiz } from './Components/Quiz.js';

/* Game.create(); */
FullPage.init();
Quiz.init();

/// PARTICLES INIT
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
	console.log('callback - particles.js config loaded');
  }); 

/// PARTICLES INIT
particlesJS.load('particles-js-celebration', 'assets/particlesjs-celebration.json', function() {
	console.log('callback - particles.js config loaded');
	}); 


// HAMBURGER MENU
const burgerBtn = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");
burgerBtn.addEventListener("click", (e) => {
	navLinks.classList.toggle("is-display-none");
	burgerBtn.classList.toggle('is-active-hamburger');
})

// IMG CYCLE
const randImg = {


	rand: () => {
		const imgs = ['./imgs/icons/barcode.svg', 'imgs/icons/laser-beam.svg'];
		const mainImg = document.querySelector(".main-img");
/* 		mainImg.setAttribute("src", ) */
	} 

}

randImg.rand();


