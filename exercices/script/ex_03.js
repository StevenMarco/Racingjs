window.addEventListener("load", function(event) {
    let ok = document.getElementsByTagName("div")[2];
    ok.onclick = function() {one_click()};

    function one_click()
    {
        let p = prompt("Quel est votre nom ?");

        if(p != null && p != "")
        {
            let comfirmation = confirm("Etes vous sûr que " + p + " est votre nom ?");

            if(comfirmation == true)
            {
                alert("Bonjour " + p + " !");
                ok.innerHTML = "Bonjour " + p + " !";
            }
        }
        else if(p == "")
        {
            one_click();
        }
    }
});