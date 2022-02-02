 // getting dates 
var date = new Date(); 
var dayofweek= date.getDay(); 
var nameofday; 
var message; 
switch (dayofweek){
    case 0: 
    nameofday= "Sunday"; 
    message = "Sunday's are fun days!"; 
    break; 
    
    case 1: 
    nameofday= "Monday"; 
    message = "We Hate mondays"; 
    break; 
    
    case 2: 
    nameofday= "Tuesday"; 
    message = "Taco tuesday is the best!"; 
    break; 
    
    case 3: 
    nameofday= "Wendsday"; 
    message = "Half way through the week!"; 
    break; 
    
    case 4: 
    nameofday= "Thursday"; 
    message = "Thirsty Thursday get the beers out!"; 
    break; 

    case 5: 
    nameofday= "Friday"; 
    message = "Its Saturdays eve!"; 
    break; 

    case 6: 
    nameofday= "Saturday"; 
    message = "Lets have some fun!"; 
    break; 
  
}
// display day
var weekdayDiv = document.getElementById("weekday"); 
weekdayDiv.innerHTML =  `${nameofday}`  
// display message
var messageDiv = document.getElementById('mess'); 
messageDiv.innerHTML =  `${message} `