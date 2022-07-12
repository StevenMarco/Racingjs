window.addEventListener("change", (event) =>
{
    let div = document.getElementsByTagName("div")[3];
    let exemple = document.getElementsByTagName("input")[0];
    exemple = exemple.value;
    let p = exemple.match(/\[.*?\]/ig);

    if(p[0] == "[B]" && p[1] == "[/B]") // let exemple = "[B]ceci est un texte[/B]";
    {
        let debut = exemple.replace(p[0], "<b>");
        let fin = debut.replace(p[1], "</b>");
        div.innerHTML = fin;
    }
    else if(p[0] == "[U]" && p[1] == "[/U]") // let exemple = "[U]ceci est un texte[/U]";
    {
        let debut = exemple.replace(p[0], "<u>");
        let fin = debut.replace(p[1], "</u>");
        div.innerHTML = fin;
    }
    else if(p[0] == "[S]" && p[1] == "[/S]") // let exemple = "[S]ceci est un texte[/S]";
    {
        let debut = exemple.replace(p[0], "<strike>");
        let fin = debut.replace(p[1], "</strike>");
        div.innerHTML = fin;
    }
    else if(p[0] == "[COLOR=]" || p[1] == "[/COLOR]") // let exemple = "[COLOR=red]ceci est un texte[/COLOR]";
    {
        let cut_color = exemple.slice(7);
        let colors = "";
        for (let i = 0; cut_color[i] != ']'; i++) 
        {
            colors += cut_color[i];
        }
        div.style.color = colors;

        let debut = exemple.replace(p[0], "<color>");
        let fin = debut.replace(p[1], "</color>");
        div.innerHTML = fin;
    }
    else if(p[0] == "[LINK=]" || p[1] == "[/LINK]") // let exemple = "[LINK=https://developer.mozilla.org/fr/docs/Web/HTML/Element/a]ceci est un texte[/LINK]";
    {
        let cut_color = exemple.slice(6);
        let url = "";
        for (let i = 0; cut_color[i] != ']'; i++) 
        {
            url += cut_color[i];
        }

        let debut = exemple.replace(p[0], `<a href=${url} target="_blank">`);
        let fin = debut.replace(p[1], "</a>");
        div.innerHTML = fin;
    }
});