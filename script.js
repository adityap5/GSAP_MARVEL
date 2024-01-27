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
