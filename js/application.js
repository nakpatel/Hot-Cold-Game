$(function(){
//Show/Hide Cover Text On Hover
	$('.cover').on('mouseenter', function(){
		event.preventDefault();
		$('.game1').hide();
		$('.game2').hide();
	});
	$('.cover').on('mouseleave', function(){
		event.preventDefault();
		$('.game1').show();
		$('.game2').show();
	});
	$('.cover').on('mouseenter', function(){
		event.preventDefault();
		$('.covertext').hide();
	});
	$('.cover').on('mouseleave', function(){
		event.preventDefault();
		$('.covertext').show();
		$('.low').hide();
		$('.high').hide();
	});	

// Program Generate random number for guessing between 1 - 100 + Sets Global Variables
		var poolsize = 100;
		// Program stores random number as a variable
		var randomnumber = Math.floor(Math.random()*poolsize) + 1;
		var submit = document.getElementById("submit");
		var guess = document.getElementById("guess").value;

// Program resets randomnumber when New Game button is clicked
  $('.button.newgame').click(function(reset){
  	location.reload();
    });
// Program returns Answer when Answer button is clicked
    $('.button.red').click(function(answer){
    	if(confirm("Are you sure you want the answer?")==false){
      	return;
      	}
      	else if(confirm("Are you really really sure you want the answer?")==false){
      	return;
      	}
      else{
	      alert("The answer is" +" "+randomnumber+"!");
	      $('.low').hide();
		  $('.high').hide();
	      $('.loser').fadeIn('slow');
	      $('.loser').fadeOut('slow');
	      $('.loser').fadeIn('slow');
	      $('.loser').fadeOut('slow');
	      $('.loser').fadeIn('slow');
	      $('.loser').fadeOut('slow');
  	  }
    });

// Enter Key Submits Form
	document.getElementById("guess").onkeypress= function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			submit.click();
		}
	} 

// User submits guess into HTML form id = "guess", Program captures guess as a variable
submit.onclick = function compare(){
	guess = document.getElementById("guess").value;
	$('.high').hide();
	$('.low').hide();
	if (guess==randomnumber){
		$('.winner').fadeIn();
		$('.winner').fadeOut();
		$('.winner').fadeIn();
		$('.winner').fadeOut();
		$('.winner').fadeIn();
		$('.winner').fadeOut();
		$('.winner').fadeIn();
		console.log("You Win");
		}
	else if (guess>100||guess<1){
		$('.guesstype').fadeIn();
		$('.guesstype').fadeOut();
		$('.guesstype').fadeIn();
		$('.guesstype').fadeOut();
		$('.guesstype').fadeIn();
		$('.guesstype').fadeOut();
		$('.guesstype').fadeIn();
		$('.guesstype').fadeOut();
	}
	else if (guess>randomnumber){
		$('.low').fadeIn('slow');
		}
	else if(guess<randomnumber){
		$('.high').fadeIn('slow');
		}
	}

});
