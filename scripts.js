const container1 = document.querySelector(".container1")

 const myObserve = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
         
        }else {
            entry.target.classList.remove("show")
        }
    })

 })

 const elements = document.querySelectorAll(".hidden")
 

 elements.forEach((element) => myObserve.observe(element))