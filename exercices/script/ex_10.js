window.addEventListener("load", (event) => {
    let ecran = document.getElementsByClassName("result")[0];
    let touches = document.getElementsByClassName("buttons")[0];
    let cible_touche = touches.children;
    let operateurs = ["/", "x", "-", "+"];
    let decimal = false;

    for(let i = 0; i < cible_touche.length; i++) 
    {
        touches.children[i].onclick = (event) => 
        {
            let value_ecran = ecran.innerHTML;
            let valeurBouton = cible_touche[i].innerHTML;

            if(valeurBouton == "C")
            {
                ecran.innerHTML = '';
                decimal = false;
            }
			else if(valeurBouton == "←")
			{              
                ecran.innerHTML = value_ecran.replace(/.$/, ''); // suppr = // /.$/ = /.-> n'importe quel caract $-> fin de ligne/
			}
            else if(valeurBouton == "=")
            {
                let calcul = value_ecran;
                let dernierCaractere = value_ecran[value_ecran.length - 1];
                calcul = calcul.replace(/x/g, '*'); // for replace X to * // /x/g = /x at lvl global/

                if(operateurs.indexOf(dernierCaractere) > -1 || dernierCaractere == '.') 
                {
                    calcul = calcul.replace(/.$/, ''); // suppr = // /.$/ = /.-> n'importe quel caract $-> fin de ligne/
                }
          
                if(calcul) 
                {
                    ecran.innerHTML = Function("return " + calcul)(); // and use eval() it's good
                    console.log(calcul);
                }
                decimaleAjoute = false;
            }
			else if(operateurs.indexOf(valeurBouton) > -1)
			{
				let dernierCaractere = value_ecran[value_ecran.length - 1];

				if(value_ecran == "-" && valeurBouton == "+")
				{
					ecran.innerHTML = "";
				}
				else if(value_ecran == "" && valeurBouton == "-")
				{
					ecran.innerHTML = valeurBouton;
				}
				else if(value_ecran != "" && operateurs.indexOf(dernierCaractere) == -1)
				{
					ecran.innerHTML += valeurBouton;
				}

				if(operateurs.indexOf(dernierCaractere) > -1 && value_ecran.length > 1)
				{
					ecran.innerHTML = value_ecran.replace(/.$/, valeurBouton);
				}

				decimal = false;

			}
			else if(valeurBouton == '.')
			{
				if(!decimal)
				{
					ecran.innerHTML += valeurBouton;
					decimal = true;
				}
			}
			else
			{
				ecran.innerHTML += valeurBouton;
			}
        }
    }
});