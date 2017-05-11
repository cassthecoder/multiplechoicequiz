// Requirements
// Use classes
// Use the prompt and alert methods to present your quiz
// Give the user 5 questions
// Each question has one possible answer from a list of answers (Give the user a minimum of 3 and no more than 5 choices)
// Assign points to each question and maintain a running total for the quiz
// If you allow the user to retake the question until they get it correct deduct 1 point each time they get the question wrong
// Bonus
// Setup multiple quizzes
// Store the quiz in local storage
// Use HTML to present your quiz
// Allow the user to create their own quizzes

class Question{
	constructor(q,answer, choices, points){
	this.q=q;
	this.answer = answer;
	this.points=points;
	}
}

var q1= new Question("What is 5+5?","10",1);
var q2= new Question("What is 4x2?","8",1);
var q3= new Question("What is 60/5?","12",1);
var q4= new Question("What is the square root of 225?","15",1);
var q5= new Question("What is 12+0?","12",1);

document.getElementById("q1").innerHTML=q1.q;
document.getElementById("q2").innerHTML=q2.q;
document.getElementById("q3").innerHTML=q3.q;
document.getElementById("q4").innerHTML=q4.q;
document.getElementById("q5").innerHTML=q5.q;




function checkAnswer(){

	var points =0;
	var questOne = document.getElementsByName("answer1");
	var questTwo = document.getElementsByName("answer2");
	var questThree = document.getElementsByName("answer3");
	var questFour = document.getElementsByName("answer4");
	var questFive = document.getElementsByName("answer5");

	for (var i = 0; i < questOne.length; i++) {
	    if (questOne[i].type == "radio") {
	        if(questOne[i].checked == true)
	        {
	        	if(questOne[i].value==q1.answer){
	        		points++;
	        	}
	        }
	    }
	}

	for (var i = 0; i < questTwo.length; i++) {
	    if (questTwo[i].type == "radio") {
	        if(questTwo[i].checked == true)
	        {
	        	if(questTwo[i].value==q2.answer){
	        		points++;
	        	}
	        }
	    }
	}

	for (var i = 0; i < questThree.length; i++) {
	    if (questThree[i].type == "radio") {
	        if(questThree[i].checked == true)
	        {
	        	if(questThree[i].value==q3.answer){
	        		points++;
	        	}
	        }
	    }
	}

	for (var i = 0; i < questFour.length; i++) {
	    if (questFour[i].type == "radio") {
	        if(questFour[i].checked == true)
	        {
	        	if(questFour[i].value==q4.answer){
	        		points++;
	        	}
	        }
	    }
	}

	for (var i = 0; i < questFive.length; i++) {
	    if (questFive[i].type == "radio") {
	        if(questFive[i].checked == true)
	        {
	        	if(questFive[i].value==q5.answer){
	        		points++;
	        	}
	        }
	    }
	}

	document.getElementById("score").innerHTML="You have received " +points+ "/5 points";

}