
const loading = document.querySelector('#loading')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loading.style.opacity = 0;
        loading.style.visibility = 'hidden';

    }
}

const hamb = document.querySelector('.hamb')
const menuBg = document.querySelector('.menu_bg')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close_menu')

const menuAnchors = document.querySelectorAll('.menu_in a')

const voltarAoTopo = document.querySelector('.menu_footer')

let showingMenu = true;

function toggleMenu() {

    if(showingMenu == false) {
        showingMenu = true;

        menuBg.style.opacity = 1;
        menuBg.style.visibility = 'visible';

        menu.style.transform = 'translateY(0)';

    } else {
        showingMenu = false;

        menuBg.style.opacity = 0;
        menuBg.style.visibility = 'hidden';

        menu.style.transform = 'translateX(-100%)';
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

  setTimeout(() => {
    closeMenu.click()
  }, 350);
}

hamb.addEventListener('click', toggleMenu)
menuBg.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)


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


ScrollReveal().reveal('.specs > div', {
  duration:1400,
  delay:200,
  easing: 'ease',
  mobile: false
}); ScrollReveal().reveal('.specs > div', {
  duration:1400,
  delay:200,
  easing: 'ease',
  origin: 'bottom',
  desktop: false
});




// const formatoImg = document.querySelectorAll('.img_ctnr img');

// document.body.onscroll = function() {
    
//   let windowPosition = window.pageYOffset;

//   for(i=0;i<formatoImg.length;i++) {
//     formatoImg[i].style.transform = "translateY(" + windowPosition + "px)";
//   }

  
// }