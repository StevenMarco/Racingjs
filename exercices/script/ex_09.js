window.addEventListener("load", (event) =>
{
    let div_canvas = document.getElementsByTagName("div")[2];
    let canvas = document.getElementsByTagName("canvas")[0];
    let xy_position = document.getElementsByTagName("div")[3];

    div_canvas.style.position = "relative";
    canvas.style.position = "absolute";
    canvas.style.cursor = "move";
    canvas.style.margin = "0px";
    canvas.draggable = true;

    div_canvas.ondragover = (event) => 
    {
        let x = event.offsetX;
        let y = event.offsetY;
        x = x - 15;
        y = y - 15;
        if (x > 679) {
            x = 679;
        }
        if (y > 35) {
            y = 35;
        }
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }

        xy_position.innerText = "Nouvelles coordonnées => {x:" + x + ", y:" + y + "}";
        canvas.ondragend = function () {
            canvas.style.top = y + "px";
            canvas.style.left = x + "px";
            canvas.style.visibility = "visible";
        };
    };
});