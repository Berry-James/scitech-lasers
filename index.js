import { FullPage } from './Components/Fullpage.js';
import { Quiz } from './Components/Quiz.js';
import { Intersection } from './Components/Intersection.js';
import mustache from 'mustache';

FullPage.init();
Quiz.init();

/// PARTICLES INIT
// EXPERIMENT PAGE
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
	console.log('callback - particles.js config loaded');
  }); 

// HOME PAGE
particlesJS.load('particles-js-home', 'assets/particlesjs-config.json', function() {
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
	burgerBtn.classList.toggle('is-active-hamburger');

	if(navLinks.classList.contains("nav-is-in")) {
		navLinks.classList.remove('nav-is-in');
		navLinks.classList.add("nav-is-out");
	} else {
		navLinks.classList.remove('nav-is-out');
		navLinks.classList.add('nav-is-in')
	}
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

// INTERSECTION OBSERVER
Intersection.particles();

// TITLES
const titles = document.querySelectorAll(".title");
titles.forEach(thisTitle => {
	Intersection.title(thisTitle)
})

// SUBTEXTS
const subtexts = document.querySelectorAll(".sub-text");
subtexts.forEach(thisSubtext => {
	Intersection.subtext(thisSubtext)
})

// BODY TEXT
const bodys = document.querySelectorAll('.body-text');
bodys.forEach(thisBody => {
	Intersection.body(thisBody);
})

// LEARN
const learn = document.querySelector(".learn-text");
Intersection.learnText(learn);

// USES LIST
const list = document.querySelector(".uses-list");
const listItems = list.querySelectorAll('li');
Intersection.list(listItems)

// ALL DIAGRAMS
const diagrams = document.querySelectorAll(".diagram");
diagrams.forEach(diagram => {
	Intersection.img(diagram);

})

// EXPERIMENT TITLE
const exTitle = document.querySelector(".ex-title");
Intersection.exTitle(exTitle)

// BORDERS
const borderColumns = document.querySelectorAll(".title-column");
borderColumns.forEach(thisColumn => {
	Intersection.border(thisColumn)

})

