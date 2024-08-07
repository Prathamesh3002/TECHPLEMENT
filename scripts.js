
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('showing');
});


const contactForm = document.getElementById('contact-form');
const clearButton = document.getElementById('clear-button');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
	
    contactForm.reset();
	
    alert('Thank you for contacting us! Your message has been sent.');
});

clearButton.addEventListener('click', () => {
    contactForm.reset();
});
