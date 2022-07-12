window.addEventListener("load", function() {
    
    let ok = document.getElementsByTagName("div")[2];
    let text = "";
    document.addEventListener("keypress", function(event)
    {       
        text += (event.key);
        ok.innerHTML = text.slice(-42);
    });
});

