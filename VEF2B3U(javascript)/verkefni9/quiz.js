
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
            new Spurning("hvada planeta er med vatn og livandi verur", ["jupiter","tunglid","florida","jord"],"jord"),
            new Spurning("1+1", ["7","8","2","17"],"2"),
            new Spurning("Hvad er rett?", ["rett","correct","akkurat","ekkirett"],"ekkirett"),
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
        
        /*for (i = 0; i < spurningar.length; i++) {
            elbirtaspurningu.innerHTML = spurningar[i].getTemplate();
        }*/
		//birta spurningu
var counter = 0;
        elbirtaspurningu.innerHTML = spurningar[counter].getTemplate();
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
            counter++;
			e.target.style.backgroundColor = "green";
            elbirtaspurningu.innerHTML = spurningar[counter].getTemplate();
		}
    else if(e.target === bigDiv || e.target === bigText)
		{
			e.target.style.backgroundColor = "none";
		}
	else{
        counter++;
		e.target.style.backgroundColor = "red";
        elbirtaspurningu.innerHTML = spurningar[counter].getTemplate();
	}  
}, false);