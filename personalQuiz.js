function displayQuiz() {
  const questions = [
    // Project Management (PM)
    {
      question: "لما بتلاقي حاجه بايظة في البيت",
      choices: ["بتطلع الشخص الفزلوكة اللي جواك", "بتجيب حد بيفهم فيها وخلاص"],
      weights: [
        {
          pmScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          pmScore: 0,
        },
      ],
    },

    {
      question: "لو فيه فيلم نزل جديد وانت عايز تتفرج عليه",
      choices: ["بتسيرش عليه ف كذا حاجه", "بتستني اما يبقي متاح عادي"],
      weights: [
        {
          pmScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          pmScore: 0,
        },
      ],
    },

    // PR & FR
    {
      question: "لو حاجه عجبتك جداً بس سعرها طلع غالي عليك",
      choices: ["بتحاول تقلل في السعر", "بتوافق وتدفع كل اللي معاك"],
      weights: [
        {
          prfrScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          prfrScore: 0,
        },
      ],
    },
    {
      question: "شايف أنك لو في أعماق البحر مع سبونج بوب هتتقمص شخصية",
      choices: ["مستر سلطع عشان بحب الفلوس", "شفيق عشان متوحد"],
      weights: [
        {
          prfrScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          prfrScore: 0,
        },
      ],
    },

    // HR
    {
      question: "لو فيه مشكله بين اتنين اصحابك بتحب",
      choices: ["انك تسمع وتحل", "مش مهم كده كده هيتصالحوا"],
      weights: [
        {
          hrScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          hrScore: 0,
        },
      ],
    },
    {
      question: "لو عندك القدرة على مساعدة الناس بتساعدهم ازاي ؟",
      choices: [
        "بتعرض المساعدة على اللي محتاجها عشان أدخل الجنة",
        "لاء أنا كاريزما ومش بساعد حد",
      ],
      weights: [
        {
          hrScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          hrScore: 0,
        },
      ],
    },

    // Multimedia
    {
      question: "لما بتيجي تتصور",
      choices: [
        "بتعذب صاحبك وبتركز في تفاصيل الصورة وممكن يصورك 100 صورة",
        "لاء ، صور واجري",
      ],
      weights: [
        {
          multimediaScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          multimediaScore: 0,
        },
      ],
    },
    {
      question: "لو صاحبك منزل صورة",
      choices: ["بتركز ف كواليتي الصوره والزاويه بتاعتها", "ولا اي صوره عادي"],
      weights: [
        {
          multimediaScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          multimediaScore: 0,
        },
      ],
    },

    //Marketing
    {
      question: "لو هتنزل صورة ليك بتحب",
      choices: ["يكون عليها كابشن لذيذ وكريتيف", "بتحط قلوب وتنزلها"],
      weights: [
        {
          marketingScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          marketingScore: 0,
        },
      ],
    },
    {
      question: "لو هتختار تكون شخصية من كرتون الفار الطباخ هتكون",
      choices: [
        "الفار عشان بيحب يبدع في الوصفة",
        "چوليت عشان بتحب تتحكم وتسيطر على الأمور",
      ],
      weights: [
        {
          marketingScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          marketingScore: 0,
        },
      ],
    },
    // Operations
    {
      question: "لما بتلعب سكرو مع صحابك وتخسر",
      choices: ["بتتعصب وتعيد الجيم تاني", "it's just a game"],
      weights: [
        {
          opsScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          opsScore: 0,
        },
      ],
    },
    {
      question: "لما تلاقي خطة مش ناجحة، هل بتخطط تاني ولا بتسيبها وتمشي؟",
      choices: ["أرجع أعيدها تاني", "أسيبها، عادي"],
      weights: [
        {
          opsScore: +3,
          otherScore: 0,
        },
        {
          otherScore: +3,
          opsScore: 0,
        },
      ],
    },

    // Presentation
    {
      question: "لو عندك برزنتيشن في الجامعة",
      choices: [
        "تحب تكون المنقذ وتساعد أي حد من صحابك لما يتلغبط",
        "Thank You اقرا سلايد",
      ],
      weights: [
        {
          presentationScore: +3,
          otherScore: 0,
        }, // Presentation
        {
          otherScore: +3,
          presentationScore: 0,
        }, // Others
      ],
    },

    {
      question: "تقدر تقيم مستواك في الانجليزي أنه",
      choices: ["زي چوني في الكبير أوي", "I'm speaking English fifty fifty"],
      weights: [
        {
          presentationScore: +3,
          otherScore: 0,
        }, // Presentation
        {
          otherScore: +3,
          presentationScore: 0,
        }, // Others
      ],
    },
  ];

  // Variables for scores
  let currentQuestionIndex = 0;
  let pmScore = 0;
  let prfrScore = 0;
  let hrScore = 0;
  let multimediaScore = 0;
  let marketingScore = 0;
  let opsScore = 0;
  let presentationScore = 0;
  function displayQuestionImage(questionIndex) {
    const imageURLs = [
      "Q1.jpg",
      "Q2.jpg",
      "Q3.jpg",
      "Q4.jpg",
      "Q5.jpg",
      "Q6.jpg",
      "Q7.jpeg",
      "Q8.png",
      "Q9.jpeg",
      "Q10.gif",
      "Q11.jpeg",
      "Q12.gif",
      "Q13.jpeg",
      "Q14.jpg",
    ];
    const questionImageElement = document.getElementById("question-image");
    questionImageElement.src = imageURLs[questionIndex];
  }

  document.getElementById("begin-quiz").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    displayCurrentQuestion(); // Show the first question
  });

  //Function to display the current question and choices
  function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const progressImageElement = document.getElementById(
      "question-progress-image"
    );
    const choiceContainers = document.getElementById("choices");

    choiceContainers.innerHTML = "";

    questionElement.textContent = currentQuestion.question;
    progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);

    displayQuestionImage(currentQuestionIndex);

    currentQuestion.choices.forEach((choice, index) => {
      //Buttons for choices
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choices");
      button.addEventListener("click", () => handleChoiceClick(index));
      choiceContainers.appendChild(button);
    });
  }

  function getQuestionProgressImage(questionIndex) {
    const progressImageURLs = [
      "Q1 progress.svg",
      "Q2 progress.svg",
      "Q3 progress.svg",
      "Q4 progress.svg",
      "Q5 progress.svg",
      "Q6 progress.svg",
      "Q7 progress.svg",
      "Q8 progress.svg",
      "Q9 progress.svg",
      "Q10 progress.svg",
      "Q11 progress.svg",
      "Q12 progress.svg",
      "Q13 progress.svg",
      "Q14 progress.svg",
    ];
    return progressImageURLs[questionIndex] || "";
  }

  function handleChoiceClick(choiceIndex) {
    console.log("Current Question Index:", currentQuestionIndex); // Log the index
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
      console.error("No question found for index:", currentQuestionIndex);
      return; // Exit if the question is undefined
    }

    const selectedChoiceWeight = currentQuestion.weights[choiceIndex];

    // Ensure selectedChoiceWeight is valid
    if (!selectedChoiceWeight) {
      console.error("No weights found for choice index:", choiceIndex);
      return; // Exit if the weights are undefined
    }

    pmScore += selectedChoiceWeight.pmScore || 0;
    prfrScore += selectedChoiceWeight.prfrScore || 0;
    hrScore += selectedChoiceWeight.hrScore || 0;
    multimediaScore += selectedChoiceWeight.multimediaScore || 0;
    marketingScore += selectedChoiceWeight.marketingScore || 0;
    opsScore += selectedChoiceWeight.opsScore || 0;
    presentationScore += selectedChoiceWeight.presentationScore || 0;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
    } else {
      calculateMBTITypeAndDisplayImage();
    }
  }

  function calculateMBTITypeAndDisplayImage() {
    const scores = {
      PM: pmScore,
      PR_FR: prfrScore,
      HR: hrScore,
      Multimedia: multimediaScore,
      Marketing: marketingScore,
      Operations: opsScore,
      Presentation: presentationScore,
      Mbti: mbti-image,
    };

    // حساب الـ mbtiTypeString بناءً على الدرجات
    const mbtiTypeString = getMBTIType(scores);

    console.log("MBTI Type:", mbtiTypeString);
      
  document.getElementById("quiz-page").style.display = "none";
      
    // تحديد الصورة بناءً على mbtiTypeString
    displayImage(mbtiTypeString);

    document.getElementById("results").style.display = "block";
  }

  // دالة حساب الـ MBTI Type بناءً على أعلى درجة
  function getMBTIType(scores) {
    let maxScore = 0;
    let mbtiType = "";

    for (const committee in scores) {
      if (scores[committee] > maxScore) {
        maxScore = scores[committee];
        mbtiType = committee;
      }
    }
    return mbtiType;

    document.getElementById("results").style.display = "none";
    // Determine which committee has the highest score
    const questionElement = document.getElementById("question");
    const choiceContainers = document.getElementById("choices");
    const quizContainer = document.getElementById("quiz");
    const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
    questionElement.remove();
    choiceContainers.remove();
    quizContainer.remove();
    thumbnailImage.remove();

    displayImage(mbtiTypeString);

    document.getElementById("results").style.display = "block";
  }

  //Function to calculate MBTI type and return image URL
  function getMBTIImageUrl(mbtiTypeString) {
    const MBTIImageUrls = {
      PM: "PM.png",
      PR_FR: "PR.png",
      HR: "HR.png",
      Multimedia: "media.png",
      Marketing: "marketing.png",
      Operations: "operations.png",
      Presentation: "presentation.png",
      Mbti: "PM.png",
    };
    return MBTIImageUrls[mbtiTypeString] || "";
  }

  //Display image
  function displayImage(mbtiTypeString) {
    const imageURL = getMBTIImageUrl(mbtiTypeString);
    const mbtiImageContainer = document.getElementById("mbti-image");
    const imageElement = document.createElement("img");
    imageElement.src = imageURL;

    mbtiImageContainer.appendChild(imageElement);
  }
  //Display the first question when the quiz starts
  displayCurrentQuestion();
  document.addEventListener("DOMContentLoaded", () => {
    const choiceContainers = document.querySelectorAll(".choice-container");
    choiceContainers.forEach((container) => {
      const choices = container.querySelectorAll("button");
      choices.forEach((choice, choiceIndex) => {
        choice.addEventListener("click", () => {
          handleChoiceClick(choiceIndex);
        });
      });
    });
  });
}

//Call function to start the quiz
displayQuiz();

// Share quiz button click event handler
document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".share-button");

  shareButton.addEventListener("click", function () {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Quiz URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  });
});

// Select the button element
const backToHomeButton = document.getElementById("back-to-home");

// Add event listener for the button click
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("back-to-home");

  backButton.addEventListener("click", function () {
    // Redirect to the home page or perform any other action you want
    window.location.href = "https://gudetea.github.io/FruitCard-Odyssey/"; // Replace 'home.html' with the actual URL of your home page
  });
});

// Function to navigate back to the home page
function navigateToHomePage() {
  // Reset quiz state if needed
  resetQuiz(); // Assuming you have a resetQuiz() function defined

  // Hide quiz page and show the home page
  document.getElementById("home").style.display = "block";
  document.getElementById("quiz-page").style.display = "none";
}
