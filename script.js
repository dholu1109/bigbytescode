let tl = gsap.timeline();

tl.from(".nav h2",{
    y: -30,
    duration: 1,
    delay: 0.3,
    opacity: 0
})

gsap.to(".nav h2 span",{
    color:"#8b49a3",
    duration:2,
    delay:1
})

tl.from("h4",{
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})

tl.from("h1",{
    y: 20,
    duration: 1,
    opacity:0,
    stagger: 0.3,
    scale: 0
})

tl.to("#vio",{
    color: "red",
    duration: 0.5,
    stagger: 0.3
})

