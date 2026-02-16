
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestion = document.querySelector(".faq-question");
    const faqAnswer = document.querySelector(".faq-answer");

    if (faqQuestion && faqAnswer) {
        faqQuestion.addEventListener("click", function () {
            faqAnswer.classList.toggle("active");
        });
    }
});
