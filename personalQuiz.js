function displayQuiz() {
    const questions = [
    // Project Management (PM)
        {
            question: "لما تيجي تكلم صحابك عن مشروع، بتحب تخطط قبلها ولا تطلع منهم أفكار في السريع؟",
            choices: ["أخطط وأكتب كل حاجة", "أقولهم يلا مفيش وقت!'"],
            weights: [
                {
                    pmScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    pmScore: 0
                },
        ]
    },
        {
            question: "لما تضيع حاجة، بتعمل إيه؟",
            choices: ["أرجع أفتش في كل مكان", "أستنى يمكن حد يلاقيها!"],
            weights: [
                {
                    pmScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    pmScore: 0
                },
        ]
    },
        {
            question: "الضغط في الشغل بيخليك تبطل شرب شاي ولا بتكمل",
            choices: ["أبطل شرب شاي عشان اركز!", "بكمل شاي عشان أشتغل وانا رايق!"],
            weights: [
                {
                    pmScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    pmScore: 0
                },
        ]
    },
        {
            question: "لما تلاقي مشكلة، بتفكر في الحل ولا بتقعد تصيح'؟",
            choices: ["أبدأ أفكر وأحلها", "أعيط شوية وبعدين أفكر!"],
            weights: [
                {
                    pmScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    pmScore: 0
                },
        ]
    },
        {
            question: "الديدلاينز بالنسبة لك، حاجات مفروضة ولا مجرد اقتراحات؟",
            choices: ["مواعيد نهائية، مينفعش!", "ممكن نمدها شوية؟"],
            weights: [
                {
                    pmScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    pmScore: 0
                },
        ]
    },

    // PR & FR
        {
            question: "لما تحضر مناسبة، بتحب تبقى في الصورة ولا تفضل في الظل؟",
            choices: ["أكون في الصورة", "بتحول باتمان'"],
            weights: [
                {
                    prfrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    prfrScore: 0
                },
        ]
    },
        {
            question: "لما تتخذ قرار، تعتمد على العقل ولا بتستخدم احساسك؟",
            choices: ["أفكر كويس، مش عايز أندم", "قلبي دليلي!'"],
            weights: [
                {
                    prfrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    prfrScore: 0
                },
        ]
    },
        {
            question: "لما متعرفش تفتح مواضيع، تروح لأصحابك ولا تحاول تحلها بنفسك؟",
            choices: ["أستشيرهم، هما هيساعدوني", "لوحدي وأقول 'يا رب، سهلها!'"],
            weights: [
                {
                    prfrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    prfrScore: 0
                },
        ]
    },
        {
            question: "تفضل تكون في حتة مليانة دوشة ولا في حتة هادية؟",
            choices: ["دوشة حب الحياة!", "هادية، بحب أركز!"],
            weights: [
                {
                    prfrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    prfrScore: 0
                },
        ]
    },
        {
            question: "لما حد يعزمك على أكلة، هل تحب تسأل عن المكونات ولا تأكل من غير ما تسأل؟",
            choices: ["أسأل، عاوز أكون مطمن", "أكل وأشوف بعدين!"],
            weights: [
                {
                    prfrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    prfrScore: 0
                },
        ]
    },

    // HR
        {
            question: "لما تنظم فريق، بتحب تكون 'الشخص المسؤول' ولا 'الشخص اللطيف'؟",
            choices: ["المسؤول، لازم كده", "اللطيف، الكل بيحبني!"],
            weights: [
                {
                    hrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    hrScore: 0
                },
        ]
    },
        {
            question: "لما حد يضايقك، ترد بهدوء ولا تحس إنك في فيلم أكشن؟",
            choices: ["أهدأ وأكمل", "أدرينالين و أكشن!'"],
            weights: [
                {
                    hrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    hrScore: 0
                },
        ]
    },
        {
            question: "لما يجيلك خبر حلو، بتحب تشارك الكل ولا تحتفظ بيه لنفسك؟",
            choices: ["أشارك، ليه لأ؟", "أقول 'دا سرا!'"],
            weights: [
                {
                    hrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    hrScore: 0
                },
        ]
    },
        {
            question: "لما تلاقي حد متميز، هل تحسده ولا تشجعه؟",
            choices: ["أشجعه، المحبة!", "أحسده شوية!"],
            weights: [
                {
                    hrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    hrScore: 0
                },
        ]
    },
        {
            question: "في الاجتماعات، بتحب تكون المتحدث ولا المستمع؟",
            choices: ["المتحدث، بقول كل حاجة!", "المستمع، أراقب وأتعلم!"],
            weights: [
                {
                    hrScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    hrScore: 0
                },
        ]
    },

    // Multimedia
        {
            question: "لما تكون في مشروع فني، بتفضل تكون كاتب ولا مصور؟",
            choices: ["كاتب، الكلمة سلاح!", "مصور، صورة بألف كلمة!"],
            weights: [
                {
                    multimediaScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    multimediaScore: 0
                },
        ]
    },
        {
            question: "لما تتفرج على فيلم، بتحلل القصة ولا تأكل فشار وتستمتع؟",
            choices: ["أحلل كل حاجة", "آكل فشار وأشوف!"],
            weights: [
                {
                    multimediaScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    multimediaScore: 0
                },
        ]
    },
        {
            question: "لما تصمم حاجة، هل تحب أن تكون مبدع ولا تمشي على النمط التقليدي؟",
            choices: ["مبدع، بحب التجديد!", "تقليدي، في الأمان!"],
            weights: [
                {
                    multimediaScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    multimediaScore: 0
                },
        ]
    },
        {
            question: "في مجموعة، هل تحب تكون المخرج ولا البطل؟",
            choices: ["المخرج، أنا صاحب الرؤية!", "البطل، الكل يشوفني!"],
            weights: [
                {
                    multimediaScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    multimediaScore: 0
                },
        ]
    },
        {
            question: "لما تكون مشغول، تحب تعمل إيه؟ تشغل موسيقى ولا تشوف فيديوهات مضحكة؟",
            choices: ["موسيقى، لرفع المعنويات", "فيديوهات، الضحك هو الحل!"],
            weights: [
                {
                    multimediaScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    multimediaScore: 0
                },
        ]
    },

    // Operations
        {
            question: "لما يكون في مشكلة في الشغل، تحب تحلها لوحدك ولا تطلب مساعدة؟",
            choices: ["أحلها لوحدي، عايز أكون بطل!", "أطلب مساعدة، أحسن!"],
            weights: [
                {
                    opsScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    opsScore: 0
                },
        ]
    },
        {
            question: "لما تلاقي خطة مش ناجحة، هل ترجع تخطط من جديد ولا تسيبها وتمشي؟",
            choices: ["أرجع أعيدها تاني", "أسيبها، عادي"],
            weights: [
                {
                    opsScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    opsScore: 0
                },
        ]
    },
        {
            question: "لما تتعامل مع مواعيد، هل تحب كل حاجة تكون منظمة ولا تمشي على مزاجك؟",
            choices: ["كل حاجة منظمة، عايز النظام!", "أحب أكون مرن، الحياة مفاجآت!"],
            weights: [
                {
                    opsScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    opsScore: 0
                },
        ]
    },
        {
            question: "لما تنجز شغل، بتحب تحس بإنجازك ولا تكمل بسرعة لللي بعده؟",
            choices: ["أحب أحتفل بإنجازي", "أكمل بسرعة، مش فاضي!"],
            weights: [
                {
                    opsScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    opsScore: 0
                },
        ]
    },
        {
            question: "في الشغل، هل تحب تكون هجومي ولا دفاعي؟",
            choices: ["هجوم، لازم أتحرك!", "دفاع، أراقب كل حاجة!"],
            weights: [
                {
                    opsScore: +3,
                    otherScore: 0
                },
                {
                    otherScore: +3,
                    opsScore: 0
                },
        ]
    },

        // Presentation
        {
            question: "لما تقدم عرض، بتحب تقرأ من ورقة ولا تتكلم بحرية؟",
            choices: ["أقرأ، عايز أكون دقيق", "أتحرك وأعمل دراما!"],
            weights: [
                {
                    presentationScore: +3,
                    otherScore: 0
                }, // Presentation
                {
                    otherScore: +3,
                    presentationScore: 0
                }, // Others
        ]
    },
        {
            question: "لما حد يسألك سؤال محرج في العرض، بتقول إيه؟",
            choices: ["نرجع لموضوعنا", "دا سؤال صعب، محتاج وقت أفكر!"],
            weights: [
                {
                    presentationScore: +3,
                    otherScore: 0
                }, // Presentation
                {
                    otherScore: +3,
                    presentationScore: 0
                }, // Others
        ]
    },
        {
            question: "لما تحضر عرض لحد، بتحب تاكل تسالي ولا تركز في الكلام؟",
            choices: ["أركز جامد", "أركز بس، مع شوية تسالي!"],
            weights: [
                {
                    presentationScore: +3,
                    otherScore: 0
                }, // Presentation
                {
                    otherScore: +3,
                    presentationScore: 0
                }, // Others
        ]
    },
        {
            question: "لما تحتاج تستخدم باوربوينت، بتحب القوالب الجاهزة ولا تعمل تصميم جديد؟",
            choices: ["قوالب جاهزة، سهلة وسريعة", "تصميم جديد، أريد أن أكون مميز!"],
            weights: [
                {
                    presentationScore: +3,
                    otherScore: 0
                }, // Presentation
                {
                    otherScore: +3,
                    presentationScore: 0
                }, // Others
        ]
    },
        {
            question: "لو العرض في مكان غريب، هل تحب تتأقلم بسرعة ولا تحس أن الدنيا قلبت عليك؟",
            choices: ["أتعامل مع الوضع", "دا مش مكاني، أنا عايز أروح!"],
            weights: [
                {
                    presentationScore: +3,
                    otherScore: 0
                }, // Presentation
                {
                    otherScore: +3,
                    presentationScore: 0
                }, // Others
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

    document.getElementById('begin-quiz').addEventListener('click', function () {
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
