document.addEventListener("DOMContentLoaded", () => {
    let currentQuestionIndex = 0;
    const questions = [
        { question: "First Name", type: "text", placeholder: "Enter your first name" },
        { question: "Last Name", type: "text", placeholder: "Enter your last name" },
        { question: "Email", type: "email", placeholder: "Enter your email" },
        { question: "Address", type: "text", placeholder: "Enter your address" },
        { question: "Contact", type: "tel", placeholder: "Enter your contact number" },
        { question: "Payment Method", type: "text", placeholder: "Enter your payment method" },
        { question: "Password", type: "password", placeholder: "Enter your password (8 characters)" }
    ];

    const answers = {};

    const questionBox = document.getElementById("questionBox");
    const inputField = document.getElementById("input");
    const progressBar = document.getElementById("bar");

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionBox.textContent = currentQuestion.question;
            inputField.type = currentQuestion.type;
            inputField.placeholder = currentQuestion.placeholder;
            inputField.value = "";
            updateProgressBar();
        } else {
            showCompletionMessage();
        }
    }

    function nextQuestion() {
        const answer = inputField.value.trim();
        if (validateInput(answer)) {
            answers[questions[currentQuestionIndex].question] = answer;
            currentQuestionIndex++;
            loadQuestion();
        } else {
            alert("Please provide a valid input.");
        }
    }

    function skipQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function validateInput(input) {
        const currentQuestion = questions[currentQuestionIndex];
        if (!input) {
            return false;
        }
        if (currentQuestion.type === "email" && !validateEmail(input)) {
            return false;
        }
        if (currentQuestion.type === "password" && input.length < 8) {
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String
