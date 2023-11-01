const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function shapechange(){
    var xscale = 1;
    var yscale = 1;
    var prevx = 0;
    var prevy = 0;
    document.addEventListener('mousemove',(dets)=>{
        clearTimeout(timeout);f
        var xdiff = dets.clientX - prevx
        var ydiff = dets.clientY - prevy
        if(xdiff>0){
            xscale = gsap.utils.clamp(0.4,1.2,xdiff/10)
        }
        else{
            xscale = gsap.utils.clamp(0.4,1.2,(-1)*xdiff/10)
        }
        if(ydiff>0){
            yscale = gsap.utils.clamp(0.4,1.2,ydiff/10)
        }
        else{
            yscale = gsap.utils.clamp(0.4,1.2,(-1)*ydiff/10)
        }
        let timeout = setTimeout(function(){
            document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX-4}px ,${dets.clientY-4}px) scale(1,1)`
        })
        prevx = dets.clientX
        prevy = dets.clientY    
        circlemousefollower(xscale,yscale);
    })
}
shapechange();
function firstpageanimation(){
    var tl= gsap.timeline();
    tl.from('#nav',{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:2,
            
    })
        .to('.boundingelem',{
            y:0,
            ease:Expo.easeOut,
            delay:-1,
            duration:1.5,
            stagger:.01
        })
        .to('.upperboundingelem',{
            y:0,
            ease:Expo.easeInOut,
            duration:2,
            stagger:.1,
            delay:-1.5
        })
        .from('#footer',{
            opacity:0,
            ease:Expo.easeInOut,
            duration:1.5,
            delay:-1.3
        })
}
function circlemousefollower(xscale,yscale){
    window.addEventListener('mousemove',(dets)=>{
        document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX-4}px ,${dets.clientY-4}px) scale(${xscale},${yscale})`
    })
}
circlemousefollower();
firstpageanimation();

