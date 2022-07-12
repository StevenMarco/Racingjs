window.addEventListener("load", (event) => 
{
    let div = document.getElementsByTagName("div")[2];
    let storage_local = localStorage.setItem("storage", "https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png");
    
    if(localStorage.getItem("storage"))
    {
        img = localStorage.getItem("storage");
        div.innerHTML = "<img src=\"" + img + "\">";
        div.children[0].style.width = "100%";
        div.children[0].style.height = "100%"; 
    }
}); 