window.addEventListener("load",run,false);

function run() {

  var isFirefox = typeof InstallTrigger !== 'undefined';


function toggle () {  
    const header = document.querySelector('.header');
    const burger = document.querySelector('.button');
    const sous = document.querySelector('.sous');
    const body = document.querySelector('body');
    burger.addEventListener('click', (e) => {    
      header.classList.toggle('show');
      body.classList.toggle('block');
    });
  }
  toggle();


  function Contact() {
    var isFirefox = typeof InstallTrigger !== 'undefined';
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const form = document.querySelector('.contact-form');
    const cross = document.querySelector('.crossc');
    const contact = document.querySelector('.contact');
    contact.addEventListener('click', (e) => {    
      header.classList.add('contactiv');
      form.style.transition='all 1s';
      body.setAttribute('style', 'overflow-y: hidden !important');
      e.stopPropagation();
    });   
    cross.addEventListener('click', (e) => {    
      header.classList.remove('contactiv');
      form.style.transition='all 0.2s';
      if(isFirefox == true){
        body.style.overflowY='auto';
    }
    else{
        body.style.overflowY='overlay';
    }
      e.stopPropagation();
    });  
  }
  Contact();


}