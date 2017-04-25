window.onload = function(){
}
    function zc(){
        var w = document.getElementById("calc-w").value*10;
            console.log(w);
            // w = parseInt(w);
        var h = document.getElementById("calc-h").value*10;
            // h = parseInt(h);
            console.log(h);
        var d = document.getElementById("calc-d").value*0.1;
            // d = d*0.01;
            // d = parseInt(d);
            console.log(d);

        // var rashod = (h*w*d)/15;
        // console.log(rashod);
        var rashod = Math.ceil((h*w*d)/15);
        console.log(rashod);

       document.getElementById("out").innerHTML = rashod + " мешков";
    }
