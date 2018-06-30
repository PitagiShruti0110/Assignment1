var arrayList = [];

function add() {
   var arrNum = document.getElementById('num');
   arrayList.push(arrNum.value);
   arrNum.value = '';
}
function show() {
   var html = '';
   for (var i=0; i<arrayList.length; i++) {
      html += arrayList[i]+" " ;
   }
   var con = document.getElementById('container');
   con.innerHTML = html;
}
function findTargetNum(Tnum){
	var i;
	var x = parseInt(Tnum);
	var sortedArray = arrayList.sort(function(a, b){return a - b});
	
	for(i=0; i<sortedArray.length;i++){
		if(sortedArray[i] < x){
			if(sortedArray.length == (i+1)){
				document.getElementById("result").innerHTML = sortedArray[i];
				break;
			}
		}
		else{
			
			document.getElementById("result").innerHTML = sortedArray[i];
			break;
		}		
	}
}

