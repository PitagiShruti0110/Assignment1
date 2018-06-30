//Fibonacci Series Method 1

function Fibonacci(num){
	var i;
    var fib = []; // Initialize array!
	var n = parseInt(num);
    
    fib[0] = 0;
    fib[1] = 1;
	document.write(fib[0] + "<br/>");
	document.write(fib[1] + "<br/>");
    for(i=2; i<=n; i++)
    {
        // Next fibonacci number = previous + one before previous
        fib[i] = fib[i-2] + fib[i-1];
       
	   if(fib[i] >= 33){
			break;
		}
		document.write(fib[i] + "<br/>");		
    }
}

//Fibonacci Series Method 2
function on_btn_click() {
				count = parseInt(document.getElementById("inCount").value);
				a = 0, b = 1, sum = 0;
				output = "<b>The first " + count + " elements in the Fibonacci series:</b> ";
				// Next fibonacci number = previous + one before previous
				for(i = 0; i < count; i ++) {
					output += a + " ";
					sum = a + b;
					a = b;
					b = sum;
					 if(sum > 34){
						break;
					}
				}

				document.getElementById("pSeries").innerHTML = output;
}
