import anime from 'animejs';

const Intersection = {

    options: {
        root: null,
        threshold: 1
    },

    particles: () => {
        const experiment = document.querySelector(".smart-section");

        const options = {
            root: null,
            threshold: 1
        }
        
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    experiment.querySelector(".particles-bg").classList.remove("darken")
                } else {
                    console.log(entry.target);
                    experiment.querySelector(".particles-bg").classList.add("darken");
                }
            });
        }, options);
        
        observer.observe(experiment)
    },

    title: (thisTitle) => {

        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    thisTitle.classList.remove('is-animating-title');
                } else {
                    thisTitle.classList.add("is-animating-title");
                    observer.unobserve(thisTitle);
                }
            });
        }, Intersection.options);

        observer.observe(thisTitle)

    },

    subtext: (thisSubtext) => {
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    thisSubtext.classList.add('is-animating-subtext');
                    
                    observer.unobserve(thisSubtext);
                }
            });
        }, Intersection.options);

        observer.observe(thisSubtext)
    },

    learnText: (learn) => {
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    learn.classList.add('is-animating-learn');
                    
                    observer.unobserve(learn);
                }
            });
        }, Intersection.options);

        observer.observe(learn)
    },

    body: (thisBody) => {
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    thisBody.classList.add('is-animating-body');
                    
                    observer.unobserve(thisBody);
                }
            });
        }, Intersection.options);

        observer.observe(thisBody)
    },

    list: (listItems) => {
        const listSect = document.querySelector(".uses-list");
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    console.log(listItems)
                    anime({
                        targets: listItems,
                        opacity: 1,
                        translateX: '0vw',
                        delay: anime.stagger(500)
                    })
                    
                    observer.unobserve(listSect);
                }
            });
        }, Intersection.options);

        observer.observe(listSect)
    },

    exTitle: (thisTitle) => {
        const underline = document.querySelector(".ex-underline");
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    thisTitle.classList.add("is-animating-ex-title")
                    underline.classList.add("is-animating-ex-underline")
                    observer.unobserve(thisTitle);
                }
            });
        }, Intersection.options);

        observer.observe(thisTitle)
    },

    img: (thisImg) => {
        const observer = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    thisImg.classList.add('is-animating-img');
                    observer.unobserve(thisImg);
                }
            });
        }, Intersection.options);

        observer.observe(thisImg)
    },
}

export { Intersection }


