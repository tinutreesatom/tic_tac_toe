var i=0;
var playerflag=1;//flag for setting the players
var count=0;//No.of moves
var xCount=0;
var oCount=0;

$('document').ready(function(){
	
	$('.btn').click(function(e){
		
		
		if(playerflag===1)//for player 1
		{
			changeColorBlue(e);
			playerflag=2;
		}
		else if(playerflag===2)//for player2
		{
			//console.log("player2 in function="+player2);
			changeColorRed(e);
			playerflag=1;
		}
		//to checking the chances of winning
		//for player 1 winning
		var blue1=$("#one.blue,#two.blue,#three.blue").length===3;
		var blue2=$("#four.blue,#five.blue,#six.blue").length===3;
		var blue3=$("#seven.blue,#eight.blue,#nine.blue").length===3;
		
		var blue4=$("#one.blue,#four.blue,#seven.blue").length===3;
		var blue5=$("#two.blue,#five.blue,#eight.blue").length===3;
		var blue6=$("#three.blue,#six.blue,#nine.blue").length===3;
		
		var blue7=$("#one.blue,#five.blue,#nine.blue").length===3;
		var blue8=$("#three.blue,#five.blue,#seven.blue").length===3;
		
		//player 2 winning 
		
		var red1=$("#one.red,#two.red,#three.red").length===3;
		var red2=$("#four.red,#five.red,#six.red").length===3;
		var red3=$("#seven.red,#eight.red,#nine.red").length===3;
		
		var red4=$("#one.red,#four.red,#seven.red").length===3;
		var red5=$("#two.red,#five.red,#eight.red").length===3;
		var red6=$("#three.red,#six.red,#nine.red").length===3;
		
		var red7=$("#one.red,#five.red,#nine.red").length===3;
		var red8=$("#three.red,#five.red,#seven.red").length===3;
		
		
		//checks for the chances of player 1
		if(blue1 || blue2 ||blue3 ||blue4 || blue5 ||blue6 ||blue7 || blue8){
		var comments=document.getElementById('comments');
		comments.innerHTML='X winner';
		$('.btn').attr("disabled", "true");
		xCount++;
		var p1Count=document.getElementById('p1');
		p1Count.innerHTML='<b>'+xCount+'</b>';
		count=0;
		}
		//checks for the chances of player 2
		else if(red1 || red2 ||red3 ||red4 || red5 ||red6 ||red7 || red8){
		var comments=document.getElementById('comments');
		comments.innerHTML='O winner';
		
		$('.btn').attr("disabled", "true");
		oCount++;
		var p2Count=document.getElementById('p2');
		p2Count.innerHTML='<b>'+oCount+'</b>';
		console.log('o wiining'+oCount);
		count=0;
		}
		//if no winners found
		else{
			if(count===9)
			{
				var comments=document.getElementById('comments');
				comments.innerHTML='Draw X O';
				count=0;
			}
		}
		if(xCount==5 ||oCount==5)
		{
			xCount=0;
			oCount=0;
			//e.preventDefault();
			$('#containers').remove();  
		// Remove old part
			$('#content').load('http://localhost/tic-tac-toe/gameOver.html'+'#containers').hide().fadeIn('slow');
			//$('#winner').load(function(e){
				/*if(xCount>oCount)	
		console.log('xcount'+xCount);					{	
				var w=document.getElementById('winner');
				console.log(w);
				w.innerHTML='Player 1 won the game';
				}	
				/*else{
					var w=parent.document.getElementById('winner');
					w.innerHTML='Player 2 won the game';
				}	*/
			//});
		}
		
	});
	
});
// for going back to the game
$(document).ready(function(){
	$('#back').click(function(e){
			e.preventDefault();
			var url=this.href;
			console.log(url);
			$('#containers').remove();                                // Remove old part
			$('#content').load(url +'#containers').hide().fadeIn('slow');
});
});
//for playing again
$('document').ready(function(){
$('.play-again').click(function(e){
		
		var comments=document.getElementById('comments');
		comments.innerHTML='Let\'s start game';
		$(".blue").removeAttr('disabled');
		$(".red").removeAttr('disabled');
		$(".btn").removeAttr('disabled');
		$(".blue").empty();
		$(".red").empty();
		$(".blue").removeClass("blue").addClass("btn");
		
		$(".red").removeClass("red").addClass("btn");
		 playerflag=1;
		 
	});
});
//for player 1 click event
function changeColorBlue(e){
	var tgt=e.target;
		tgt.className="blue";
		//tgt.id="blue";
		tgt.textContent="X";
		tgt.disabled=true;
		var comments=document.getElementById('comments');
		comments.innerHTML='O\'s turn';
		count++;
		console.log("x "+count);
}
//for player 2 click event
function changeColorRed(e){
	var tgt=e.target;
		tgt.className="red";
		tgt.textContent="O";
		tgt.disabled=true;
		var comments=document.getElementById('comments');
		comments.innerHTML='X\'s turn';
		count++;
		console.log("o "+count);
}

