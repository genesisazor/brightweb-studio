
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
        const isOpen = answer.style.maxHeight;

        // Close all answers first
        document.querySelectorAll(".faq-answer").forEach((el) => {
            el.style.maxHeight = null;
        });

        // Open the clicked one if it was closed
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

    // Mobile navigation toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});


