"use strict";

	let elContainer = document.getElementById('myDiv'); 	

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
  

  var $counter = 0;
  
  var score = 0;
  var wrongAnswers = 0;
      
	elContainer.innerHTML = questions[$counter].getTemplate();
        var bigDiv = document.getElementById('myDiv');
        var bigText = document.getElementById('text');


elContainer.addEventListener('click', function(e) {
   var elCorrectAnswer = document.getElementById('correct');
  if(e.target == elCorrectAnswer) 
  {
    e.target.style.backgroundColor = "green";
    score++;
		$counter++;
    alert("Rétt");
	}
	else if(e.target === bigDiv || e.target === bigText)
		{
			e.target.style.backgroundColor = "none";
			$counter === $counter;
		}
  else 
  {
    e.target.style.backgroundColor = "red";
    wrongAnswers++;
		$counter++;
    alert("Rangt");
  }
    elContainer.innerHTML = questions[$counter].getTemplate();
});
  
elContainer.addEventListener('click', function(e) {
  if($counter == 4) {
    elContainer.innerHTML = "";
    document.write("Rétt svör: ", score, "<br>", "Röng svör: ", wrongAnswers);
  }
});