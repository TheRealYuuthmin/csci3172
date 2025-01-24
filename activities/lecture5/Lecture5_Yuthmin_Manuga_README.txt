# CSCI 3172 Activity - Lecture 5: Magic 8 Ball + Fortune Cookie

*Combines the functions of the magic 8 ball and fortune cookie generator into a single page

Date created: 23 Jan 2025

Last Modified: 23 Jan 2025

Lab URL: 
web.cs.dal.ca/~bandara/csci3172/activities/lecture5/index.html
https://git.cs.dal.ca/bandara/csci3172/-/tree/main/activities/lecture5?ref_type=heads

## Author: Manuga Yuthmin Wijesundara Bandara B00944453

## Built with: 

*java script
*HTML5
*CSS3

##Sources Used:

### File name: script.js

*lines 1 - 20
const magic8BallAnswers = [
    "It is certain.",
    "Without a doubt.",
    "You may rely on it.",
    "Yes definitely.",
    "It is decidedly so.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

Taken to implement an array of standard magic 8 ball responses from Magic 8 ball Answers (https://magic-8ball.com/magic-8-ball-answers/)

*lines 25 - 75
const fortuneCookieSayings = [
    "Do not be afraid of competition.",
  "An exciting opportunity lies ahead of you.",
  "You love peace.",
  "Get your mind set…confidence will lead you on.",
  "You will always be surrounded by true friends.",
  "Sell your ideas-they have exceptional merit.",
  "You should be able to undertake and complete anything.",
  "You are kind and friendly.",
  "You are wise beyond your years.",
  "Your ability to juggle many tasks will take you far.",
  "A routine task will turn into an enchanting adventure.",
  "Beware of all enterprises that require new clothes.",
  "Be true to your work, your word, and your friend.",
  "Goodness is the only investment that never fails.",
  "A journey of a thousand miles begins with a single step.",
  "Forget injuries; never forget kindnesses.",
  "Respect yourself and others will respect you.",
  "A man cannot be comfortable without his own approval.",
  "Always do right. This will gratify some people and astonish the rest.",
  "It is easier to stay out than to get out.",
  "Sing everyday and chase the mean blues away.",
  "You will receive money from an unexpected source.",
  "Attitude is a little thing that makes a big difference.",
  "Plan for many pleasures ahead.",
  "Experience is the best teacher.",
  "You will be happy with your spouse.",
  "Expect the unexpected.",
  "Stay healthy. Walk a mile.",
  "The family that plays together stays together.",
  "Eat chocolate to have a sweeter life.",
  "Once you make a decision the universe conspires to make it happen.",
  "Make yourself necessary to someone.",
  "The only way to have a friend is to be one.",
  "Nothing great was ever achieved without enthusiasm.",
  "Dance as if no one is watching.",
  "Live this day as if it were your last.",
  "Your life will be happy and peaceful.",
  "Reach for joy and all else will follow.",
  "Move in the direction of your dreams.",
  "Bloom where you are planted.",
  "Appreciate. Appreciate. Appreciate.",
  "Happy News is on the way.",
  "A closed mouth gathers no feet.",
  "He who throws dirt is losing ground.",
  "Borrow money from a pessimist. They don't expect it back.",
  "Life is what happens to you while you are busy making other plans.",
  "Help! I'm being held prisoner in a fortune cookie factory." 
];

Taken to implement an array of the fortune cookie responses from Best Ever Cookie Collection (https://www.best-ever-cookie-collection.com/fortune-cookie-sayings.html)

## AI tools used - OpenAI (ChatGPT)

###Prompt used: Create a Magic 8-Ball and Fortune Cookie generator combining their responses into a single web app.

### File name: script.js

lines 76 - 105
function askQuestion(){
    const userQuestion = document.getElementById("userQuestion").value.trim();

    if (userQuestion === ""){
        alert("Please enter a valid question!");
        return;
    }

    const isMagic8Ball = Math.random() < 0.5;
    let answer, answerType;

    if (isMagic8Ball){
        const randomIndex = Math.floor(Math.random() * magic8BallAnswers.length);
        answer = magic8BallAnswers[randomIndex];
        answerType = "Magic 8-Ball Answer";
    } else {
        const randomIndex = Math.floor(Math.random() * fortuneCookieSayings.length);
        answer = fortuneCookieSayings[randomIndex];
        answerType = "Fortune Cookie Saying";
    }

    const answerOutput = document.getElementById("answer");
    answerOutput.textContent = `${answerType}: ${answer}`;
    console.log(`Question: ${userQuestion}`);
    console.log(`${answerType}: ${answer}`);
}

Used to generate the main application logic, the code was modified to fix errors
