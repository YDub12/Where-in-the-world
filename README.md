# Where in the World?

[[View the live site here](https://ydub12.github.io/Where-in-the-world/)] 

![Am I responsive](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/Am%20I%20Responsive.PNG)

This project is a chance for me to build a quiz game featuring capital cities of majot countries in three continents. 


## Features
Provide an engaging and challenging quiz for users to test their knowledge of countries and their capitals.

Mix up the order of the countries presented so that people will experience a new challenge each time they come to the site.

Responsive design that limits the number of clicks they have to make.

The page moves the cursor to the input field automatically.

- _Quiz landing page_ 

![quiz](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/Landing%20page.PNG)

Allows users to set up a username so it feels more personalised.

There are options for selecting a region: Europe, Asia and Africa. This is to provide the users with a variety of challenges.

Quiz interface 
This features a user input field and a question, the goal is to see if the user knows the capitals and their spellings.

![question](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/Question%20display.PNG)

There are several messages after the question has been answered to let the user know how they have done. 
![correct](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/Correct%20response.PNG)

![incorrect](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/Error%20message.PNG)

### Features left to Implement 
Add Other continents.

Create a high scores section.

Add a timer to increase the feeling of jeopardy.

Break up some of the functions to simplify their use. 

## Testing 

The website was tested on Google Chrome and Microsoft Edge.

The website was checked on mobile, laptop and desktop.

There were no links between pages as all the content is held on one html file, but the buttons were tested numerous times with each stage of the functions being created. 

Developer tools were used to model and make amendments and several console.
logs were used throughout the code to ensure that the functions were operating correctly. 

JSHint was used to check the code for any missed semi-colons or undeclared variables. 

## Accessibility 
The Lighthouse Report can be seen here :

![Lighthouse](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/Lighthouse%20report.PNG)

## Bugs
Initial issues that were detected included:

- The arrays were not shuffling the questions into a random order, using console log to identify the problem and using the shuffle array function 

- The buttons not creating the questions and moving through the array 
Additional issues found with the scores not incrementing 

Outstanding bugs include:

- Issues around the usernames not saving across different environments

## Design 
My initial plan was to generate questions with randomly generated options from the array and have radio options attached. 

This was modified for two reasons:
1. I was struggling to consistently get the correct answer being pulled through to increment the score
2. I thought it was also a little too easy with the options presented.

So I altered the overall feel of it changing it to text boxes to increase the difficulty and to allow an easier score calculation

### Validator Testing 

The JavaScript was passed through JSHint 

[JSHint](https://raw.githubusercontent.com/YDub12/Where-in-the-world/main/assets/images/JSHint%20review.PNG)

The HTML was passed through the official checker [W3C](https://validator.w3.org/)

The CSS was passed through the official checker [CSS](https://jigsaw.w3.org/css-validator/)

## Deployment
GitHub Pages used to deploy the live version of the website. 

1. Log in to GitHub 
2. Locate the repository 
3. Go to Settings page and check the default branch 
4. Check for "Pages" in the side bar 
5. Select the root directory and save 
## Credits 
•	The README template was provided by Code Institute ([template](https://github.com/Code-Institute-Org/ci-full-template))

Content – written by the developer 

