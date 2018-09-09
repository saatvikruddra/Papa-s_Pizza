		 		var modal = document.getElementById("pop-up")					
				var pizza = document.getElementById("pizza")
				var burger = document.getElementById("burger")
				var drinks = document.getElementById("drinks")				
				
  				var span = document.getElementById("close")

				pizza.onclick = function() {modal.style.display = 'block';
														//document.getElementById("pop-up-content").innerHTML = "Thank-You For Choosing Our Amazing Pizza"
														}										
				burger.onclick = function() {modal.style.display = 'block';
												   //document.getElementById("pop-up-content").innerHTML = "Thank-You For Choosing Our Awesome Burger"
														}	
				drinks.onclick = function() {modal.style.display = 'block';
													//	document.getElementById("pop-up-content").innerHTML = "Thank-You For Choosing Our Ultimate Coffees"
														}									
			
				
				span.onclick = function() {
					modal.style.display = 'none';
						}										 					
		 		window.onclick = function(event) {
	    		if (event.target == modal) {
	    			modal.style.display = 'none';
	    			}
	    		} 
	    		
	    		
	   //		var plus= document.getElementById("quantity1");
	    	//	var minus=document.getElementById("quantity2");
				//var amount = document.getElementById("quantNo");	    		
	    		
	 function plus(){
	   		getElementById("qauntNo").innerHTML = getElementById("quantNo").value + 1;
	    		}
	    		
	 function minus() { 
	    		document.getElementById("qauntNo").innerHTML = document.getElementById("quantNo").value - 1;
	    		}