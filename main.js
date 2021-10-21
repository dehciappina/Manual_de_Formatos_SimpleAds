
function touchHandler(event) {
	var touch = event.changedTouches[0];
	var simulatedEvent = new MouseEvent({
		touchstart: "mousedown",
		touchmove: "mousemove",
		touchend: "mouseup"
	}[event.type], {
		bubbles: true, cancelable: true, view: window, detail: 1,
		screenX: touch.screenX, screenY: touch.screenY, clientX: touch.clientX, clientY: touch.clientY,
		ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null
	});
	touch.target.dispatchEvent(simulatedEvent);
}
function init() {
        // I suggest you be far more specific than "document"
	document.addEventListener("touchstart", touchHandler, true);
	document.addEventListener("touchmove", touchHandler, true);
	document.addEventListener("touchend", touchHandler, true);
	document.addEventListener("touchcancel", touchHandler, true);
}

init()



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
    
      if(!window.matchMedia("(min-width: 150vh)").matches) {
      
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

if (!window.matchMedia("(min-width: 150vh)").matches) {

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
  
  if (!window.matchMedia("(min-width: 150vh)").matches) {
    showingMenu = true;
    toggleMenu()
  }
})























// LIVE INTERSCROLLER

// const ghostText = document.querySelectorAll('.ghost_text span')

// for(i=0;i<ghostText.length;i++) {
//   ghostText[i].style.width = Math.random() * (4 - 1) + 1 + 'rem'
// }

// const interscrollerPrev = document.querySelector('.interscroller_prev');
// const interscrollerAd = document.querySelector('.interscroller_prev img')

// interscrollerPrev.scrollTop = 100;
// interscrollerPrev.scrollLeft = 0;

// let pos = { top: 0, left: 0, x: 0, y: 0 };

// const mouseDownHandler = function (e) {
//     pos = {
//         // The current scroll
//         left: interscrollerPrev.scrollLeft,
//         top: interscrollerPrev.scrollTop,
//         // Get the current mouse position
//         x: e.clientX,
//         y: e.clientY,
//     };

//     interscrollerPrev.addEventListener('mousemove', mouseMoveHandler);
//     interscrollerPrev.addEventListener('mouseup', mouseUpHandler);
// };

// interscrollerPrev.addEventListener('mouseover', mouseDownHandler);


// const mouseMoveHandler = function (e) {
//     // How far the mouse has been moved
//     const dx = e.clientX - pos.x;
//     const dy = e.clientY - pos.y;

//     // Scroll the element
//     interscrollerPrev.scrollTop = pos.top - dy;
//     interscrollerPrev.scrollLeft = pos.left - dx;
// };

// const mouseUpHandler = function () {
//   document.removeEventListener('mousemove', mouseMoveHandler);
//   document.removeEventListener('mouseup', mouseUpHandler);

//   interscrollerPrev.style.cursor = 'grab';
//   interscrollerPrev.style.removeProperty('user-select');
// };









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



ScrollReveal().reveal('head', {});

ScrollReveal().reveal('main section article', {
duration:1600,
delay:100,
easing: 'ease',
mobile: false
}); ScrollReveal().reveal('main section article', {
duration:1600,
delay:100,
origin: 'bottom',
easing: 'ease',
});

ScrollReveal().reveal('.img_ctnr', {
duration:1600,
delay:200,
easing: 'ease',
distance: '1rem',
origin: 'right',
mobile: false
}); ScrollReveal().reveal('.img_ctnr', {
duration:2400,
delay:300,
easing: 'ease',
desktop: false
});
