"use strict";
// check if thers local stroage color 
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
    document.documentElement.style.setProperty( "--main-color", localStorage.getItem( "color_option" ) );
    document.querySelectorAll( ".colors-list li" ).forEach( li => {
        li.classList.remove("active")
        li.addEventListener( "click", function ( e ) {
            document.querySelectorAll( ".colors-list li" ).forEach( li => {
                li.classList.remove("active")
            })
            e.target.classList.add( "active" )
            
        })
        if ( li.dataset.color === mainColors ) {
            li.classList.add("active")
        }
    })
}
// toogle spin class on icon 
let toggleSetting = document.querySelector(".togglle-settings i ");
let settingsBox = document.querySelector(".settings-box");
toggleSetting.onclick = function () {
    // toggle class for icon 
    toggleSetting.classList.toggle("fa-spin");
    settingsBox.classList.toggle("open");
};
// switch color 
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        else {
            // set color on root 
            const co = e.target.dataset.color;
            document.documentElement.style.setProperty("--main-color", co);
            localStorage.setItem("color_option", co);
        }
    });
} );

// switch random background option;
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
randomBackEl.forEach(span => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll( ".active" ).forEach( el => {
            el.classList.remove("active")
        } )
        e.target.classList.add("active")
    });
});
// select landing page element 
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
