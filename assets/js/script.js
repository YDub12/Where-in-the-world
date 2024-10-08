//Event listeners and handling the form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('username-form');
    const usernameInput = document.getElementById('username-input');
    const welcomeMessage = document.getElementById('welcome-message');

    // Function to store the username (e.g., in a variable or localStorage)
    function storeUsername(username) {
        // Example: Store the username in localStorage
        let usedUsernames = JSON.parse(localStorage.getItem('usedUsernames')) || [];
        console.log("Stored Usernames",usedUsernames);
        usedUsernames.push(username);
        console.log(`Adding username "${username}" to the list`);
        localStorage.setItem('usedUsernames', JSON.stringify(usedUsernames));

        localStorage.setItem('username', username);
        console.log(`Username "${username}" stored successfully`);
    }
    function isUsernameTaken(username) {
        let usedUsernames = JSON.parse(localStorage.getItem('usedUsernames')) || [];
        console.log(`Checking if username "${username}" is already taken`); // Log the check for existing username
        return usedUsernames.includes(username);
    }

    // To handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const username = usernameInput.value.trim();

        if (username && !isUsernameTaken(username)) {
            storeUsername(username);
            welcomeMessage.textContent = `Welcome, ${username}!`;
            usernameInput.value = ''; // Clear the input field
            document.getElementById('username-form').style.display = 'none';
        } else if (isUsernameTaken(username)) {
            welcomeMessage.textContent = 'Username is already taken. Please choose a different one.';
        } else {
            welcomeMessage.textContent = 'Please enter a valid username.';
        }
        function logStoredData() {
            // Retrieve and log the list of used usernames
            let usedUsernames = JSON.parse(localStorage.getItem('usedUsernames')) || [];
            console.log("Stored Usernames:", usedUsernames); // Log the list of stored usernames
            
            // Retrieve and log the current username
            let currentUsername = localStorage.getItem('username');
            console.log("Current Username:", currentUsername); // Log the current username
        }
    });

    // to monitor for enter key being pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (document.getElementById('submit-button').style.display === 'block') {
                checkAnswer();  // Trigger submit answer
            } else if (document.getElementById('next-button').style.display === 'block') {
                nextQuestion(); // Trigger next question
            }
        }
    });
  // Optionally: Load and display the stored username on page load
  let storedUsername = localStorage.getItem('username');
  if (storedUsername) {
      welcomeMessage.textContent = `Welcome back, ${storedUsername}!`;
      form.style.display = 'none';
  }
});

// Initial data to be built for the quiz to take 
let quizData = {
    europe: [
        { country: "France", capital: "Paris" },
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
let questions = '';

// function to select from the array in a random order
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to start the quiz for a selected region
function startQuiz(region) {
    currentRegion = region;
    questions = shuffleQuestions(quizData[region]);
    console.log("Shuffled Questions", questions); // to debug and ensure the array has shuffled correctly 
    currentQuestionIndex = 0;
    score = 0;

    //to display the Quiz area
    document.getElementById('region-selection').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';

    //call the next function in the list
    showQuestion();
}

//function to load question 
function showQuestion() {
    let questionText = document.getElementById('question-text');
    let currentQuestion = questions[currentQuestionIndex];

    console.log("Current Question:", currentQuestion);
    
    if (currentQuestion) {
        questionText.textContent = `What is the capital of ${currentQuestion.country}?`;
        document.getElementById('answer-input').value = '';
        document.getElementById('answer-input').focus();
        document.getElementById('submit-button').style.display = 'block';
        document.getElementById('next-button').style.display = 'none';
    }
}
// Function to handle the 'Submit Answer' button click
function checkAnswer () {
    let userAnswer = document.getElementById('answer-input');
    let userInput = userAnswer.value.trim().toLowerCase(); // to convert the user's answer to lower case 
    console.log("User Input", userInput);
    let correctAnswer = questions[currentQuestionIndex].capital.toLowerCase(); // to convert the answer to lower case to ensure exact matches for spelling
    console.log("Correct Answer", correctAnswer);
    let feedback = document.getElementById('feedback');

    if (userInput === correctAnswer) {
        feedback.textContent = 'Congrats you did it!';
        feedback.style.color = 'green';
        score++;
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('submit-button').style.display = 'none';
    } else {
        feedback.textContent = `Unlucky, you said ${userInput}, the correct answer is ${correctAnswer}`;
        feedback.style.color = 'red';
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('submit-button').style.display = 'none';
    }

    console.log("Current Score", score); // to ensure the score is incremented properly
    console.log("Next Question Index:", currentQuestionIndex + 1); // to check that the index will increase by one 
}
// load next question 
function nextQuestion() {

    document.getElementById('feedback').textContent = '';
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length && currentQuestionIndex < 5) {
        // to call the function again and ensure that the data variables are blank
        showQuestion();
        userAnswer = '';
        correctAnswer = '';
    } else {
        showResult();
    }
}

// to show results 
function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `${score} / 5`;
}

// to restart the quiz
function restartQuiz() {
    score = 0;
    selectedRegion = '';
    currentQuestionIndex = 0;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('region-selection').style.display = 'block';
}