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
        { country: "Egypt", capital: "Cairo" },
        { country: "South Africa", capital: "Pretoria" },
        { country: "Kenya", capital: "Nairobi" },
        { country: "Morocco", capital: "Rabat" },
        { country: "Ghana", capital: "Accra" },
        { country: "Ethiopia", capital: "Addis Ababa" },
        { country: "Uganda", capital: "Kampala" },
        { country: "Algeria", capital: "Algiers" },
        { country: "Tanzania", capital: "Dodoma" },
        { country: "Angola", capital: "Luanda" },
        { country: "Sudan", capital: "Khartoum" },
        { country: "Ivory Coast", capital: "Yamoussoukro" },
        { country: "Senegal", capital: "Dakar" },
        { country: "Tunisia", capital: "Tunis" }
    ],
    asia: [
        {country: "Japan", capital: "Tokyo"},
        { country: "China", capital: "Beijing" },
        { country: "India", capital: "New Delhi" },
        { country: "South Korea", capital: "Seoul" },
        { country: "Thailand", capital: "Bangkok" },
        { country: "Indonesia", capital: "Jakarta" },
        { country: "Pakistan", capital: "Islamabad" },
        { country: "Vietnam", capital: "Hanoi" },
        { country: "Malaysia", capital: "Kuala Lumpur" },
        { country: "Philippines", capital: "Manila" },
        { country: "Singapore", capital: "Singapore" },
        { country: "Saudi Arabia", capital: "Riyadh" },
        { country: "United Arab Emirates", capital: "Abu Dhabi" },
        { country: "Turkey", capital: "Ankara" },
        { country: "Iran", capital: "Tehran" }
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
    
    let options = shuffleArray([quizData[selectedRegion][currentQuestionIndex].capital, ...getRandomCapitals()]);
    
    options.forEach(option => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;
        
        let label = document.createElement('label');
        label.textContent = option;
        
        li.appendChild(input);
        li.appendChild(label);
        optionsList.appendChild(li);
    });
}   

// function to randomise the question order and ignore the correct answer
function getRandomCapitals() {
    let capitals = quizData[selectedRegion].map(item => item.capital);
    let randomCapitals = [];
    while (randomCapitals.length < 3) {
        let randomCapital = capitals[Math.floor(Math.random() * capitals.length)];
        if (!randomCapitals.includes(randomCapital) && randomCapital !== quizData[selectedRegion][currentQuestionIndex].capital) {
            randomCapitals.push(randomCapital);
        }
    }
    return randomCapitals;
}

// function to select from the array in a random order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// load next question 
function nextQuestion() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizData[selectedRegion][currentQuestionIndex].capital) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData[selectedRegion].length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Please select an answer!");
    }
}

// to show results 
function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `${score} / ${quizData[selectedRegion].length}`;
}

// to restart the quiz
function restartQuiz() {
    score = 0;
    selectedRegion = '';
    currentQuestionIndex = 0;
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('region').style.display = 'block';
}