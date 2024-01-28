function cursoreffect(){
    var page1content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

page1content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1content.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
page1content.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
}
cursoreffect()

function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
     
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locoscroll()

function page2Animation() {
    gsap.from(".elems h1",{
        y: 120,
       
        opacity:0,
        stagger: 0.25,
        duration: 2,
        scrollTrigger: {
              trigger : ".page2",
              scroller: ".main",
              start: "top 40%",
              end: "top 44%",
            //   markers:true,
              scrub: 2
        }
    })
    
}
page2Animation()

function page2topAnimation() {
    gsap.from(".page2-top h3,h4 ",{
        y:120,
        opacity:0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
              trigger : ".page2",
              scroller: ".main",
              start: "top 70%",
              end: "top 60%",
            //   markers:true,
              scrub: 2
        }
    })
    
}
page2topAnimation()

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
sliderAnimation() 

var tl = gsap.timeline()

tl.from(".loader h3",{
  x:20,
  opacity:0,
  duration: .5,
  stagger:0.2,
})
tl.to(".loader h3",{
  x:-20,
  opacity:0,
  duration: .5,
  stagger:0.1,
})
tl.to(".loader",{
  opacity:0
})
tl.to(".loader",{
  display: "none"
})
// tl.from(".nav-middle ul li",{
//   y:-80,
//   stagger:0.1,

// })
tl.from(".page1 .text h1",{
  y:680,
  stagger:0.1,
 duration:0.5
})