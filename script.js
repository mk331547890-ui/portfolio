// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ================= CLOSE MENU AFTER CLICK =================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});


// ================= ACTIVE NAV LINK =================

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(link => {
            link.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// ================= PROJECT BUTTON =================

function showProject(projectName) {

    alert(
        projectName +
        " project will be available here soon! 😊"
    );

}