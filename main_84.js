pizza_list_array = [];

function getmenu()
	{    
        // Give the appropriate id name as pizza_name
        var item = document.getElementById("        ").value; 
       
        //Add push() function to push item into array
        pizza_list_array.      (item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
	}