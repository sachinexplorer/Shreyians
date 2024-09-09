// gsap.from("#left", {
// width: 0,
// duration: 2,
// ease: Expo.easeInOut          //there is one method and timeline is another we choose timeline
// })

var tl = gsap.timeline();             // timeline :- a series of animation

gsap.set(".a", {opacity: 0, y: 10})       // set lement ki properties ko set kr deta h
gsap.set("#right img", {opacity: 0, y: 10, scale: 1.6})

tl
.from("#left", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
.from("#right", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
.to(".a", {
    delay: -2,                    // 2 sec phle hi elements show ho jayenge
    stagger: .1,                   // stagger ka mtlb h ek jese jitne bhi elements h un pr delay 1 sec ka delay
    opacity: 1,
    y: 0,
    ease: Expo.easeInOut,
    duration: 2
})
.to("#right img", {
    delay: -1,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Expo.easeInOut,
    duration: 2
})