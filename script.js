
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestion = document.querySelector(".faq-question");
    const faqAnswer = document.querySelector(".faq-answer");

    if (faqQuestion && faqAnswer) {
        faqQuestion.addEventListener("click", function () {
            if (faqAnswer.style.maxHeight) {
                faqAnswer.style.maxHeight = null;
            } else {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            }
        });
    }

    // Mobile navigation toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});


