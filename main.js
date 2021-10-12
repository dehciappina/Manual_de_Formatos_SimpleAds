
const loading = document.querySelector('#loading')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loading.style.opacity = 0;
        loading.style.visibility = 'hidden';

    }
}

const hamb = document.querySelector('.hamb')
const menuBg = document.querySelector('.menu_bg')
const closeMenu = document.querySelector('.close_menu')

const menuAnchors = document.querySelectorAll('.collapsible_content a')

const voltarAoTopo = document.querySelector('.menu_footer')

let showingMenu = false;
let showingSpecs = false;
let showingRMClicktag = false;

const menu = document.querySelector('.menu')
const specsWindow = document.querySelector('.specs')
const clicktagRMWindow = document.querySelector('.excroll_clicktag_section')

function toggleMenu() {
    if(showingMenu == false && showingSpecs == false) {
        showingMenu = true;

        menuBg.style.opacity = 1;
        menuBg.style.visibility = 'visible';

        menu.style.transform = 'translateY(0)';

    } else if (showingMenu == false && showingSpecs == true) {
      showingMenu = true;

      menuBg.style.opacity = 1;
      menuBg.style.visibility = 'visible';

      menu.style.transform = 'translateY(0)';

      showingSpecs = false;
      specsWindow.style.transform = 'translateX(-100%)'

    } else {
      showingMenu = false;

      menuBg.style.opacity = 0;
      menuBg.style.visibility = 'hidden';

      menu.style.transform = 'translateX(-100%)';
  }
}

function togglespecs() {
  if(showingSpecs == false && showingMenu == false) {

    showingSpecs = true;
    specsWindow.style.transform = 'translateX(0)'

    menuBg.style.opacity = 1;
    menuBg.style.visibility = 'visible';
    
    showingRMClicktag = false;
    clicktagRMWindow.style.transform = 'translateX(-100%)'

  } else if(showingSpecs == false && showingMenu == true) {
    showingSpecs = true;
    specsWindow.style.transform = 'translateX(0)'

    menuBg.style.opacity = 1;
    menuBg.style.visibility = 'visible';
    
      if(!window.matchMedia("(min-width: 138vh)").matches) {
      
        showingMenu = false;
        menu.style.transform = 'translateX(-100%)';
      }
      
      showingRMClicktag = false;
      clicktagRMWindow.style.transform = 'translateX(-100%)'

  } else {

    showingSpecs = false;
    specsWindow.style.transform = 'translateX(-100%)'
  
    menuBg.style.opacity = 0;
    menuBg.style.visibility = 'hidden';

  }
}

function toggleClickTagRM() {
  
  if(showingRMClicktag == false) {
    showingRMClicktag = true;

    clicktagRMWindow.style.transform = 'translateX(0)'

    menuBg.style.opacity = 1;
    menuBg.style.visibility = 'visible';
  } else {
    showingRMClicktag = false;

    clicktagRMWindow.style.transform = 'translateX(-100%)'

    menuBg.style.opacity = 0;
    menuBg.style.visibility = 'hidden';
  }

}

if (!window.matchMedia("(min-width: 138vh)").matches) {

  for(i = 0; i < menuAnchors.length; i++) {
    menuAnchors[i].addEventListener('click', function() {
      setTimeout(() => {
        toggleMenu()
      }, 50);
    })
  }
  voltarAoTopo.addEventListener('click', toggleMenu)
}

hamb.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)






menuBg.addEventListener('click', function() {
  if(showingSpecs == true) {
    togglespecs()
  } else if(showingMenu == true) {
    toggleMenu()
  } else if (showingRMClicktag == true) {
    toggleClickTagRM()
  }
})













const clicktagRMBt = document.querySelectorAll('.clicktag_RM_bt')

for(i=0;i<clicktagRMBt.length;i++) {
  clicktagRMBt[i].addEventListener('click', toggleClickTagRM)
}



const specsBt = document.querySelectorAll('.specs_bt')

for(i=0;i<specsBt.length;i++) {
  specsBt[i].addEventListener('click', togglespecs)
}



const homeBt = document.querySelector('#home')

homeBt.addEventListener('click', function() {
  showingSpecs = true;
  showingRMClicktag = true;

  togglespecs()
  toggleClickTagRM()

  
  if (!window.matchMedia("(min-width: 138vh)").matches) {
    showingMenu = true;
    toggleMenu()
  }
})















var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight){

      content.style.maxHeight = null;
      content.style.marginBottom = 0;

    } else {

      content.style.maxHeight = content.scrollHeight + "px";
      content.style.marginBottom = '1rem';

    }
  });
}











let clickeds = document.querySelectorAll('.clicked')

setTimeout(() => {
  for(i = 0; i < clickeds.length; i++) {
      clickeds[i].click()
  }
}, 300);









ScrollReveal().reveal('main section article', {
duration:1600,
delay:10,
easing: 'ease',
mobile: false
}); ScrollReveal().reveal('main section article', {
duration:1600,
delay:10,
origin: 'bottom',
easing: 'ease',
});

ScrollReveal().reveal('.img_ctnr', {
duration:1600,
delay:250,
easing: 'ease',
distance: '1rem',
origin: 'right',
mobile: false
}); ScrollReveal().reveal('.img_ctnr', {
duration:2400,
delay:100,
easing: 'ease',
desktop: false
});
