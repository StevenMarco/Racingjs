window.addEventListener("load", function(event) {
    let plus = document.getElementsByTagName("button")[0];
    let less = document.getElementsByTagName("button")[1];
    let body = document.getElementsByTagName("body")[0];
    let color = document.getElementsByTagName("select")[0];
    let p = 16;
    
    plus.onclick = function() {one_click()};
    
    function one_click()
    {
        p += 1;
        body.style.fontSize = p + "px";
    }

    less.onclick = function() {less_click()};
    
    function less_click()
    {
        p -= 1;
        body.style.fontSize = p + "px";
    }

    color.addEventListener("change", (event) => 
    {   
        var value = color.value;
        body.style.backgroundColor = value; 
    });
});
