const nav = document.querySelector('.nav');

// Change background color on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.style.backgroundColor = '#444';
    } else {
        nav.style.backgroundColor = '#333';
    }
});

// Change font color on hover
nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#fff';
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#ccc';
    }
});
