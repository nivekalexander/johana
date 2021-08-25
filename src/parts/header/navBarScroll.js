

(function(){


    let header=document.getElementById("cabecera");
 
  
    window.addEventListener("scroll",()=>{

        let currentScroll = window.pageYOffset;

          
        if (currentScroll==0 && header) {
             
            header.style ="";
            
        } else if(header && currentScroll!=0){
             
            header.style.position="fixed";
            header.style.width="90%";
            header.style.zIndex=20;
            
        }


    


    });

    
    
})();