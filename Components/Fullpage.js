import fullpage from 'fullpage.js';

const FullPage = {

    init: () => {
        const myFullpage = new fullpage('#fullpage', {
            licenseKey: '6914C2F1-35334B63-83016900-FBFFA776',
            
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['home', 'whatIs', 'whatIn', 'whatCan', 'game', 'quiz'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Home', 'What is a laser?', 'What is inside a laser?', 'Where are lasers used?', 'Experiment', 'Quiz'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        
            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            bigSectionsDestination: null,
        
            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,
        
            //Design
            controlArrows: true,
            verticalCentered: true,
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
            cards: false,
            cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
        
            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',
        
            lazyLoading: true,
        
            //events
            onLeave: function(origin, destination, direction){},
            afterLoad: function(origin, destination, direction){},
            afterRender: function(){},
            afterResize: function(width, height){},
            afterReBuild: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(section, origin, destination, direction){},
            onSlideLeave: function(section, origin, destination, direction){}
        });
    }
 
}

export { FullPage }