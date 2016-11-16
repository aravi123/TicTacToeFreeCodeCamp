$(document).ready(function(){
	var turns = 0,k=0;
	var x = 'X';
	var o = '0';
	var wins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
	//console.log(wins.length);
	var userturns = [],d=0;

	$('li').click(function(){
		var clickedelement = $(this).attr('class');
		if (turns%2==0) {
			$(this).html(x);
			userturns[d++] = clickedelement;

			analysegame(clickedelement);
			//computerturn();
			//check =[];
		}
		//console.log(turns);
		console.log(check);
		console.log(u);
		turns++;
	});
	var computerturns = [];
	var check =[],u=[],l=0;
	function analysegame(clickedelement){
		for (var i = 0; i < wins.length; i++) {
			for (var j = 0; j < wins[i].length; j++) {
				//wins[i][i]
				if (wins[i][j]==clickedelement) {
					check.push(i);
				}
			}
		}
		var pos=0;
		for (var i = 0; i < check.length; i++) {
			for (var j = i+1; j < check.length-1; j++) {
				if (check[j]==check[i]) {
					pos = check[i];
					break;
				}
			}
		}
		console.log(pos);
		//console.log(userturns);	
	}

});