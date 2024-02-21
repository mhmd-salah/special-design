// check if thers local stroage color 
let mainColors = localStorage.getItem("color_option")

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", localStorage.getItem("color_option"))
}

// toogle spin class on icon 
let toggleSetting = document.querySelector(".togglle-settings i ") as HTMLElement;
let settingsBox = document.querySelector(".settings-box") as HTMLDivElement;
toggleSetting.onclick = function () {
  // toggle class for icon 
  toggleSetting.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open")
}

// switch color 
const colorsLi = document.querySelectorAll(".colors-list li") ;
colorsLi.forEach(li => {
  li.addEventListener("click", (e) => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      } else {
        // set color on root 
        const co:any = e.target.dataset.color
        document.documentElement.style.setProperty("--main-color", co);
        localStorage.setItem("color_option", co)
      }
  })
})



// select landing page element 
let landingPage = document.querySelector(".landing-page") as HTMLElement;
// get Array of imgs 
let imgsArray: string[] = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// get random number

let duration:number = 10000;

setInterval(()=>{
  let randomNumber:number = Math.floor(Math.random() * imgsArray.length);
  // change background img ursl 
landingPage.style.backgroundImage = `url("imgs/` + imgsArray[randomNumber] + `")`;

}, duration);

