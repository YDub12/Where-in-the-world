// Initial data to be built for the quiz to take 
let quizData = {
    europe: [
        { country: "France", capital: "Paris"},
        { country: "Germany", capital: "Berlin" },
        { country: "Spain", capital: "Madrid" },
        { country: "Italy", capital: "Rome" },
        { country: "United Kingdom", capital: "London" },
        { country: "Netherlands", capital: "Amsterdam" },
        { country: "Belgium", capital: "Brussels" },
        { country: "Sweden", capital: "Stockholm" },
        { country: "Norway", capital: "Oslo" },
        { country: "Finland", capital: "Helsinki" },
        { country: "Denmark", capital: "Copenhagen" },
        { country: "Austria", capital: "Vienna" },
        { country: "Switzerland", capital: "Bern" },
        { country: "Poland", capital: "Warsaw" },
        { country: "Greece", capital: "Athens" }
    ],
    africa: [
        {country: "Nigeria", capital: "Abuja"},
    ],
    asia: [
        {country: "Japan", capital: "Tokyo"},
    ]
};

// variable to be set for scores
let selectedRegion = '';
let currentQuestionIndex = 0;
let score = 0;

// function to start quiz 
function startQuiz(region) {
    selectedRegion = region;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('region').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    loadQuestion();
}

//function to load question 
function loadQuestion() {
    let questionElement = document.getElementById('question-text');
    let optionsList = document.getElementById('options-list');

    questionElement.textContent = `What is the capital of ${quizData[selectedRegion][currentQuestionIndex].country}?`;
    optionsList.innerHTML = '';

    let options = shuffleArray(quizData[selectedRegion][currentQuestionIndex].capital, ...getRandomCapitals());

    options.forEach(options => {
        let list = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        let label = document.createElement('label');
        label.textContent = option;

        list.appendChild(input);
        list.appendChild(label);
        optionsList.appendChild(list);
    });
}   

// function to randomise the question order and ignore the correct answer
function getRandomCapitals() {

}

// function to select from the array in a random order
function shuffleArray(array) {

}

// load next question 
function nextQuestion() {

}

// to show results 
function showResults() {

}

// to restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('region').style.display = 'block';
}