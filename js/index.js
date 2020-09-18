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
        const y = element.getBoundingClientRect().top + window.pageYOffset - topnav.clientHeight - (window.innerHeight / 3);

        window.scrollTo({top: y, behavior: 'smooth'});
        
    });

    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top + 200;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element');
            element.classList.remove('hidden');
        }
        else if (positionFromTop - windowHeight >= 0) {
            element.classList.remove('fade-in-element');
            element.classList.add('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
});




