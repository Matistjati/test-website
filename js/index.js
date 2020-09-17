function httpGetAsync(theUrl, callback)
{
    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
    });
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.withCredentials = true;
    xmlHttp.header = header;
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.arrayBuffer);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

document.addEventListener("DOMContentLoaded", function(){

    /*var chungus = document.getElementById("big-chungus");

    httpGetAsync("", 
        responseBuffer => 
        {
            chungus.src = "data:image/png;base64," + _arrayBufferToBase64(responseBuffer)
        }
    )*/

    var toggle = document.getElementById("clickable-hamburger");

    toggle.onclick = function(e)
    {
        console.log("Hi")
    }
    

    circle = document.getElementById("clickable-circle");
    circle.onclick = (function(e) {
        e.preventDefault();
        e.stopPropagation();
        //$('.arrow').toggleClass('bounceAlpha');
        var topnav = document.getElementById("topnav");
        var element = document.getElementById("text-box");
        const y = element.getBoundingClientRect().top + window.pageYOffset - topnav.clientHeight - (window.innerHeight / 4);

        window.scrollTo({top: y, behavior: 'smooth'});
        
    });
});




