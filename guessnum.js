num=Math.floor(Math.random() * 100) + 1;
/*
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
floor is used to take GINT of  Math.random() * 100
*/
k=0;
function check(){

    i=document.getElementById("input").value;

    if(num==i){
        alert("correct guess");
        location.reload();}
    else if(num>i){
        alert("too small  ");
        k++;
    }
    else
        {
            alert("too big  ");
            k++;
        }
    if(k==10)
        {
            alert("ye tere bass ka nahi bsdk");
            document.getElementById("btn").disabled = true;

        }

        document.getElementById("input").value= "";

}
//document.write(num);


