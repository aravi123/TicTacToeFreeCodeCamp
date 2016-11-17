$(document).ready(function(){
	var turns = 0,k=0;
	var x = 'X';
	var o = '0';
	var click = [],m=0;
	var pos=0,d=0;
	var flag=0;
	var check =[],u=[],l=0;
	var wins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
	//console.log(wins.length);
	var userturns = [],u=0,d=0;
	var comp =[],g=0;
	$('.X').click(function(){
		$('.Game').show();
		$('.Values').hide();
	});
	$('.O').click(function(){
		$('.Game').show();
		$('.Values').hide();
		x = '0';
		o = 'X';
		analysegame();

	});
	$('li').click(function(){
		var clickedelement = $(this).attr('class');
		if (turns%2==0) {
			$(this).html(x);
			userturns[d++] = clickedelement;
			click[m++]= clickedelement;
			gameover(userturns);
			analysegame(clickedelement);
			
		}
		//console.log(turns);
		console.log(check);
		//console.log(u);
		turns++;
	});
	var computerturns = [];
	function analysegame(clickedelement){
		for (var i = 0; i < wins.length; i++) {
			for (var j = 0; j < wins[i].length; j++) {
				if (wins[i][j]==clickedelement) {
					check.push(i);
				}
			}
		}
		console.log(check);
		for (var i = 0; i < check.length; i++) {
			for (var j = i+1; j < check.length; j++) {
				if ((check[j]==check[i])&&((click.indexOf(wins[check[i]][0])==-1)||(click.indexOf(wins[check[i]][1])==-1)||(click.indexOf(wins[check[i]][2])==-1))) {
					pos = check[i];
				}
			}
		} 
		console.log(pos);

		if(click.indexOf(String(wins[pos][0]))==-1){
			$('.'+wins[pos][0]).html(o);
			comp[g++] = wins[pos][0];
			click[m++] = String(wins[pos][0]);
			check.splice(check.indexOf(pos),1);
			gameover(comp);
		}
		else if (click.indexOf(String(wins[pos][1]))==-1) {
			$('.'+wins[pos][1]).html(o);
			comp[g++] = wins[pos][1];
			click[m++] = String(wins[pos][1]);
			check.splice(check.indexOf(pos),1);
			gameover(comp);
		}
		else if(click.indexOf(String(wins[pos][2]))==-1){
			$('.'+wins[pos][2]).html(o);
			comp[g++] = wins[pos][2];
			click[m++] = String(wins[pos][2]);
			check.splice(check.indexOf(pos),1);
			gameover(comp);
		}
		else {
			var d =0,e=0;
			for (var i = 0; i < wins.length; i++) {
				for (var j = 0; j < wins[i].length; j++) {
					if(click.indexOf(String(wins[i][j]))==-1){
						d=wins[i][j];
						e=i;
					}
				}
			}
			if (d!=0) {
				$('.'+d).html(o);
				comp[g++] = d;
				click[m++] = String(d);
				check.splice(check.indexOf(e),1);
				gameover(comp);
			}
		}	
		turns++;
	}	
	function gameover(arr) {
		var flag=0,i=0;
		for (var j = 0; j < wins.length; j++) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i]==wins[j][flag]) {
				flag++;
				i=0;
				}
			}
			if (flag==3) {
				console.log("game over");
				location.reload();
				break;
			}
			flag=0;
		}
	}

});