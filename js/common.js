window.onload = function(){
}
    function zc(){
        var w = document.getElementById("calc-w").value*10;
        var h = document.getElementById("calc-h").value*10;
        var d = document.getElementById("calc-d").value*0.1;
        var rashod = Math.ceil((h*w*d)/15);

       document.getElementById("out").innerHTML = rashod + " мешков";
    }
