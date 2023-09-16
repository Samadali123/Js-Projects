// ek rectagle baano  and mouse center pe ho rect center pe ho, jav mouse left jana shuru ho rect bhi left jna shuru hojaye , pr jese jese mouse left jaye rect ki speed left me jate jate speed slow hojaye, 

var cursor = document.querySelector("#cursor");
var body = document.querySelector("body");
var rect = document.querySelector("#rect");

/// innerwidth mtlb woh screen jo use horhi hai width mein

window.addEventListener("mousemove", function(dets){
    var xvalue = gsap.utils.mapRange(0, window.innerWidth, 80+rect.getBoundingClientRect().width/2 , window.innerWidth-(80+rect.getBoundingClientRect().width/2), dets.clientX);
   

    gsap.to(cursor, {
        left: dets.clientX + "px",
        top: dets.clientY + "px",
        ease:Power1,
        scale:2,
        
    })


    var yvalue = gsap.utils.mapRange(0, window.innerHeight, 80+rect.getBoundingClientRect().height/2 , window.innerHeight-(80+rect.getBoundingClientRect().height/2), dets.clientY);



    var img  = this.document.querySelector("#rect img");
    var allimages  = [
        "https://images.unsplash.com/photo-1692764619881-0c41dcdbab2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
    
        "https://plus.unsplash.com/premium_photo-1692340973236-e4617a167ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
        "https://images.unsplash.com/photo-1692555331534-47b8c0061803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
        "https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
        "https://images.unsplash.com/photo-1691856630890-9270899274a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    
    
        "https://images.unsplash.com/photo-1687360440155-81bdb9ecd713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    
    
        "https://plus.unsplash.com/premium_photo-1692340973390-ed4a319f129d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    
        "https://images.unsplash.com/photo-1692423018159-1820c667b1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",


        "https://images.unsplash.com/photo-1694428275090-c8668a271519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",



    
    ]

    var index = 0;
   
    function imagechange(){
        setInterval(function(){
            img.setAttribute("src", allimages[index]);
            index++;
        } , 1000);
    }


    var a = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var c = Math.floor(Math.random() * 255)


    function bodycolorchange(){
          gsap.to(body, {
            backgroundColor :  `rgba(${a}, ${b}, ${c})`,
            ease:Power1,     
          })
    }

    gsap.to("#rect", {
         onStart: function(){
            imagechange();
            bodycolorchange();
         },

        
        left: xvalue + "px", 
        // left: dets.x + "px",
        top: yvalue + "px",
        ease:Power3,

    })
})