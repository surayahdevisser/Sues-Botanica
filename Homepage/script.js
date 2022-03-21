

// turns the background of the nav bar white on scrolling

window.addEventListener("scroll", function () {
    
    const header = document.getElementById("navbar");
    const windowPosition = window.scrollY > 0;
    
    header.classList.toggle("scroll-active", windowPosition);
})






// calculates current year for copyright line

const date = new Date();
const year = date.getFullYear();

document.getElementById("year").innerHTML = year;


