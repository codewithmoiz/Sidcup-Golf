var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var pg1 = document.querySelector("#page1");
// pg1.addEventListener("mouseenter",function(){
//     gsap.to(crsr,{
//         opacity:1,
//         scale:1,
//     })
// })
document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        top: dets.y,
        left: dets.x,
    })
    gsap.to(blur,{
        top: dets.y-150,
        left: dets.x-150,
        duration:2.3
    })
})
// pg1.addEventListener("mouseleave",function(){
//     gsap.to(crsr,{
//         opacity:0,
//         scale:0,
//     })
// })

gsap.to("nav",{
    backgroundColor:"black",
    duration: 0.5,
    height: 95,
    scrollTrigger:{
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    duration:1.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:1,
        start:"top -25%",
        end: "top -100%"
    }
})

var navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(crsr,{
            scale:3,
            backgroundColor:"transparent",
            border:"0.3px solid #fff",
            boxShadow:"none"
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(crsr,{
            scale:1,
            backgroundColor:"#95c11e",
            border:"none",
            boxShadow:"inset 1px 1px 10px #00000099",
        })
    })
})

gsap.from("#page3 #left, #page3 #center, #page3 #right",{
    y:100,
    opacity:0,
    duration:1,
    // stagger:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:5
    }
})
gsap.from("#page4 .inner",{
    scale:0.7,
    opacity:0,
    duration:1,
    // stagger:0.3,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:2
    }
})
gsap.to("#left-6 img",{
    y:70,
    x:80,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        scrub:2
    }
})
gsap.to("#right-6 img",{
    y:-70,
    x:-80,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        scrub:2
    }
})

gsap.from("#page7 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page7 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from("#pg4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#pg4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})