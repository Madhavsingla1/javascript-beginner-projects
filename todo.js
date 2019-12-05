// Create a "close" button and append it to each list item
list=document.getElementsByTagName("li");//list is an array of all li tags
i=0;
for(i=0;i<list.length;i++)
{
    clsbtn=document.createElement("span");//document.createElement("tag name")
    txt=document.createTextNode("\u00D7"); //\u00D7 character code for cross button
    clsbtn.className="close";
    clsbtn.appendChild(txt);
    list[i].appendChild(clsbtn);
}
// Click on a close button to hide the current list item
var close=document.getElementsByClassName("close");//array
for(i=0;i<list.length;i++)
{
    close[i].onclick=function()
    {
        var div=this.parentElement;
        div.style.display = "none";
    }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myul").appendChild(li);
    }
   document.getElementById("input").value = "";///

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }