
const Scroll = {

    init: () => {
        gsap.to(".box", {
            scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
            x: 500
          });
    }

}

export { Scroll }

