const homeLink = document.querySelector('link');

homeLink.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
});
