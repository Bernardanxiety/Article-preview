const openBtn = document.querySelector('.open-icon');
const closeBtn = document.querySelector('.close-icon');
const socials = document.querySelector('.socials');

openBtn.addEventListener('click', function() {
    socials.classList.toggle('enabled');
    openBtn.classList.toggle('open-icon-close');
})

closeBtn.addEventListener('click', function() {
    socials.classList.remove('enabled');
})