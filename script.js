const btn = document.querySelector('.btn');
const socials = document.querySelector('.socials');
const user = document.querySelector('.user');

btn.addEventListener('click', function() {
    if(!user.classList.contains('disabled')) {
        user.classList.add('disabled');
        socials.classList.remove('disabled');
    }
    else {
        socials.classList.add('disabled');
        user.classList.remove('disabled');
    }
})