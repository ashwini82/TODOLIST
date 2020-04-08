//Adding new list-item

$(document).ready(function(){


 var jList = $("#list")
   
$('#addbtn').click(function(){
 
 var newEl =$("#myInput").val();
 jList.append('<li>' +newEl+ '</li>');
 $("#myInput").val("");
 deletableItem();
});
});


	
//Removing items from list
$(document).ready(deletableItem());
function deletableItem()
{
$('li').click(function()
{
$(this).addClass('strikeout');

setTimeout(() =>{
$(this).remove();
},1000);
});
}

// css
$("div").css({
   "background-color": "grey",
    "color" : "black",
  "padding-left":"30%",
  "font-size":"20px",
});








/*list.addEventListener('click',function(event){
  event.target.style.textDecoration = "line-through";

  setTimeout(function(){
  	  event.target.remove();
  	},2000)
  })*/

