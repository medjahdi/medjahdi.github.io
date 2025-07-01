const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const follow = document.querySelector('.follow');
const card = document.querySelector('.card');

// Removed loader related code

function show() {
  hover.classList.add('active');
  modal.classList.add('show');
}

function hide() {
  hover.classList.remove('active');
  modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

var chkbtn = document.getElementById("chkbtn");
const sidebar = document.getElementById('sidebar');

function toogle() {
  var chk = document.getElementById('check').checked;
  if (!chk) {
    sidebar.style.display = 'block'
    sidebar.style.animation = 'fadeIn 0.25s linear'
  } else {
    sidebar.style.animation = 'fadeOut 0.25s linear forwards'
  }
}

chkbtn.addEventListener('click', toogle);

const container = document.querySelector('#body');
const toggle = document.querySelector('.toggle-input');
const part = document.getElementById('particles-js');
const initialState = 'false';
toggle.checked = initialState;

toggle.addEventListener('change', function () {
  if (!toggle.checked) {
    container.className = 'light';
    part.style.backgroundColor = "#eed1ff";
    card.style.setProperty('--anim', 'cardLightGradient .3s ease-in-out forwards')
    follow.style.animation = 'followLightGradient .3s ease-in-out forwards'
    particlesJS("particles-js", {
      particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
        color: { value: "#7B2CBF" },
        shape: { type: "circle" },
        opacity: { value: .75 },
        size: {
          value: 2,
          anim: { enable: true, speed: 5, size_min: 1, sync: true }
        },
        line_linked: {
          enable: true,
          distance: 125,
          color: "#7B2CBF",
          opacity: 2,
          width: 0.5
        },
        move: {
          enable: true,
          speed: 5,
          attract: { enable: true, rotateX: 1500, rotateY: 900 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "bubble" },
          resize: true
        },
        modes: {
          bubble: { distance: 300, size: 5, duration: 0.75, opacity: 8, speed: 3 }
        }
      },
      retina_detect: true
       })
  }
  else {
    container.className = 'dark';
    part.style.backgroundColor = "#000000";
    card.style.setProperty('--anim', 'cardDarkGradient .3s ease-in forwards')
    follow.style.animation = 'followDarkGradient .3s ease-in-out forwards'
    particlesJS("particles-js", {
      particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
        color: { value: "#b392ac" },
        shape: {
          type: "polygon",
          polygon: { nb_sides: 6 },
        },
        opacity: { value: .75 },
        size: {
          value: 2,
          anim: { enable: true, speed: 5, size_min: 1, sync: true }
        },
        line_linked: {
          enable: true,
          distance: 125,
          color: "#ffffff",
          opacity: .75,
          width: 0.5
        },
        move: {
          enable: true,
          speed: 5,
          attract: { enable: true, rotateX: 1500, rotateY: 900 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "bubble" },
          resize: true
        },
        modes: {
          grab: { distance: 300, line_linked: { opacity: 1 } },
          bubble: { distance: 300, size: 5, duration: 0.75, opacity: 8, speed: 3 }
        }
      },
      retina_detect: true
       })
  }
});

// Initialize particles.js on page load (instead of waiting for the loader)
document.addEventListener('DOMContentLoaded', function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 800 } },
      color: { value: "#b392ac" },
      shape: {
        type: "polygon",
        polygon: { nb_sides: 6 },
      },
      opacity: { value: .75 },
      size: {
        value: 2,
        anim: { enable: true, speed: 5, size_min: 1, sync: true }
      },
      line_linked: {
        enable: true,
        distance: 125,
        color: "#ffffff",
        opacity: .75,
        width: 0.5
      },
      move: {
        enable: true,
        speed: 5,
        attract: { enable: true, rotateX: 1500, rotateY: 900 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: { distance: 300, line_linked: { opacity: 1 } },
        bubble: { distance: 300, size: 5, duration: 0.75, opacity: 8, speed: 3 }
      }
    },
    retina_detect: true
     });
});
