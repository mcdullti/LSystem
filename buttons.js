<input type="button" id="myButton" onclick="HideFooter()" />

function HideFooter()
{
    var display = document.getElementById("site-footer").style.display;
    if(display=="none")
        document.getElementById("site-footer").style.display="block";
    else
        document.getElementById("site-footer").style.display="none";
}

$("#myButton").click(function(){

    if($("#site-footer").is(":visible"))
        $("#site-footer").hide();
    else
        $("#site-footer").show();
});

$(document).ready(function(){
    $("#site-footer").hide();
});
