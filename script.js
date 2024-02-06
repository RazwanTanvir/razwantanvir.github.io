document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to nav links
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            toggleSection(targetId);
        });
    });
});

function toggleSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll(".portfolio-section");
    sections.forEach(function (section) {
        section.classList.remove("active");
    });

    // Show the selected section
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }
}