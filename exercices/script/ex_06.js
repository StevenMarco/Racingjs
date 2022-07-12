window.addEventListener("load", (event) =>
{
    let code = document.getElementsByTagName("pre")[0];
    let ok = document.getElementsByTagName("div")[2];

    class Hero 
    {
        constructor(name, classe, intel, strenght)
        {
            this.name = name;
            this.classe = classe;
            this.intel = intel;
            this.strenght = strenght;
        }

    }


    toString()
    {
        Hero.prototype.toString = function string()
        {
           return dialogue = `Je suis ${capitalize(this.name)} le ${this.classe}, j'ai ${this.intel} points d'intelligence et ${this.strenght} points de force !`;
        }
    }
    
    function capitalize(sentence)
    {
    return sentence[0].toUpperCase() + sentence.slice(1);
    }
    
    var mage = new Hero("amadeus", "mage", 10, 3);
    var guerrier = new Hero("pontius", "guerrier", 3, 10);
    mage.toString();
    guerrier.toString();
    ok.innerHTML = mage.toString() + "<br/>" + guerrier.toString();
});