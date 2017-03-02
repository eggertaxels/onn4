var theSpurning = document.getElementById("question");
var theSpurning2 = document.getElementById("question2");
var theSpurning3 = document.getElementById("question3");

//object fyrir spurningu1
var spurning = [

	{	
		question:   "Hvad er 8 * 8",     
	 	svarmoguleiki:   [ "10", "64", "20","55"],
	 	rettsvar: "64"
	}
];


//object fyrir spurningu2
var spurning2 = [

	{	
		question2:   "Hvad er 1 + 1?",     
	 	svarmoguleiki2:   [ "2", "11", "-1","0"],
	 	rettsvar2: "2"
	}
];

//object fyrir spurningu3
var spurning3 = [

	{	
		question3:   "Hvad hefur fjórar fætur og geltir?",     
	 	svarmoguleiki3:   [ "hundur", "köttur", "api","belja"],
	 	rettsvar3: "hundur"
	}
];



//svona birtast spurningarnar
var spurning1 = spurning[0].question +  "<br> <br>svarmoguleikar:  <br><br>"  +
spurning[0].svarmoguleiki.join("<br>") + " <br> rettsvar: " + spurning[0].rettsvar;	// her er spurning1 buin til


var spurning2birta = spurning2[0].question2 +  "<br> <br>svarmoguleikar:  <br><br>"  +
spurning2[0].svarmoguleiki2.join("<br>") + " <br> rettsvar: " + spurning2[0].rettsvar2;	// her er spurning1 buin til


var spurning3birta = spurning3[0].question3 +  "<br> <br>svarmoguleikar:  <br><br>"  +
spurning3[0].svarmoguleiki3.join("<br>") + " <br> rettsvar: " + spurning3[0].rettsvar3;	// her er spurning1 buin til


theSpurning.innerHTML = spurning1;//birta spurningu i html skra 
//theSpurning2.innerHTML = spurning2birta;//birta spurningu2 i html skra 
//theSpurning3.innerHTML = spurning3birta;//birta spurningu2 i html skra 