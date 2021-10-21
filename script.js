const openBtn = document.querySelector('.open-icon');
const closeBtn = document.querySelector('.close-icon');
const socials = document.querySelector('.socials');

openBtn.addEventListener('click', function() {
    socials.classList.add('enabled');
})

closeBtn.addEventListener('click', function() {
    socials.classList.remove('enabled');
})