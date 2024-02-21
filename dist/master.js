"use strict";
// toogle spin class on icon 
let toggleSetting = document.querySelector(".togglle-settings i ");
let settingsBox = document.querySelector(".settings-box");
toggleSetting.onclick = function () {
    // toggle class for icon 
    toggleSetting.classList.toggle("fa-spin");
    settingsBox.classList.toggle("open");
    landingPage.classList.toggle("blur");
};
let landingPage = document.querySelector(".landing-page");
// get Array of imgs 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// get random number
let duration = 10000;
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // change background img ursl 
    landingPage.style.backgroundImage = `url("imgs/` + imgsArray[randomNumber] + `")`;
}, duration);
