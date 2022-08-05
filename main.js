let slides = document.querySelectorAll(".slide");
        let indicators = document.querySelectorAll(".indicator");

        //initaliser le slide a 0
        slides.forEach(slide=>{
            slide.style.display="none"
        })
        
        indicators.forEach(function(indicator){
            indicator.style.background="white"
        })

        slides[0].style.display = "block";
            indicators[0].style.background = "black";
        let index = 0
        setInterval(()=>{
            slides[index].style.display = "none";
            indicators[index].style.background = "white";
            console.log(index)
            if(index +1 >= slides.length){
                index = 0;
            }else{
                index++;
            }
            slides[index].style.display = "block";
            indicators[index].style.background = "black";
            
        },3000)
        
        document.querySelector(".right").onclick = ()=>{
            slides[index].style.display = "none";
            indicators[index].style.background = "white";
            console.log(index)
            if(index +1 >= slides.length){
                index = 0;
            }else{
                index++;
            }
            slides[index].style.display = "block";
            indicators[index].style.background = "black";
        }
        document.querySelector(".left").onclick = ()=>{
            slides[index].style.display = "none";
            indicators[index].style.background = "white";
            console.log(index)
            if(index - 1 < 0){
                index = slides.length -1;
            }else{
                index--;
            }
            slides[index].style.display = "block";
            indicators[index].style.background = "black";
        }

        console.log(slides)