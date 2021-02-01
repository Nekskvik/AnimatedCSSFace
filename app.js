//FIRST TIMELINE
let tl = gsap.timeline({defaults:{
    duration: .7,
    ease: Power2.easeOut,
    delay: 1,
    opacity: 0
}})

tl.from(".neck", {y: '100%'})
  .from(".head",{y: '-100%'}, "=<")
  .from(".beard", {y: '100%'})


// SECOND TIMELINE
let tl2 = gsap.timeline({defaults:{
    delay: 1.3,
    duration: 1.5,
}})

tl2.from(".inner-part", {opacity:0, stagger: .5})
    .from(".glasses", {opacity:0})

