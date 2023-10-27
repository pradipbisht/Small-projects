// let API_KeY='0089c5aac4c343dbb323c20c6dc1d441';
document.addEventListener("DOMContentLoaded", function() {
    const topSection = document.getElementById("top-section");
    const originalPosition = topSection.style.top;

    function checkScroll() {
        if (window.scrollY > 0) {
            topSection.classList.add("active");
        } else {
            topSection.classList.remove("active");
        }
    }

    checkScroll();

    window.addEventListener("scroll", function() {
        checkScroll();
    });
});
// const header = document.getElementById("top-section");
//         var prevScrollPos = window.pageYOffset;

//         window.onscroll = function() {
//             var currentScrollPos = window.pageYOffset;

//             if (prevScrollPos > currentScrollPos) {
//                 // Scrolling up, show the header
//                 header.style.top = "0";
//             } else {
//                 // Scrolling down, hide the header
//                 header.style.top = "-100px"; // Adjust this value to control the hide/show animation
//             }

//             prevScrollPos = currentScrollPos;
//         };