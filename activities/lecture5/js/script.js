// Create an array of possible answers
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
  
// Create a function to fetch the question the user has asked 	
// Our function should also check from an empty value
function askQuestion(){
    const userQuestion = document.getElementById("userQuestion").value.trim();

    if (userQuestion === ""){
        alert("Please enter a valid question!");
        return;
    }

    // Select a random answer from your array 
    const isMagic8Ball = Math.random() < 0.5; 
    let answer;
    let answerType;

    if (isMagic8Ball){
        const random8Ball = Math.floor(Math.random()*magic8BallAnswers.length);
        answer = magic8BallAnswers[random8Ball];
        answerType = "Magic 8 Ball Answer!";
    } else{
        const randomCookie = Math.floor(Math.random()*fortuneCookieSayings.length);
        answer = fortuneCookieSayings[randomCookie];
        answerType = "Fortune Cookie Answer!"
    }
	
    // Display the question and answer back to the user
    const answerOutput = document.getElementById("answer");
    answerOutput.textContent = `(${answerType}) Answer: ${answer}`;

    // And, log the question and answer to the console
    console.log(`Question: ${userQuestion}`);;
    console.log(`(${answerType}) Answer: ${answer}`);
}
  