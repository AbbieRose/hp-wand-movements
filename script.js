var select = false;
var selected = [];
var original;

$(document).ready(function() {
   $(".spells").show();
   $(".chosen").hide(); 
   console.log("Document Ready");
});

$(".select").click(function() {
    if(select) {
        $(".spells").replaceWith(original);
        $(".chosen").hide();
        selected = []
        console.log("Registered in here");    
    } else {
        original = $(".spells").clone();
        $(".spells").hide();
        for (var i = 0; i < selected.length; i++) {
            console.log("Pushing");  
            var gifIndex = selected[i].currentSrc.indexOf("gifs") + 10;
            var endIndex = selected[i].currentSrc.indexOf(".", gifIndex);
            var name = selected[i].currentSrc.substring(gifIndex, endIndex);
            $(".chosen").append(name);
            $(".chosen").append(selected[i]);
        }
        $(".chosen").show();
        console.log($(".chosen"))
        console.log("Registered in else");
    }
    select = !select;
    console.log("Registered in event handler");
});

$(".spell-tile").click(function(event) {
    console.log("clicked: " + event.target.currentSrc);
    selected.push(event.target);
    console.log(selected.length);
});