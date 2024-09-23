function displayQuiz() {
    const questions = [
        {
            question: "What is your preferred way to approach tasks?",
            choices: ["I like to plan everything out", "I prefer to go with the flow"],
            weights: [
                { pmScore: +3, otherScore: 0 }, // Project Management
                { otherScore: +3, pmScore: 0 }, // Others
            ]
        },
        {
            question: "How do you typically make decisions?",
            choices: ["I rely on logic and facts", "I consider my feelings and the impact on others"],
            weights: [
                { prfrScore: +3, otherScore: 0 }, // PR&FR
                { otherScore: +3, prfrScore: 0 }, // Others
            ]
        },
        {
            question: "In group projects, you usually...",
            choices: ["Take charge and lead", "Support the group and contribute ideas"],
            weights: [
                { hrScore: +3, otherScore: 0 }, // HR
                { otherScore: +3, hrScore: 0 }, // Others
            ]
        },
        {
            question: "When faced with a challenge, you tend to...",
            choices: ["Analyze the problem and create a solution", "Look for creative ways to approach it"],
            weights: [
                { multimediaScore: +3, otherScore: 0 }, // Multimedia
                { otherScore: +3, multimediaScore: 0 }, // Others
            ]
        },
        {
            question: "How do you feel about deadlines?",
            choices: ["I thrive under pressure", "I prefer to have time to reflect"],
            weights: [
                { opsScore: +3, otherScore: 0 }, // Operations
                { otherScore: +3, opsScore: 0 }, // Others
            ]
        },
        {
            question: "Do you prefer structured environments or flexible ones?",
            choices: ["Structured environments help me focus", "Flexible environments allow for creativity"],
            weights: [
                { presentationScore: +3, otherScore: 0 }, // Presentation
                { otherScore: +3, presentationScore: 0 }, // Others
            ]
        }
    ];

    // Variables for scores 
    let currentQuestionIndex = 0;
    let pmScore = 0;
    let prfrScore = 0;
    let hrScore = 0;
    let multimediaScore = 0;
    let opsScore = 0;
    let presentationScore = 0;

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
        displayCurrentQuestion(); // Show the first question
    });

    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        questionElement.textContent = currentQuestion.question;

        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
    }

    function handleChoiceClick(choiceIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];

        pmScore += selectedChoiceWeight.pmScore || 0;
        prfrScore += selectedChoiceWeight.prfrScore || 0;
        hrScore += selectedChoiceWeight.hrScore || 0;
        multimediaScore += selectedChoiceWeight.multimediaScore || 0;
        opsScore += selectedChoiceWeight.opsScore || 0;
        presentationScore += selectedChoiceWeight.presentationScore || 0;

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayCurrentQuestion();
        } else {
            calculateResultAndDisplayMessage();
        }
    }

    function calculateResultAndDisplayMessage() {
        const scores = {
            PM: pmScore,
            PR_FR: prfrScore,
            HR: hrScore,
            Multimedia: multimediaScore,
            Operations: opsScore,
            Presentation: presentationScore
        };

        const bestCommittee = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        displayMessage(bestCommittee);
        document.getElementById('quiz-page').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }

    function displayMessage(committee) {
        const messages = {
            PM: "You're a natural planner! Your organizational skills make you perfect for Project Management.",
            PR_FR: "You're a people person! Your empathy and communication skills are ideal for PR & Fundraising.",
            HR: "You're great at understanding people! Your interpersonal skills shine in Human Resources.",
            Multimedia: "You're creative and innovative! Your artistic flair makes you a perfect fit for Multimedia.",
            Operations: "You're efficient and systematic! Your problem-solving skills make you a star in Operations.",
            Presentation: "You're a confident speaker! Your presentation skills are perfect for the Presentation committee."
        };

        const resultDescription = document.getElementById('result-description');
        resultDescription.textContent = messages[committee];
    }

    // Initialize the quiz by displaying the first question
    displayCurrentQuestion();
}

// Start the quiz when the document is loaded
document.addEventListener('DOMContentLoaded', displayQuiz);
