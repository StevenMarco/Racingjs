window.addEventListener("load", (event) =>
{
    let canvas = document.getElementsByTagName("canvas")[0];
    let ctx = canvas.getContext("2d");
    let pause = document.getElementsByTagName("button")[0];
    let stop = document.getElementsByTagName("button")[1];
    let muted = document.getElementsByTagName("button")[2];

    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 1;
    ctx.closePath();
    ctx.stroke();
    
    let audio = new Audio("./triangle.ogg");

    canvas.onclick = function() {canvas_click()};
    function canvas_click()
    {
        audio.play();
    }

    pause.onclick = function() {pause_click()};
    function pause_click()
    {
        audio.pause();
    }

    stop.onclick = function() {stop_click()};
    function stop_click()
    {
        audio.pause();
        audio.currentTime = 0;
    }

    muted.onclick = function() {muted_click()};
    function muted_click()
    {
        if(audio.muted == true)
        {
            audio.muted = false;
        }
        else if(audio.muted == false)
        {
            audio.muted = true;
        }
    }
});