
	//Dom element
	let elbirtaspurningu = document.getElementById('myDiv'); 	

//smiÃ°ur fyrir spurningu
	function Spurning(spurning, moguleikar, svar) {
		this.spurning = spurning; 					/* Spurning (strengur) */
		this.moguleikar = moguleikar; 					/* fylki meÃ° svarmÃ¶guleikum */
		this.svar = svar; 		/* RÃ©tt svar (strengur) */
	}

// gogn (fylki af objectum) 
	let spurningar = [
			new Spurning("hvad hefur fjorar lappir og geltir", ["hundur","kottur","svin","belja"],"hundur"),
		];

// Template
	Spurning.prototype.getTemplate = function(){
	 	let tmplmoguleikar = "";
	 	for(let i = 0; i < this.moguleikar.length; i++) {
	 	if(this.moguleikar[i] === this.svar)
            {
                tmplmoguleikar += "<div id='rett'>" +  this.moguleikar[i] + "</div>";
            }
            else{
	 		    tmplmoguleikar += "<div id='id'" + i + "'>" +  this.moguleikar[i] + "</div>";
            }
	 	}
	 	return "<h1 id='text'>" + this.spurning + "</h1>" + tmplmoguleikar;
	 		
	};	

		//birta spurningu
		elbirtaspurningu.innerHTML = spurningar[0].getTemplate();
		var elRettsvar = document.getElementById('rett');
        var bigDiv = document.getElementById('myDiv');
        var bigText = document.getElementById('text');
/*document.getElementById("id2").onclick = function() {litur3()};
        function litur3() {
    document.getElementById("id2").style.backgroundColor = "red";
}*/
elbirtaspurningu.addEventListener("click",function(e) {
	// e.target was the clicked element
	if(e.target === elRettsvar)
		{
			e.target.style.backgroundColor = "green";
		}
    else if(e.target === bigDiv || e.target === bigText)
		{
			e.target.style.backgroundColor = "none";
		}
	else{
		e.target.style.backgroundColor = "red";
	}  
}, false);