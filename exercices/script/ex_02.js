window.addEventListener("load", function(event) {
    let ok = document.getElementsByTagName("div")[2];
    let i = 1;
    ok.onclick = function() {one_click()};

    function one_click()
    {
        ok.innerHTML = i;
        i++;
    }
});