//birta spurningu
function myFunction1() {
    var newEl = document.createElement("li");
	var spurning = document.createTextNode(questions[0].getTemplate()); 
	newEl.appendChild(spurning); 
    document.body.appendChild(newEl);
}
/* Template */
	Question.prototype.getTemplate = function(){
	 	let tmplAnswers = "";
	 	for(let i = 0; i < this.answers.length; i++) {
	 		   tmplAnswers += " " + this.answers[i] + ", ";
	 	}
	 	return   this.question + tmplAnswers;
	 		
	};




function Question(question, answers, correctAnswer) {
		this.question = question; 					/* Spurning (strengur) */
		this.answers = answers; 					/* fylki með svarmöguleikum */
		this.correctAnswer = correctAnswer; 		/* Rétt svar (strengur) */
	}

/* Gögn (fylki af objectum) */
	let questions = [
				new Question('Hvaða ár var hljómsveitin stofnuð?', ['2008', '2009', '2010', '2011'], '2009'),
				new Question('Hvað heitir fyrsta plata hljómsveitarinnar?', ['Baldur', 'Með Vættum', 'Vögguvísur Yggdrasils'], 'Baldur'),
				new Question('Hvað eru margir gítarleikarar í hljómsveitinni?', ['3', '4'], '3'),
				new Question('Hvað heitir trommuleikarinn?', ['Baldur', 'Jón Geir', 'Björgvin', 'Gunnar'], 'Jón Geir'),
		];



function shuffleArray(array) {
	 let m = array.length, t, i;
	 // While there remain elements to shuffle…
	 while (m) {
	 // Pick a remaining element…
	 i = Math.floor(Math.random() * m--);
	 // And swap it with the current element.
	 t = array[m];
	 array[m] = array[i];
	 array[i] = t;
	 }
	 return array;
}


var shuffledArray = shuffleArray(questions);
