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
      alert("The answer is" +" "+randomnumber+"!");
    });

// User submits guess into HTML form id = "guess", Program captures guess as a variable
submit.onclick = function compare(){
	guess = document.getElementById("guess").value;
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
	else if (guess>randomnumber){
		$('.low').fadeIn('slow');
		$('.low').fadeOut('slow');
		$('.low').fadeIn('slow');
		$('.low').fadeOut('slow');
		}
	else if(guess<randomnumber){
		$('.high').fadeIn('slow');
		$('.high').fadeOut('slow');
		$('.high').fadeIn('slow');
		$('.high').fadeOut('slow');
		}
	}

});


//	$('#submit').click(function(submit){
//		var submit = document.getElementById("submit");
//		var guess = document.getElementById("guess").value;
//		console.log(guess);
//	}); 







// Program compares Guess with answer
		// If Guess<Answer, program flashes  "Higher"
		// Else if Guess>Answer, program returns "Lower"
		// else if Guess===Answer, program returns "Correct!"
