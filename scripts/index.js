const homeLink = document.querySelectorAll('link');

homeLink.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});