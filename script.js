
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
    const isVisible = faqAnswer.style.display === "block";
    faqAnswer.style.display = isVisible ? "none" : "block";
});
