const roles = [
    "Web Developer",
    "Software Engineer",
    "Data Scientist"
];

const roleElement = document.querySelector("#role");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typingEffect, 1500);
            return;
        }

    } else {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typingEffect, deleting ? 70 : 120);
}

if (roleElement) {
    typingEffect();
} else {
    console.error("Element with ID 'role' not found!");
}





document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".projects-list li");
    const projects = document.querySelectorAll(".projects-box");

    if (filterButtons.length === 0 || projects.length === 0) {
        console.log("Project filter elements not found!");
        return;
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Active button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            // Filter projects
            projects.forEach(function (project) {

                const category = project.getAttribute("data-category");

                if (filter === "all" || filter === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }

            });

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".profile-menu-icons");

    if (!menu) {
        console.log("profile-menu-icons not found!");
        return;
    }

    menu.addEventListener("click", function (event) {

        const clickedItem = event.target.closest("li");

        if (!clickedItem || !menu.contains(clickedItem)) {
            return;
        }

        // Remove active color from all icons
        menu.querySelectorAll("li i").forEach(function (icon) {
            icon.style.color = "";
        });

        // Apply color to clicked icon
        const icon = clickedItem.querySelector("i");

        if (icon) {
            icon.style.setProperty(
                "color",
                "var(--main-color)",
                "important"
            );
        }

    });

});
