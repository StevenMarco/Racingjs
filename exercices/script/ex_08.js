    let couleur = document.getElementsByTagName("div")[2];
    let orange = 0;
    let purple = 0;
    let black = 0;
    let olive = 0;

    for(i= 0; i < couleur.children.length; i++)
    {
        if(window.getComputedStyle(couleur.children[i]).getPropertyValue("background-color") == "rgb(255, 165, 0)")
        {
            orange += 1;
        }
        else if(window.getComputedStyle(couleur.children[i]).getPropertyValue("background-color") == "rgb(128, 0, 128)")
        {
            purple += 1;
        }
        else if(window.getComputedStyle(couleur.children[i]).getPropertyValue("background-color") == "rgb(0, 0, 0)")
        {
            black += 1;
        }
        else if(window.getComputedStyle(couleur.children[i]).getPropertyValue("background-color") == "rgb(128, 128, 0)")
        {
            olive += 1;
        }
    }

    for(j = 0; j < couleur.children.length; j++)
    {
        if(orange > 0)
        {
            couleur.children[j].style.backgroundColor = "rgb(255, 165, 0)";
            orange--;
        }
        else if(purple > 0)
        {
            couleur.children[j].style.backgroundColor = "rgb(128, 0, 128)";
            purple--;
        }
        else if(black > 0)
        {
            couleur.children[j].style.backgroundColor = "rgb(0, 0, 0)";
            black--;
        }
        else if(olive > 0)
        {
            couleur.children[j].style.backgroundColor = "rgb(128, 128, 0)";
            olive--;
        }
    }