const facebookSwitchBts = document.querySelectorAll('#social_ads menu li')

const FBImagemSpecs = document.querySelector('#facebook_imagem_specs')
const FBVideoSpecs = document.querySelector('#facebook_video_specs')
const FBCarosselSpecs = document.querySelector('#facebook_carrossel_specs')

let showingFBImageSpecs = true;
let showingFBVideoSpecs = false;
let showingFBCarrosselSpecs = false;

function checkFBSwitch(e) {
    
    if(e.target.classList.contains('facebook_imagem_bt')) {
        showingFBImageSpecs = true;
        showingFBVideoSpecs = false;
        showingFBCarrosselSpecs = false;

        FBVideoSpecs.classList.remove('switched')
        FBCarosselSpecs.classList.remove('switched')

        setTimeout(() => {
            FBImagemSpecs.classList.add('switched')
        }, 150);

        for (i=0;i<facebookSwitchBts.length;i++) {
            facebookSwitchBts[i].classList.remove('active_type')
        }

            e.target.classList.add('active_type')

    } else if(e.target.classList.contains('facebook_video_bt')) {
        showingFBImageSpecs = false;
        showingFBVideoSpecs = true;
        showingFBCarrosselSpecs = false;

        FBImagemSpecs.classList.remove('switched')
        FBCarosselSpecs.classList.remove('switched')

        setTimeout(() => {
            FBVideoSpecs.classList.add('switched')
        }, 150);

        for (i=0;i<facebookSwitchBts.length;i++) {
            facebookSwitchBts[i].classList.remove('active_type')
        }
        
        e.target.classList.add('active_type')

    } else if(e.target.classList.contains('facebook_carrossel_bt')) {
        showingFBImageSpecs = false;
        showingFBVideoSpecs = false;
        showingFBCarrosselSpecs = true;

        FBImagemSpecs.classList.remove('switched')
        FBVideoSpecs.classList.remove('switched')

        setTimeout(() => {
            FBCarosselSpecs.classList.add('switched')
            
        }, 150);

        for (i=0;i<facebookSwitchBts.length;i++) {
            facebookSwitchBts[i].classList.remove('active_type')
        }
        
        e.target.classList.add('active_type')
        
    }
}

for (i=0;i<facebookSwitchBts.length;i++) {
    facebookSwitchBts[i].addEventListener('click', checkFBSwitch)
}