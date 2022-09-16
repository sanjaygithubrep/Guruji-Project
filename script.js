const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`
    }
)
const goPrev = () =>{
    counter--
    slideImage()
}

const goNext = () =>{
    counter++
    
    slideImage()
    
}
const slideImage = () => {
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}