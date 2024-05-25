// ek div banao or or uspr jab mouse chale toh ek div create kro or us div me overflow hidden lagao or usme se image pop uo hote hue dijhe or phir pop up hojaye foran..


// hamara mouse move jab horha hai toh bht tez chalr ha hai mtlb jahi baar chal rha hai jiski wajah se kahi baar div create hoga pr hame nhi chate ki itni zyada baar div bane toh hame div kam banana hai


// mouse jitni baar chal rha hai chale bas exexution of funtion kam baar jisse div bhi kam banenge  is concept ko ham kehte hai throttling kisi particular code ke number of exexution of kamkrdeta hai throttling ...


    // throttle fnc ke andar jo bhi code ayega woh delay me chalega jiskei wajah se exexutiobn kam hojayega

    //har bar ek div banao usko width or height do or usko aboslute banao or overfloww hidden banao or usme image ko pop up krdo..


	const throttleFunction=(func, delay)=>{
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
		if(now - prev> delay){
		prev = now;
		return func(...args);
		}
	}
	}
    
    document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
        
        var div = document.createElement("div");
        div.classList.add("imagediv");

        div.style.left  = dets.clientX + "px";
        div.style.top = dets.clientY + "px";

        var img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1690520941460-414d1d930b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80");
    
         document.body.appendChild(div);
         div.appendChild(img);

         gsap.to(img, {
            y:0,
            ease:Circ,
            duration:.5,
         })

         gsap.to(img, {
            y:"100%",
            ease:Power1.easeInOut,
            delay:0.8,
         })
         setTimeout(function(){
            div.remove();
         }, 2000)

    }, 300))
