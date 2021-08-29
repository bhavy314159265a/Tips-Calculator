class Tips { 																	 // Tips class with all methods and properties

	getValues(){                                               					// method to get the value from DOM and store it
		this.bill = Number(document.getElementById("bill").value).toFixed(2); // convert to number with two decimal places
	 	this.tipPerCent =  Math.floor(document.getElementById("tip").value);    // decimal to natural number
	 	this.noOfPeople = Math.floor(document.getElementById("people").value); 
	}

	calculateTips(){														    //method to store and calculate tip
		this.tipPerPerson = ((this.bill*this.tipPerCent)/100)/this.noOfPeople;
		this.totalPerPerson = (this.bill/this.noOfPeople)+this.tipPerPerson;
	}

	updateValues(){																// method to write values on DOM
		document.getElementById("tipPP").innerHTML = "$"+this.tipPerPerson.toFixed(2);
		document.getElementById("totalPP").innerHTML = "$"+this.totalPerPerson.toFixed(2);
	}

} 


function calculateTip(){                                             // method that will be called on clicking calculate

	let tip1 = new Tips();
	tip1.getValues();

	if (tip1.bill==""||tip1.tipPerCent==""||tip1.noOfPeople=="") {  //error message if there are empty fields present
		alert("Please complete all required fields" );
		return;
	}
	if (tip1.bill<0||tip1.tipPerCent<0||tip1.noOfPeople<0) { 	    //error message if there are negative values are entered
		alert("Input value or values cannot be negative" );
		return;
	}
 
	if (tip1.noOfPeople==0){                                       //error message if no of people entered are 0
		alert("No of people cannot be 0");
		return;
	}

	document.getElementById("res").style.display = "block";        //show tip amount
	tip1.calculateTips();
	tip1.updateValues();
}


document.addEventListener("DOMContentLoaded", function(){    		// method to execute after DOM is loaded

    document.getElementById("res").style.display = "none";          //hide tip amount on load

    var go = document.getElementById("calc");
	var billInput = document.getElementById("bill");
	var tipInput = document.getElementById("tip");
	var peopleInput = document.getElementById("people");

	billInput.addEventListener("keyup", function(event) {			//methods to trigger the button's click event when the Enter key is pressed inside the text box
    	event.preventDefault();
    	if (event.keyCode == 13)
       		go.click();
	});
	tipInput.addEventListener("keyup", function(event) {
    	event.preventDefault();
    	if (event.keyCode == 13)
        	go.click();
	});
	peopleInput.addEventListener("keyup", function(event) {
    	event.preventDefault();
    	if (event.keyCode == 13)
        	go.click();
	});
});

