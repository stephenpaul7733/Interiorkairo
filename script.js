var splide = new Splide('.Protfolio_Splide', {
    type: 'loop',
    perPage: 4,       // ✅ corrected
    autoplay: true,
    pagination: false,
    gap: '0px',       // ✅ no gap between slides
    breakpoints: {
        1000: { perPage: 3 },
        768: { perPage: 2 },
        500: { perPage: 1 },
    },
});
splide.mount();

 var splide = new Splide('.Team_Splide',{
    type:'loop',
    perPage:4,
    perPove:1,
    autoplay:true,
    pagination:false,
    gap:'2rem',
    breakpoints:{
        1000:{
            perPage:3
        },
        768:{
        perPage:2
        },
       500:{
        perPage:1
       },
    },

 });
 splide.mount();

 

 const workContents = document.querySelectorAll('.Work_Content');

function revealWork() {
  const triggerBottom = window.innerHeight * 0.85;

  workContents.forEach(content => {
    const contentTop = content.getBoundingClientRect().top;

    if(contentTop < triggerBottom) {
      content.classList.add('active');  // Add class to trigger animation
    }
  });
}

  const workItems = document.querySelectorAll(".Work_Content");

  workItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("hover-active");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hover-active");
    });
  });

window.addEventListener('scroll', revealWork);
window.addEventListener('load', revealWork);


 const client_link1 = document.querySelector('.client_link1');
  const client_link2 = document.querySelector('.client_link2');
  const client_link3 = document.querySelector('.client_link3');

  const client_det1 = document.querySelector('.client_det1');
  const client_det2 = document.querySelector('.client_det2');
  const client_det3 = document.querySelector('.client_det3');

  function hideAll(){
    client_det1.style.display = 'none';
    client_det2.style.display = 'none';
    client_det3.style.display = 'none';

    client_det1.classList.remove('add_anim_left');
    client_det2.classList.remove('add_anim_left');
    client_det3.classList.remove('add_anim_left');
  }

  client_link1.addEventListener('click', () => {
    hideAll();
    client_det1.style.display = 'block';
    client_det1.classList.add('add_anim_left');
  });

  client_link2.addEventListener('click', () => {
    hideAll();
    client_det2.style.display = 'block';
    client_det2.classList.add('add_anim_left');
  });

  client_link3.addEventListener('click', () => {
    hideAll();
    client_det3.style.display = 'block';
    client_det3.classList.add('add_anim_left');
  });
   const testimonials = document.querySelectorAll('.client_Details');
  let current = 0;

  function showTestimonial(index){
    testimonials.forEach(t => {
      t.style.display = 'none';
      t.classList.remove('add_anim_left');
    });

    testimonials[index].style.display = 'block';
    testimonials[index].classList.add('add_anim_left');
  }



document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    let current = parseInt(counter.innerText);
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const speed = 20;

    const updateCount = () => {
      if (current < target) {
        current++;
        counter.innerText = current + suffix;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target + suffix;
      }
    };

    updateCount();
  });

});
 
const nav_open = document.querySelector('.ri-menu-5-fill');
const menu = document.querySelector('ul');
const nav_close = document.querySelector('#close_menu'); 

nav_open.addEventListener('click', () =>{
    menu.classList.add('show_menu');
});
nav_close.addEventListener('click',() =>{
    menu.classList.remove('show_menu');
});