<input type="button" id="myButton" onclick="HideFooter()" />

function HideFooter()
{
    var display = document.getElementById("myFooter").style.display;
    if(display=="none")
        document.getElementById("myFooter").style.display="block";
    else
        document.getElementById("myFooter").style.display="none";
}
