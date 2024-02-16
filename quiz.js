var myQuestions = [
	{
		question: "Hvor mange burgere blev der solgt i 2010?",
		answers: {
			a: '2 Millioner ',
			b: '5 Millioner ',
			c: '58 Millioner '
		},
		correctAnswer: 'c',
        image: 'images/forside1.jpeg', // Add the image property
        class: 'midtbilledequiz1',
        altText: 'burgerebillede',
        
	},
	{
		question: "Hvem er klovnen på billedet?",
		answers: {
			a: 'Ronald mcdonald ',
			b: 'Pjævert ',
			c: 'Mark lefever '
		},
		correctAnswer: 'a',
		image: 'images/ronald mcdunald.jpeg', // Add the image property
        class: 'midtbilledequiz2',
        altText: 'klovnebillede',
        
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

		function showQuestions(questions, quizContainer){
            // we'll need a place to store the output and the answer choices
            var output = [];
            var answers;
        
            // for each question...
            for(var i=0; i<questions.length; i++){
                
                // first reset the list of answers
                answers = [];
        
                // for each available answer to this question...
                for(letter in questions[i].answers){
        
                    // ...add an html radio button
                    answers.push(
                        '<label>'
                            + '<input type="radio"  name="question'+i+'" value="'+letter+'">    '
                            + letter + ': '
                            + questions[i].answers[letter]
                           
                        + '</label>'

                    );
                }
        
                // add this question and its answers to the output
                output.push(
                    questions[i].question + '<img class="' + questions[i].class + '" src=" ' + questions[i].image + '" alt="' + questions[i].altText + '" >' 
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
                
            }
        
            // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
            
        }
        

        function showResults(questions, quizContainer, resultsContainer){
	
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
            
            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;
            
            // for each question...
            for(var i=0; i<questions.length; i++){
        
                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                
                // if answer is correct
                if(userAnswer===questions[i].correctAnswer){
                    // add to the number of correct answers
                    numCorrect++;
                    
                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else{
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }
        
            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
       
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);



let spinning = false;

const wheelSections = [
    { prize: "en Cheeseburger", startAngle: 0, endAngle: 60 },
    { prize: "en lille Cola", startAngle: 60, endAngle: 120 },
    { prize: "en lille Pommes Frites", startAngle: 120, endAngle: 180 },
    { prize: "en Sundae", startAngle: 180, endAngle: 240 },
    { prize: "en kop Filterkaffe", startAngle: 240, endAngle: 300 },
    { prize: "3 stk. Chili Cheese Tops", startAngle: 300, endAngle: 360 }
];

function spinWheel(spinCount, spinsCompleted = 0) {
    if (!spinning && spinsCompleted < spinCount) {
    spinning = true;

const randomAngle = Math.floor(Math.random() * 360);

const wheel = document.getElementById('wheel');

wheel.style.transition = 'transform 2s ease-in-out';
wheel.style.transform = `rotate(${randomAngle}deg)`;
   
setTimeout(() => {
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';

const normalizedAngle = (randomAngle + 360) % 360;
const winningSection = wheelSections.find(section => 
    normalizedAngle >= section.startAngle && normalizedAngle < section.endAngle
    );

const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = `Tillykke! Du har vundet ${winningSection.prize}`;

const popup = document.getElementById('popup');
    popup.style.display = 'block';

setTimeout(() => {
    popup.style.display = 'none';
    spinning = false;

        spinWheel(spinCount, spinsCompleted + 1);
    }, 2000);
}, 2000); 
}
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

const spinBtn = document.getElementById('spinBtn');
spinBtn.addEventListener('click', () => {
    spinWheel(1);
});
