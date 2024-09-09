function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            markers: true,
            pin: true,
            end: "bottom -250%"  // for slow down timeline search on google slow timeline gsap code then copy from green sock find perfect code
        }                        // bottom -250% ka mtlb end yani niche se uper 0 tk to phoch jayga lekin negative value me uper tk phochne me or time lgega
    })
    
    tl
    .to("#circle #btm img", {
        scale: 1,
        rotate: "-180deg",
        duration: 1,
        stagger: .1,            // hr agle element me thoda sa delay aa jata h
        ease: Power1
    }, "hello")           // hello is a flag jo kaam aata h jis me bhi same likh denge kuch bhi likhdo chahe hii pyy jis element bhi likhoge uski prop same tme pe kaam kregi
    .to("#circle #top img", {
        scale: 1,
        duration: 1,
        stagger: .1,            // hr agle element me thoda sa delay aa jata h
        ease: Power1
    }, "hello")      
    .to("#cimage img", {
        scale: "0",
        duration: 1,
        stagger: .1,
        ease: Power1
    }, "hello") 
    .to("#centerimg h5", {
        opacity: 0,
        stagger: .1,
        ease: Power1
    }, "hello") 
    .to("#circle", {
        scale:.6,
        ease: Power1
    }, "hello") 
    .to("#overlay>h1#gallery", {
        bottom: "-50%",
        ease: Power1
    }, "hello") 
    .to("#gola", {
        top: "50%",
        scale: 2,
        ease: Power1
    }, "hello") 
    .to("#gola", {
        opacity: 0,
        duration: 2.2,
        ease: Power1
    }, "hello2") 
    .to("#smcircle", {
        scale: 0,
        duration: 2,
        ease: Power1
    }, "hello2") 
    .to("#circle", {
        scale: 0,
        duration: 2,
        ease: Power1
    }, "hello2") 
    .to("#overlay>h1#pf", {
        rotate: 0,
        bottom:"10%",
        ease: Power1
    }, "hello2") 
    .to("#pinkpart", {
        top: 0,
        duration: 5,
        ease: Power1
    }, "hello2") 
    .to("#pinkpart", {
        top: "-30%",
        duration: 3,
        ease: Power1
    }) 
    .to("#pinkpart", {
        top: "-30%",
        duration: 3,
        ease: Power1
    }) 
}

function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
        trigger: "#second",
        scrub: 1,
        start: "top top",
        end: "bottom -150%",
        pin: true
    }
})
        
    tl2
    .to(".circle", {
        top: "50%",
        stagger: .1,
        ease: Power1
    })
    .to(".circle", {
        left: "50%",
        stagger: .1,
        ease: Power1
    }) 
    .to(".pink", {
        scale: 10,
        stagger: .1,
        ease: Power1
    })
    .to(".pink", {
        background: "linear-gradient(to right, #d5a7b4, #B4AAD5)",
        ease: Power1
    })
    .to("#stop h1", {
        left: "-200%",
        duration: 8,
        ease: Power1
    }, "a")
    .to("#sbtm #two", {
        opacity: 0,
        duration: 3,
        ease: Power1
    }, "a")
    .to("#sbtm #one", {
        opacity: 1,
        delay: 1,
        duration: 3,
        ease: Power1
    }, "a")
}

timelineOne();   // call the function
timelineTwo();   // call function 2nd