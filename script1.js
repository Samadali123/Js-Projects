// make a rectangle and when me move a mouse on that rectagle the left side we want to gradually change the color of that rectagle to red and when we move mouse to the right side we want to chage the color blue


// sabse pehle yeh pata kro ki mouse rectangle pe aya yah nhi

// uske baad yeh pata kro ki center se kitne  left pr hai yah right pe

// ab yeh calclutae kro ki ham center se kitna left pr hai  utni intensity se color change kro same to the rightm 


// exact center pe koi bhi color show nhi ho ,
// color rgb(255, 255, 255)
// uske ke liye map krna hoga


var rect = document.querySelector("#main #rect");
rect.addEventListener("mousemove", function(dets){
     rectlocation = rect.getBoundingClientRect();
     insiderect = dets.clientX - rectlocation.left;

     if(insiderect< rectlocation.width/2){

         redcolor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, insiderect);
        

          gsap.to(rect, {
            backgroundColor :  `rgb(${redcolor}, 0, 0)`,
            ease: Power3,
            duration:1,

          })
        
        
     }

     else{
        bluecolor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255,  insiderect);
        
        gsap.to(rect, {
          backgroundColor :   `rgb(0,0,${bluecolor})`,
          ease: Power3,
          duration:1,

        })

     

     }

})



rect.addEventListener("mouseleave", function(){
    
    gsap.to(rect, {
        backgroundColor : "white",
        ease:Power4,
     
    })
})