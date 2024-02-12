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

document.getElementById("reveal-phone").addEventListener("click", function() {
    var phoneElement = document.getElementById("phone");
    phoneElement.textContent = "+1-254-214-0705";
    document.getElementById("phone").classList.remove("hidden");
    this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    var skills = document.querySelectorAll(".skill");

    skills.forEach(function (skill) {
        skill.addEventListener("click", function () {
            var progress = this.querySelector(".progress");
            var width = parseInt(progress.style.width) || 0; // Get current width or default to 0
            var targetWidth = parseInt(progress.dataset.width); // Get target width from data attribute
            animateProgress(progress, width, targetWidth);
        });
    });
});

function animateProgress(progress, startWidth, targetWidth) {
    var animationDuration = 1000; // Duration of animation in milliseconds
    var frameDuration = 1000 / 60; // Duration of each animation frame in milliseconds
    var frames = animationDuration / frameDuration; // Number of frames
    var increment = (targetWidth - startWidth) / frames; // Width increment per frame

    var frame = 0;
    var interval = setInterval(function () {
        frame++;
        var newWidth = startWidth + increment * frame;
        progress.style.width = newWidth + "%";

        if (frame >= frames) {
            clearInterval(interval);
        }
    }, frameDuration);
}

document.addEventListener("DOMContentLoaded", function () {
    var viewPdfButtons = document.querySelectorAll(".view-pdf-btn");

    viewPdfButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var pdfName = "Scientific-Paper-Peer-Reviewing-System-With-Blockchain-IPFS-and-Smart-Contract (1).pdf" ;  //  this.dataset.pdf;
            displayPdf(pdfName);
        });
    });
});

function displayPdf(pdfName) {
    var iframe = document.createElement("iframe");
    iframe.src = pdfName;
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    document.body.appendChild(iframe);
}

