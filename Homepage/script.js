

// turns the background of the nav bar white on scrolling

window.addEventListener("scroll", function () {
    
    const header = document.getElementById("navbar");
    const windowPosition = window.scrollY > 0;
    
    header.classList.toggle("scroll-active", windowPosition);
})



// increases the size of the social media icons on hover

document.addEventListener("mouseover" ,function () {
   
    const instagram = document.getElementsById("instagram");
    const facebook = document.getElementsById("facebook");

    // instagram.classList.toggle("fa-5x");
    //facebook.classList.toggle("fa-5x");


    //if(mouseover == true) {

    instagram.classList.remove("fa-4x");
    instagram.classList.add("fa-5x");
    facebook.classList.remove("fa-4x");
    facebook.classList.add("fa-5x");

    //}

})
