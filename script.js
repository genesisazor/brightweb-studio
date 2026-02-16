
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
});

