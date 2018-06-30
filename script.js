var arrayList = [];

function add() {
   var inp = document.getElementById('strValue');
   arrayList.push(inp.value);
   inp.value = '';
}

function show() {
   var html = '';
   for (var i=0; i<arrayList.length; i++) {
      html += arrayList[i] + ' ';
   }
   var con = document.getElementById('container');
   con.innerHTML = html;
}

function repeatedArray(){
var maxRepeat = 1;
var max = 0;
var item;

for (var i=0; i<arrayList.length; i++)
	{
		for (var j=i; j<arrayList.length; j++)
			{
                if (arrayList[i] == arrayList[j])
                 max++;
                if (maxRepeat<max)
                {
                  maxRepeat=max; 
                  item = arrayList[i];
                }
        }
        max=0;
	}
document.getElementById("foundStr").innerHTML = item;
}
