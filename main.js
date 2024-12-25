const viewSocials = document.getElementById('viewSocials');
const socials = document.getElementById('socials');
const description = document.querySelector('.description');

viewSocials.addEventListener('click', () => {
    socials.classList.toggle('active');
    description.classList.toggle('active');
})