import './style.scss';
import * as bootstrap from 'bootstrap'
import ScrollReveal from 'scrollreveal'
import 'waypoints/lib/noframework.waypoints'

import Typed from 'typed.js';
let options = {
    strings: ['Drinks ...', 'Foods ...'],
    typeSpeed: 60,
    backDelay: 800,
    backSpeed: 30,
    loop:true,
  };
  
  let typed = new Typed('.element', options);
  
  let toDown = {
    distance: '50px',
    origin: 'top',
    opacity: true,
    duration: 1000,
    interval:50,
};

ScrollReveal().reveal('.to-down', toDown);

let toLeft = {
    distance: '50px',
    origin: 'right',
    opacity: true,
    duration: 1000,
    interval:50,
};

ScrollReveal().reveal('.to-left', toLeft);

let toRight = {
    distance: '50px',
    origin: 'left',
    opacity: true,
    duration: 1000,
    interval:50,
};

ScrollReveal().reveal('.to-right', toRight);

new Waypoint({
    element: document.querySelector('.home-content'),
    handler: function(direction) {
      let oldlink = document.querySelector('.nav-link.active');
      if(oldlink != null){
        oldlink.classList.remove('active');
      }
      let currentLink = document.querySelector('[href="#home"]');
      currentLink.classList.add('active');
    },
    offset:"10%"
  })

 let  sections  = ['about','services','menus','contact'];
 sections.forEach((section) =>{
  new Waypoint({
    element: document.getElementById(section),
    handler: function(direction) {
      let oldlink = document.querySelector('.nav-link.active');
      oldlink.classList.remove('active');
      let currentLink = document.querySelector(`[href="#${section}"]`);
      currentLink.classList.add('active');
    },
    offset:"10%"
  })
 })

 new Waypoint({
  element: document.querySelector('#contact'),
  handler: function(direction) {
    let oldlink = document.querySelector('.nav-link.active');
    if(oldlink != null){
      oldlink.classList.remove('active');
    }
    let currentLink = document.querySelector('[href="#contact"]');
    currentLink.classList.add('active');
  },
  offset:"40%"
})

let menuList = [
  {
    id:1,
    img: "img/plate1.png",
    title :'Barbecue Sald',
    description:'Special Delicious Dish',
    price: 22.2,
    currency: '$'
  },
  {
    id:2,
    img: "img/plate2.png",
    title :'Sald with fish',
    description:'Special Delicious Dish',
    price: 30.4,
    currency: '$',
  },
  {
    id:2,
    img: "img/plate3.png",
    title :'Spanach Sald',
    description:'Special Delicious Dish',
    price: 50,
    currency: '$',
  }
]

let menuRow = document.querySelector('#menuRow');

menuList.forEach((menuList) =>{
let div = document.createElement('div');
    div.classList.add('col-8','col-md-4','col-lg-2','text-center','to-right');
    div.innerHTML = `
      <div class="card border-0 plate-card mb-3">
          <div class="card-body">
              <img src="${menuList.img}" class=" w-75 text-center my-4" alt="">
              <div class="text">
                  <p class=" fw-bold">${menuList.title}</p>
                  <p class=" text-black-50">${menuList.description}</p>
              </div>
              <div class=" d-flex justify-content-between">
                  <p class="m-0 p-0">${menuList.currency} ${menuList.price}</p>
                  <a href="" class=" btn btn-primary">
                      <i class=" bi bi-cart"></i>
                  </a>
              </div>
          </div>
      </div>
    `;
menuRow.append(div)
})
