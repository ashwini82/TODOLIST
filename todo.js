
var inputValue = document.getElementById("myInput") ;
var list = document.getElementById('ul');
var button = document.getElementById('addbtn');


button.addEventListener('click',function(event){

	var ele =document.createElement('li') ;
	ele.innerHTML = inputValue.value;
	list.appendChild(ele);
	inputValue.value ="";
	
});

list.addEventListener('click',function(event){
  event.target.style.textDecoration = "line-through";

  setTimeout(function(){
  	  event.target.remove();
  	},2000)
  })

