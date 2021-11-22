
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

        
        if (window.location.href.indexOf("#") > -1) {
            
            if (window.location.href.indexOf("video_vertical") > -1) {
                document.querySelector('#Interscroller_video_vertical').click()
            } else if(window.location.href.indexOf("video_e_bg") > -1) {
                document.querySelector('#Interscroller_video_bg').click()
            } else if(window.location.href.indexOf("social_video") > -1) {
                document.querySelector('#instagram_feed_video').click()
                document.querySelector('#facebook_feed_video').click()
                document.querySelector('#instagram_stories_video').click()
                document.querySelector('#facebook_stories_video').click()
            }
            
        } 
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
let showingProgramaticaClicktagWindow = false;

const menu = document.querySelector('.menu')
const specsWindow = document.querySelector('.specs')
const clicktagRMWindow = document.querySelector('.excroll_clicktag_section')
const clicktagProgramaticaWindow = document.querySelector('.midia_programatica_clicktag_section')

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

    } else if (showingProgramaticaClicktagWindow == true) {
      showingProgramaticaClicktagWindow = false;
      clicktagProgramaticaWindow.style.transform = 'translateX(-100%)'

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

function toggleProgramaticaClicktag() {
  
  if(showingProgramaticaClicktagWindow == false) {
    showingProgramaticaClicktagWindow = true;

    clicktagProgramaticaWindow.style.transform = 'translateX(0)'

    menuBg.style.opacity = 1;
    menuBg.style.visibility = 'visible';
  } else {
    showingProgramaticaClicktagWindow = false;

    clicktagProgramaticaWindow.style.transform = 'translateX(-100%)'

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
  voltarAoTopo.addEventListener('click', function() {
    showingMenu = true;
    toggleMenu()
  })
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
  } else if(showingProgramaticaClicktagWindow == true) {
    toggleProgramaticaClicktag()
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


const clicktagProgramaticaBt = document.querySelectorAll('.clicktag_programatica_bt')

for(i=0;i<clicktagProgramaticaBt.length;i++) {
  clicktagProgramaticaBt[i].addEventListener('click', toggleProgramaticaClicktag)
}



const homeBt = document.querySelector('#home')

homeBt.addEventListener('click', function() {
  showingSpecs = true;
  showingRMClicktag = true;
  showingProgramaticaClicktagWindow = true;

  togglespecs()
  toggleClickTagRM()
  toggleProgramaticaClicktag()
  
  if (!window.matchMedia("(min-width: 150vh)").matches) {
    showingMenu = true;
    toggleMenu()
  }
})












// SHARE BUTTON

const shareButton = document.querySelectorAll('.sharebt')

let shareTitle;
let shareUrl;

for(i=0;i<shareButton.length;i++) {
  shareButton[i].addEventListener('click', function() {
  
    shareTitle = this.getAttribute('data-title');
    shareUrl = this.getAttribute('data-url');
  
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareUrl
      }).then(() => {
        return;
      })
      .catch(console.error);
    }
  }
  );
}

















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
desktop: false
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
delay:100,
easing: 'ease',
desktop: false
});










