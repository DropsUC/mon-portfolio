const burger = document.getElementById('burger');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        answer.classList.toggle('active');
    });
});