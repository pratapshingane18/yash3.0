// Loader

const Loader = document.querySelector('.Load-container');
const overlay = document.getElementById('loading-overlay');

let load = true;
function init(){

    setTimeout((()=>{
      overlay.remove();
      window.location.replace('../home.html');
    }),5000)
  
} 

init();
//  progress-bar
const progressBar = document.getElementsByClassName('progress-bar')[0]

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0
  
  progressBar.style.setProperty('--width', width + .1)
},5)
