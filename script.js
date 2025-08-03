// // Toggle menu and navbar on mobile
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Scroll sections active link
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Close navbar when scroll
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// // Scroll Reveal animations
// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// // Typed.js Multi-Text Typing Animation
// const typed = new Typed(".multiple-text", {
//     strings: [
//         " MERN Stack Developer",
//         "Data Analyst",
//         "Web Developer",
//         "Frontend Developer"
//     ],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
//     });
//     // Contact form submission to backend
// const form = document.getElementById('contact-form');
// const msgSpan = document.getElementById('msg');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = {
//         name: form.name.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         subject: form.subject.value,
//         message: form.message.value
//     };

//     try {
//         const res = await fetch('http://localhost:5000/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         const data = await res.json();
//         msgSpan.textContent = data.message;
//         msgSpan.style.color = "green";
//         form.reset();
//     } catch (error) {
//         msgSpan.textContent = "Failed to send message.";
//         msgSpan.style.color = "red";
//     }
// });
// Toggle menu and navbar on mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js Multi-Text Typing Animation
const typed = new Typed(".multiple-text", {
    strings: [
        " MERN Stack Developer",
        "Data Analyst",
        "Web Developer",
        "Frontend Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ✅ Contact form submission to backend
// // Contact form submission to backend
const form = document.getElementById('contact-form');
const msgSpan = document.getElementById('msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        message: form.message.value
    };

    try {
        const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        msgSpan.textContent = data.message;
        msgSpan.style.color = "green";
        form.reset();
    } catch (error) {
        msgSpan.textContent = "Failed to send message.";
        msgSpan.style.color = "red";
    }
});
