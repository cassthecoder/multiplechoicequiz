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
	this.choices = choices;
	this.points=points;
	}
}

var q1= new Question("What is 5+5?","10",[10,25,55],1);
var q2= new Question("What is 4x2?","8",[42,6,8],1);
var q3= new Question("What is 60/5?","12",[65,11,12],1);
var q4= new Question("What is the square root of 225?","15",[15,25,5],1);
var q5= new Question("What is 12+0?","12"[120,12,13],1);
var points=0;

document.getElementById("q1").innerHTML=q1.q;
document.getElementById("q2").innerHTML=q2.q;
document.getElementById("q3").innerHTML=q3.q;
document.getElementById("q4").innerHTML=q4.q;
document.getElementById("q5").innerHTML=q5.q;


function checkAnswer(){

	var choices = document.getElementsByName("answer1");
	for(var i=0;i<=choices.length;i++){
		if (choices[i].checked){
			if (choices[i].value == q1.answer){
				points++;
			}
		}
	}

	choices = document.getElementsByName("answer2");
	for(var j=0;j<=choices.length;j++){
		if (choices[j].checked){
			if (choices[j].value == q2.answer){
				points++;
			}
		}
	}

	choices = document.getElementsByName("answer3");
	for(var k=0;k<=choices.length;k++){
		if (choices[k].checked){
			if (choices[k].value == q3.answer){
				points++;
			}
		}
	}

	choices = document.getElementsByName("answer4");
	for(var l=0;l<=choices.length;l++){
		if (choices[l].checked){
			if (choices[l].value == q4.answer){
				points++;
			}
		}
	}
	
 	choices = document.getElementsByName("answer1");
	for(var m=0;m<=choices.length;m++){
		if (choices[m].checked){
			if (choices[m].value == q5.answer){
				points++;
			}
		}
	}

	document.getElementById("score").innerHTML="You have received " +points+ "/5 points";

}