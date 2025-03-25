// GSAP Timeline for loader animations
const tl = gsap.timeline();

// Animate the h1 elements with stagger
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
});

// Animate the line1 and h2 elements with opacity
tl.from("#line1, .line h2", {
    opacity: 0,
    onStart: function() {
        const timer = document.querySelector("#line1 h5");
        let grow = 0;

        // Use requestAnimationFrame for smoother performance
        const updateTimer = () => {
            if (grow < 100) {
                timer.innerHTML = grow++;
                requestAnimationFrame(updateTimer);
            } else {
                timer.innerHTML = grow;
            }
        };
        updateTimer();
    },
});

// Fade out the loader after some delay
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
});

tl.from("#page1",{
    y:1600,
    opacity:0,
    delay :0.2,
    ease:Power4

})


