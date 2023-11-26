// FUNCTIONS OF BANNER

const tags = (t) => {
    let info = ['Compra donde estés', '¡Contáctanos HOY!', 'Calidad indiscutible'];
    let word_container = document.querySelector(".dinamyc-info");
    let words = info[t].split(' ');
    let tag = '';

    words.forEach(e => {
        tag += `<h3 class="info_header" style='color:white; font-weight: 900; font-size:3em; transition: width 2s linear 1s;'>${e}</h3>`;
    });
    word_container.innerHTML = tag;

}

let t = 0;
let time = setInterval(function () {
    t += 1;
    tags(t - 1)
    if (t === 3) {
        t = 0;
    }
}, 3500);



// Function for the icon button

let menu = document.querySelector('.content-items'); // select the buttons on the menu panel
let links = document.querySelectorAll('a[class="navbar-link"]'); // Select all links from the panel menu


const btnIcon = () => {
    let btn = document.querySelector('.btn-icon');

    btn.addEventListener('click', function () {
        menu.classList.toggle('visible');
    })
}

const btnIconX = () => {
    let btn = document.querySelector('.btn-icon-x');

    btn.addEventListener('click', function () {
        menu.classList.toggle('visible');
    })
}


links.forEach(function (e) {
    e.addEventListener('click', function () {
        menu.classList.toggle('visible');
    })
})

btnIcon();
btnIconX();