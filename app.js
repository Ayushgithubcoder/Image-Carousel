/**
 * Write your challenge solution here
 */
// Image data

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];
const addImg=document.querySelector("#carouselTrack")
const prevButton=document.querySelector("#prevButton")
const nextButton=document.querySelector("#nextButton")
const caption=document.querySelector("#caption")
const autoPlayButton=document.querySelector("#autoPlayButton")
const timerDisplay=document.querySelector("#timerDisplay")




// Adding img and next prev functionality

const newImg=document.createElement("img")
const captionAdding=document.createElement("p")
let count = 0

newImg.src=images[count].url
newImg.classList.add("carousel-slide")
newImg.classList.add("carousel-track")
captionAdding.textContent=images[count].caption
addImg.append(newImg)
caption.append(captionAdding)

function nextButtonFn(){
  if(count>=0 && count<3){
    // console.log(count);
    count++
    // console.log(count);
    newImg.src=`${(images[count]).url}`
    captionAdding.textContent=`${(images[count]).caption}`
  }
  else if(count>=3){
    // console.log(count);
    count=0
    // console.log(count);
    newImg.src=`${(images[count]).url}`
    captionAdding.textContent=`${(images[count]).caption}`
  }
  
  
}
function prevButtonFn(){
  if(count>0 && count<=3){
    console.log(count);
    count--
    console.log(count);
    newImg.src=`${(images[count]).url}`
    captionAdding.textContent=`${(images[count]).caption}`
  }
  else if(count<=0){
    console.log(count);
    count=3
    console.log(count);
    newImg.src=`${(images[count]).url}`
    captionAdding.textContent=`${(images[count]).caption}`
    
  }
}
let countdown=5
function timer(){
  // console.log(countdown)
  setInterval(()=>{
    if(countdown>=0){
    timerDisplay.textContent=`Next Slide in ${countdown}s`
    countdown--
  }else{
    countdown=5
  }
  },1000)

}


let intervalID=null
function autoPlay(){
  if(intervalID){
    clearInterval(intervalID);
    intervalID=null
    autoPlayButton.textContent=`Start Auto Play`
    countdown=5
    // console.log(timerDisplay.textContent);
    timerDisplay.textContent=``
    // console.log(timerDisplay.textContent);
    
  }else{

    timer()
    intervalID=setInterval(()=>{
      nextButtonFn()
      timer()
    },6000)
    autoPlayButton.textContent=`Stop Auto Play`}
}

nextButton.addEventListener("click",nextButtonFn)
prevButton.addEventListener("click",prevButtonFn)
autoPlayButton.addEventListener("click",autoPlay)// Autoplay button




























