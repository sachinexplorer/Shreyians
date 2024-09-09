gsap.from("#page1 #box",{
    scale:2,
    opacity:0,
    duration:1,
    delay:1
})
gsap.from("#page2 #box",{
    scale:2,
    rotate:360,
    opacity:0,
    duration:1,
    scrolltrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // markers:true,               // is se show hoga ki scroll trigger kha point ho rha h
        start:"top 40%"             // kha se start krna h
        end:"top 10%",
        scrub:2                  // scrub means jb bhi page uper niche ho to uske hisab se animation chlti rhe
        pin:true                // pin ho jaygi animation jb tk second page pe na jaye
    }
})

 //scrollTrigger - trigger ka mtlb kisi point pe koi particular chiz execute ho jaye or scrolltrigger mtlb jb koi site move kre to animation chle next page scroll krte hi, it's a javascript lib or ye bhi gsap cdn uthayi thi vhi se hi milegi iski link bhi
 gsap.from("#page3 #box",{
    scale:0.5,
    opacity:0,
    duration:1,
    scrolltrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true
    }
})