const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h3');

const section  = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 3000,
    trigger: intro,
    triggerHook: 0.1
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);


let accelamount = 0.4;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos/1000;
});

setInterval(() =>{
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 120);


const form = document.querySelector('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());

  const googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf_5GAriXmifwwElv99c2BSIYizkB9lLbFJhlnhxlluF7xS2w/formResponse';
  const data = new URLSearchParams();

  for (const [key, value] of Object.entries(formValues)) {
    data.append(key, value);
  }

  fetch(googleFormsUrl, {
    method: 'POST',
    body: data,
    mode: 'no-cors'
  })
  .then(response => {
    // Handle success response
  })
  .catch(error => {
    // Handle error response
  });
});