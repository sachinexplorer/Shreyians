function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),     // ctrl+D se same name ke jitne bhi elements h unko select kr lega jitne krne h utni baar dbaye jao ctrl+D
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}                         // ye locomotive codepan se copy kiya hua h
init()


var menu = document.querySelector("#nav-prt2 i")
var full = document.querySelector("#full-scr-nav")

var flag = 0;
menu.addEventListener("click",function(){

    if(flag == 0){
        full.style.top = "0%"
        document.querySelector("#nav h2").style.color = "#222"
        document.querySelector("#nav h3").style.color = "#222"
        document.querySelector("#nav i").style.color = "#222"
        flag = 1
    }else{
        full.style.top = "-100vh"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flag = 0
    }
})

gsap.to("#page5-content img",{
    rotate:360,
    repeat:-1,   // -1 dene se infinite times ghumta rhega element
    duration:2,
    ease: Power0.easeNone   // linearly yani ek jesa ghumta rhega bina delay ke
})

var tl = gsap.timeline()
tl.from("page1 h1",{
    y:100,
    duration:0.6,
    opacity:0
})
.from("page1 h2",{
    y:50,
    duration:0.5,
    opacity:0,
    delay:"-0.2"
})

gsap.to("#page2 img",{
    scale:0.99,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:3 
    }
})

gsap.to("page2 h1",{
    rotateX:"270deg",
    opacity:1,
    scrollTrigger:{
        trigger:"#h11",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})

// gsap.to("#page2 h1",{
//     rotateX:0,
//     scrollTrigger:{
//         trigger:"#page1 h1",        another animation of page2 h1
//         scroller:"body",
//         markers:true,
//         start:"top 58%",
//         end:"top 50%",
//         scrub:2
//     }
// })

var slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1")
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(-100%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})

// Nodelist :- nodelist bhi like array ki list ki trh hota h element 2 form me likha jata h ek array or ek nodelist
var slide2h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1")
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(0%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})

document.querySelector("#element1").addEventListener("mousemove",function(dets){
    document.querySelector("#element1 img").style.opacity = 1
    document.querySelector("#element1 img").style.left = `${dets.x - 230}px`
    document.querySelector("#element1 img").style.top = `${dets.y - 530}px`
})

document.querySelector("#element2").addEventListener("mousemove",function(dets){
    document.querySelector("#element2 img").style.opacity = 1
    document.querySelector("#element2 img").style.left = `${dets.x - 230}px`
    document.querySelector("#element2 img").style.top = `${dets.y - 530}px`
})

document.querySelector("#element1").addEventListener("mouseleave",function(dets){
    document.querySelector("#element1 img").style.opacity = 0
})

document.querySelector("#element2").addEventListener("mouseleave",function(dets){
    document.querySelector("#element2 img").style.opacity = 0
})

