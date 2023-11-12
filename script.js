//Loading Animation Close
document.getElementById("enter-button").addEventListener("click", function() {
  const loadingAnimation = document.getElementById("loading-animation");
  loadingAnimation.style.opacity = "0";
  setTimeout(function() {
    loadingAnimation.style.display = "none";
  }, 1000); // Hide the loading animation after 1 second

  // Show the navigation bar immediately
  document.querySelector("header").style.display = "flex";
});

//Parallax Design
let stars = document.getElementById('stars');
  let moon = document.getElementById('moon');
  let pyramids_back_dark = document.getElementById('pyramids_back_dark');
  let text = document.getElementById('text');
  let btn = document.getElementById('btn');
  let pyramids_front_dark = document.getElementById('pyramids_front_dark');
  // let header = document.querySelector('header');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.2 + 'px';
  moon.style.top = value * 1.05 + 'px';
  pyramids_back_dark.style.top = value * 1.8 + 'px'; //0.5
  pyramids_front_dark.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  // header.style.top = value * 0.5 + 'px';
})

//light-mode//
const toggleButton = document.getElementById('toggleButton');
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');



    let isLightMode = true;

    toggleButton.addEventListener('click', () => {
      isLightMode = !isLightMode;
      updateUI();
    });

    function updateUI() {
      if (isLightMode) {
        document.documentElement.classList.add('lightMode');
        stars.src = 'images/clouds.png'
        moon.src = 'images/sun.png'
        pyramids_back_dark.src = 'images/pyramids_back_light.png'
        pyramids_front_dark.src = 'images/pyramids_front_light.png'
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
      } 
      else {
        document.documentElement.classList.remove('lightMode');
        stars.src = 'images/stars.png'
        moon.src = 'images/moon.png'
        pyramids_back_dark.src = 'images/pyramids_back_dark.png'
        pyramids_front_dark.src = 'images/pyramids_front_dark.png'
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
      }
    }

// Accordian Opening
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Skills Tab Event
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Animate the Accordian Box


//projects
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;
const carouselWidth = (cards.length - 1) * (cardWidth + 90); // Account for margin-right

let scrollX = 0;

carousel.addEventListener('mousemove', (e) => {
  const offsetX = e.clientX - carousel.getBoundingClientRect().left;
  scrollX = (offsetX / window.innerWidth) * carouselWidth;
  requestAnimationFrame(updateCarouselTransform);
});

const cardButtons = document.querySelectorAll('.card-button');

cardButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    const cardText = button.querySelector('.card-title').textContent;
    console.log(`Clicked on Card ${index + 1}: ${cardText}`);
  });
});

function updateCarouselTransform() {
  carousel.style.transform = `translateX(-${scrollX}px)`;
}

//Scrolling Game Icons
const copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);