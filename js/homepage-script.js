
var root = document.querySelector(':root');

function start(){
    root.style.setProperty('--y', 0);
    root.style.setProperty('--footer-x',1);
    root.style.setProperty('--opacity', 1);
    root.style.setProperty('--left', 0);
    root.style.setProperty('--right', 0);
    root.style.setProperty('--top', 0);
    root.style.setProperty('--bottom', 0);
}



window.addEventListener('load', start, false);