window.addEventListener("load", (event) =>
{
    let div = document.getElementsByTagName("div")[2];
    let storage_local = localStorage.setItem("pangolin", "https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png");
    let size = 100;
    let inc = "";
    let dec = "";
    
    if(localStorage.getItem("pangolin"))
    {
        img = localStorage.getItem("pangolin");
        div.innerHTML = "<img src=\"" + img + "\">";
        div.children[0].style.width = "100%";
        div.children[0].style.height = "100%"; 
    }
    
    const new_color = (e) =>
    {
        random_color = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = "#" + random_color;
        console.log("#" + random_color);
    }
    
    div.children[0].addEventListener("mouseenter", (e) =>
    {
        clearInterval(inc);
        dec = setInterval(enter,1000);
    });
    function enter()
    {
        size--;
        div.children[0].style.width = size + "%";
        div.children[0].style.height = size + "%";
        new_color();
    };


    div.children[0].addEventListener("mouseleave", (e) =>
    {
        clearInterval(dec);
        inc = setInterval(exit, 1000); 
    });
    function exit()
    {
        if (div.children[0].style.width != "100%") 
        {
            size++;
            div.children[0].style.width = size + "%";
            div.children[0].style.height = size + "%";
            new_color();
        };
    };


    div.children[0].addEventListener("click", (e) =>
    {
        localStorage.removeItem("pangolin");
    });
});