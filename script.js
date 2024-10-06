var typed = new Typed('#element', {
    strings: ["I'm a Software Engineer", ' A Web Developer', "An AI ML Engineer"],
    typeSpeed: 90,
});


const togglebtn = document.querySelector('.bars')
const togglebtnIcon = document.querySelector('.bars i')
const dropdownmenu = document.querySelector('.dropdown')

togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')

    togglebtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

