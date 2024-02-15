let Slider= async()>{
    let Slider=""
    let data=await fetch("http://localhost:3004/slider")
    let res=await data.json()
    res.forEach(element => {
        Slider+=`<div class="swiper-slide"><div class="asli"> 
        <div class="up"><img src=${element.img} alt=${element.alt}></div>`
        
    });
    document.querySelector("div.swiper-wrapper").innerHTML=Slider
    

}
export default Slider;
