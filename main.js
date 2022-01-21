/*Change the navbar for mobile-version depending screen 's size */

const hamburger = document.getElementById("hamburger");
const navMobileVersion = document.querySelector(".mobile-version");
const afterClickHamburger = document.getElementById("on-click-hamburger-ul");
const closeCross = document.getElementById("close-cross");


hamburger.addEventListener("click", function (e) {
  if (window.matchMedia("(max-width:799px)").matches) {
    navMobileVersion.style.display = "none";
    afterClickHamburger.style.display = "flex";
  }
});

closeCross.addEventListener("click", function (e) {
  if (window.matchMedia("(max-width:799px)").matches) {
    afterClickHamburger.style.display = "none";
    navMobileVersion.style.display = "flex";
  }
});

window.onresize = function () {
  if (window.matchMedia("(min-width:800px)").matches) {
    navMobileVersion.style.display = "none";
  } else {
    navMobileVersion.style.display = "flex";
    afterClickHamburger.style.display = "none";
  }
};

/*Change background image */

const hero = document.querySelector(".hero");
const image1 = "images/desktop-image-hero-1.jpg"; //desktop
const image2 = "images/desktop-image-hero-2.jpg"; //desktop
const image3 = "images/desktop-image-hero-3.jpg"; //desktop
const image4 = "images/mobile-image-hero-1.jpg"; //mobile
const image5 = "images/mobile-image-hero-2.jpg"; //mobile
const image6 = "images/mobile-image-hero-3.jpg"; //mobile
let backgroundImageSlide = [];

if (window.matchMedia("(min-width:800px)").matches) {
  hero.style.backgroundImage = `url(${image1})`;
  backgroundImageSlide = [image1, image2, image3];           //images depending the size of viewport
} else {
  hero.style.backgroundImage = `url(${image4})`;
  backgroundImageSlide = [image4, image5, image6];
}

window.addEventListener("resize", function (e) {
  if (window.matchMedia("(min-width:800px)").matches) {
    backgroundImageSlide = [image1, image2, image3];          //when the user resize his window change image depending the size
    hero.style.backgroundImage = `url(${image1})`;
  } else {
    backgroundImageSlide = [image4, image5, image6];
    hero.style.backgroundImage = `url(${image4})`;
  }
});

const slideArrowLeftDesktop = document.getElementById("arrow-left-desktop");
const slideArrowRightDesktop = document.getElementById("arrow-right-desktop");
let numeroImage = 0;

slideArrowLeftDesktop.addEventListener("click", function (e) {
  numeroImage--;                                                              //when press left arrow in desktop version
  numeroImage < 0 ? (numeroImage = 2) : (numeroImage = numeroImage);
  hero.style.backgroundImage = `url(${backgroundImageSlide[numeroImage]})`;
});


slideArrowRightDesktop.addEventListener("click", function (e) {
  numeroImage++;                                                              //when press right arrow in desktop version
  numeroImage > 2 ? (numeroImage = 0) : (numeroImage = numeroImage);
  hero.style.backgroundImage = `url(${backgroundImageSlide[numeroImage]})`;
});


/*Change background image hero mobile */
const slideArrowLeftMobile = document.getElementById('arrow-left-mobile');
const slideArrowRightMobile = document.getElementById('arrow-right-mobile');

slideArrowLeftMobile.addEventListener('click',function(e) {
  numeroImage--;                                                              //when press left arrow in mobile version
  numeroImage < 0 ? (numeroImage = 2) : (numeroImage = numeroImage);
  hero.style.backgroundImage = `url(${backgroundImageSlide[numeroImage]})`;
})

slideArrowRightMobile.addEventListener('click',function(e) {
  numeroImage++;                                                              //when press right arrow in mobile version
  numeroImage > 2 ? (numeroImage = 0) : (numeroImage = numeroImage);
  hero.style.backgroundImage = `url(${backgroundImageSlide[numeroImage]})`;
})

/*Change background image hero every 5 sec*/
const interval = setInterval(function(){
  numeroImage++;                                                              //change every 5 sec
  numeroImage > 2 ? (numeroImage = 0) : (numeroImage = numeroImage);
  hero.style.backgroundImage = `url(${backgroundImageSlide[numeroImage]})`;
  ;
},5000);

/*underline hover elements nav desktop*/

const liNav = document.getElementsByClassName('li-hover');

for(let i=0 ; i<liNav.length; i++) {

liNav[i].addEventListener('mouseover',function(e) {
let child = liNav[i].children;
child[1].style.display = "inline-block";

let text = liNav[i].innerText;
if(text.length == 8) {

  child[1].style.width = "20px";
  child[1].style.marginLeft = "15px";
}


})

liNav[i].addEventListener('mouseleave',function(e) {

  let child = liNav[i].children;
  child[1].style.display = "none";


  })

}