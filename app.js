
//PROJEKTER
const projekt = document.querySelector('.projekter');
const socialMedia = document.querySelector('.card__socialmedie');
const projektStyring = document.querySelector('.card__projektstyring');
const multiplayerGame = document.querySelector('.card__multiplayerspil');
const skoleAPI = document.querySelector('.card__skoleapi')
const softwareJobs = document.querySelector('.card__software');
const studentJobs = document.querySelector('.card__student');

//SIDER
const omkringSide = document.getElementById('omkringSide');
const projektSide = document.getElementById('projektSide');
const kontaktSide = document.getElementById('kontaktSide');


omkringSide.addEventListener('click', () => {
document.getElementById('about-sektion').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})

$(window).on("load",function(){
    function ahref(){
          $(".loader-wrapper").fadeOut("slow");
    $("header").removeClass("loading");
    };
    setTimeout(function(){ ahref(); }, 3000); 
});

projektSide.addEventListener('click', () => {
    document.getElementById('projekt-sektion').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})

document.getElementById('main-btn').addEventListener('click', () => {
    document.getElementById('projekt-sektion').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})

kontaktSide.addEventListener('click', () => {
    document.getElementById('kontakt-sektion').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})


    
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu-hidden');
const main = document.querySelector('.main-content');
const header = document.querySelector('.header-container');

hamburgerIcon.addEventListener('click', () => {
mobileMenu.classList.toggle('mobile-active');
hamburgerIcon.classList.toggle('hamburger-active')
main.classList.toggle('active-main');
header.classList.toggle('active-main');
})


var lastScrollTop;
navbar = document.querySelector('header');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-100px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});



    socialMedia.addEventListener('click', () => {
    socialMedia.classList.toggle('is-flipped');
    })

    multiplayerGame.addEventListener('click', () => {
    multiplayerGame.classList.toggle('is-flipped');
    })
    projektStyring.addEventListener('click', () => {
    projektStyring.classList.toggle('is-flipped');
    })


    softwareJobs.addEventListener('click', () => {
        softwareJobs.classList.toggle('is-flipped');
    })
    
    studentJobs.addEventListener('click', () => {
        studentJobs.classList.toggle('is-flipped');
    })
    
    skoleAPI.addEventListener('click', () => {
        skoleAPI.classList.toggle('is-flipped');
    })





$(document).ready(function () {
$('.nav-hamburger').click(function(){
$('.nav-list').toggleClass('active-nav');    
})
})


$(document).ready(function () {
$('.submit').click(function (event) {
console.log("click");

const navn = $('#navn').val()
const email = $('#email').val()
const tekst = $('#tekst').val()
$('.status').empty();

if(email.length > 5 && email.includes('@') && email.includes('.')){

}
else{
    $('.status').append('<p>Fejl</p>');
    $('.status').addClass('fejl');
    event.preventDefault();

}
if(navn.length > 2){

} else{
    $('.status').append('<p> Navnet er ikke gyldigt</p>')
    $('.status').addClass('fejl');
    event.preventDefault();
}

if(tekst.length > 6){
    $('.status').append('<p>Bedsked er sendt</p>')
    $('.status').addClass('success');
}
else{
    $('.status').append('<p> Teksten er for lille at sende</p>')
    $('.status').addClass('fejl');
    event.preventDefault();

}

})
})


const softwareJobsBtn = document.getElementById('softwareJobsDemo');
const softwareJobsModal = document.querySelector('#softwareJobsModal');
const softwareJobsClose = document.querySelector('#softwareJobsClose');

softwareJobsClose.addEventListener('click', () => {
softwareJobsModal.classList.remove('bg-active');
})

softwareJobsBtn.addEventListener('click', function(){
softwareJobsModal.classList.add('bg-active');
});




const studentJobsBtn = document.getElementById('studentJobsDemo');
const studentJobsModal = document.querySelector('#studentJobsModal');
const studentJobsClose = document.querySelector('#studentJobsClose');

studentJobsClose.addEventListener('click', () => {
studentJobsModal.classList.remove('bg-active');
})

studentJobsBtn.addEventListener('click', function(){
studentJobsModal.classList.add('bg-active');
});




const multiplayerGameBtn = document.getElementById('multiplayerGameDemo');
const multiplayerGameModal = document.querySelector('#multiplayerGameModal');
const multiplayerGameClose = document.querySelector('#multiplayerGameClose');

multiplayerGameClose.addEventListener('click', () => {
multiplayerGameModal.classList.remove('bg-active');
})

multiplayerGameBtn.addEventListener('click', function(){
multiplayerGameModal.classList.add('bg-active');
});



const socialMediaBtn = document.getElementById('socialMediaDemo');
const socialMediaModal = document.querySelector('#socialMediaModal');
const socialMediaClose = document.querySelector('#socialMediaClose');

socialMediaClose.addEventListener('click', () => {
socialMediaModal.classList.remove('bg-active');
})

socialMediaBtn.addEventListener('click', function(){
socialMediaModal.classList.add('bg-active');
});


const projektStyringBtn = document.getElementById('projektStyringDemo');
const projektStyringModal = document.querySelector('#projektStyringModal');
const projektStyringClose = document.querySelector('#projektStyringClose');

projektStyringClose.addEventListener('click', () => {
projektStyringModal.classList.remove('bg-active');
})

projektStyringBtn.addEventListener('click', function(){
projektStyringModal.classList.add('bg-active');
});





//SLUT MED MODAL




