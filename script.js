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

function page2animation() {
    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrolltTigger:{
              trigger :".page2",
              sccroller:".main",
              start:"top 40%",
              end: "top 37%",
              markers:true,
              scrub:2
        }
    })
}

page2animation()
