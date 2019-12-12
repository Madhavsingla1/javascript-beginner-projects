console.log("js added");
var add=document.getElementById("addd");
add.addEventListener('click',addbook);
function addbook(e)
{
    console.log(e.type);
    // selecting elements
   //e.preventDefault();
    var title=document.getElementById("title").value;
    var author=document.getElementById("author").value;
    var isbn=document.getElementById("isbn").value;

    // creating table row and appending that table row to the table
    var table=document.getElementById("tbl");
    var row=table.insertRow();
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);

    var close=document.createElement('button');
    close.setAttribute('class','close-button');
    var x=document.createTextNode('\u00D7');
    close.appendChild(x);
    cell0.innerHTML=title;
    cell1.innerHTML=author;
    cell2.innerHTML=isbn;
    cell3.appendChild(close);
    console.log(close.parentElement.parentElement);

    console.log(cell0.textcontent);

    // refreshing the input fields
    title.value="new";
    author.innerHTML="new";
    isbn.innerHTML="new";

    var close=document.getElementsByClassName('close-button');
for(i=0;i<close.length;i++){
    close[i].onclick=function()
    {
        this.parentElement.parentElement.style.display="none";
    }
}

}
