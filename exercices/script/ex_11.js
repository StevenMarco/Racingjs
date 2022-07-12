window.addEventListener("load", function(event) 
{
    let a_href = document.getElementsByTagName("a")[0];
    let div = document.getElementsByTagName("div")[2];
    let footer = document.getElementsByTagName("footer")[0];
   
    a_href.onclick = function()
    {       
        let time = new Date(Date.now() + 86400000);
        time = time.toUTCString();
        document.cookie = "acceptsCookies=true; expires=" + time;
        div.innerHTML = "";  
        let second_div = document.createElement("div");   
        footer.appendChild(second_div);
        let button = document.createElement("button");
        second_div.appendChild(button);
        button.innerText = "Supprimer le cookie";

        button.onclick = function()
        {
            footer.removeChild(second_div);
            time = new Date(Date.now() - 86400000);
            time = time.toUTCString();
            document.cookie = "acceptsCookies=true; expires=" + time;
            div.innerText = "Ce site utilise les cookies, cliquez sur OK si vous acceptez leur utilisation. ";
            div.appendChild(a_href);
        };
    }; 
});