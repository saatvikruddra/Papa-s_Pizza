		 		var modal = document.getElementById("pop-up")	
		 		var modal2 = document.getElementById("pop-up1")				

				var pizza = document.getElementById("pizza")
				var burger = document.getElementById("burger")
				var drinks = document.getElementById("drinks")				
				
  				var span = document.getElementById("close")
  				
  				
				 pizza.onclick = function() {modal.style.display = 'block'}	
				burger.onclick = function() {modal.style.display = 'block'}	
				drinks.onclick = function() {modal.style.display = 'block'}									
			
				
				span.onclick = function() {modal.style.display = 'none'
													modal2.style.display = 'none'}
														 					
		 		window.onclick = function(event) {
	    		if (event.target == modal || event.target == modal2) {
	    			modal.style.display = 'none';
	    			modal2.style.display = 'none';
	    			}
	    		} 
	    		
var x="";
	    	
		function incrementValue(x,i)
{
    var value = parseInt(x.value, 10);
    value++;
    x.value = value;
}


		function decrementValue(x,i)
{
    var value = parseInt(x.value, 10);
    value--;
    x.value = value;
}	    		
