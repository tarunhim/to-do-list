var button = document.getElementById('button')


button.addEventListener('click', addItem)

function addItem(e) {
		e.preventDefault();
    var inputText = document.getElementById('item-text')
    var li = document.createElement('li')
    li.className = "list-group-item"
    
    var newItem = document.getElementById('items');
    var span = document.createElement("span");
    span.textContent = inputText.value;
    
    var delButton = document.createElement("button");
    delButton.className = "delete"
    delButton.textContent = 'X';
    
    li.appendChild(span)
    li.appendChild(delButton)
    newItem.appendChild(li)
    inputText.value = ""
}
 var search = document.getElementById('search-input')
 
 search.addEventListener('keyup', searchItem);
 
 function searchItem(e) {
 	var list = document.querySelectorAll(".list-group-item");
  
 var inputText = e.target.value;
 
 console.log(list,  e.target.value)
 
 }
 
 var ulList = document.getElementById('items');
 
 ulList.addEventListener('click', deleteItem)
 
 function deleteItem(e) {
		if(e.target.nodeName === 'BUTTON') {
   				this.removeChild(e.target.parentNode);
    }
 }
 
 
 

