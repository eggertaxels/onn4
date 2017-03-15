"use strict";

	let elDiv = document.getElementById('myDiv'); 	

	function Question(question, answers, correctAnswer) {
		this.question = question; 	
		this.answers = answers; 					
		this.correctAnswer = correctAnswer; 	
	}

	let questions = [
				new Question('Hvad er graent?', ['gras', 'himininn', 'svartur veggur', 'simpsons'], 'gras'),
				new Question('Hvad heitir mikki meira en mikki?', ['Hus', 'Mus', 'Lus'], 'Mus'),
				new Question('Hvad eru margir stafir í 3?', ['1', '2', '3'], '1'),
				new Question('Hvad geltir?', ['kottur', 'hundur', 'Hamstur', 'Api'], 'hundur'),
		];

  
	function shuffleArray(array) {
	 let m = array.length, t, i;
	 while (m) {
			 i = Math.floor(Math.random() * m--);
			 t = array[m];
			 array[m] = array[i];
			 array[i] = t;
	 }
	}

	shuffleArray(questions);  
  

	Question.prototype.getTemplate = function(){
	 	let tmplAnswers = "";
	 	for(let i = 0; i < this.answers.length; i++) {
      if(this.answers[i] == this.correctAnswer)
      {
        tmplAnswers += "<div id='correct'>" + this.answers[i] + "</div>";
      }
      else 
      {
	 		   tmplAnswers += "<div id='active'>" + this.answers[i] + "</div>";
      }
	 	}
	 	return "<h2 id='text'>" + this.question + "</h2>" + tmplAnswers;	
	};
  

  var teljari = 0;
  
  var score = 0;
  var wrongAnswers = 0;
      
	elDiv.innerHTML = questions[teljari].getTemplate();
        var bigDiv = document.getElementById('myDiv');
        var bigText = document.getElementById('text');


elDiv.addEventListener('click', function(e) {
   var elCorrectAnswer = document.getElementById('correct');
  if(e.target == elCorrectAnswer) 
  {
    e.target.style.backgroundColor = "green";
    score++;
		teljari++;
    alert("Rétt");
	}
	else if(e.target === bigDiv || e.target === bigText)
		{
			e.target.style.backgroundColor = "none";
			teljari === teljari;
			alert("Reyndu aftur.");
		}
  else 
  {
    e.target.style.backgroundColor = "red";
    wrongAnswers++;
		teljari++;
    alert("Rangt");
  }
    elDiv.innerHTML = questions[teljari].getTemplate();
});
  
elDiv.addEventListener('click', function(e) {
  if(teljari == 4) {
    elDiv.innerHTML = "";
    document.write("Rétt svör: ", score, "<br>", "Röng svör: ", wrongAnswers);
  }
});