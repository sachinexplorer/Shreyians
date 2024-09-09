GSAP - GreenSock Animation Platform //GSAP ek product h greensock company ka, gsap ke help se we can animate elements of html by js. Gsap ki cdn bhi dalni pdti h kese remix icon ki dalte h gsap cdn daldo or first site aaye us se uthalo cdn or body me paste script src ke ander

// gsap.to            - starting position to another
// gsap.from          - another position to starting
// gsap.fromTo        - from to To

// Structure - gsap.to(element, propertiesToChange)

gsap.to("#box", {
    x: 200,
    y: 200,
    backgroundColor: "orange",
    duration: 2,
    ease: Expo.easeInOut,
    onComplete: function (){            // complete hote hi hey alert show ho jayga
        alert("Hey");
    }
    // onStart: function (){            // show alert hello on starting time
        // alert("Hello");
    // }

    // onProgress: function (){         // work as a loop progress means continue
        // console.log("hey");
    // }

    // onUpdate: function (){
        // console.log("hey");
    // }
})

gsap.fromTo("#box", {
    x: 200,
    y: 200,
    backgroundColor: "orange",
    ease: Expo.easeInOut
}, {
    x: 260,
    y: 300,
    backgroundColor: "purple",
    duration: 2,
    ease: Expo.easeInOut
})