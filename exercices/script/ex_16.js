window.addEventListener("load", (event) => 
{
    let div = document.getElementsByTagName("div")[3];
    let form = document.getElementsByTagName("form")[0];
    let input = document.getElementsByTagName("input")[0];
    var selectedFile;

    // form.setAttribute("action", "upload.php");
    // form.setAttribute("method", "post");
    // form.setAttribute("enctype", "multipart/form-data");
    // input.setAttribute("accept", "image/*");
    // input.setAttribute("name", "SelectedFile");

    console.log(div);
    console.log(form);
    console.log(input);
    // document.addEventListener("submit", //(e) =>
    document.addEventListener('submit', (e) => {
        console.log('addEventListener');
        var httpRequest;       
            httpRequest = new XMLHttpRequest();
        
            if (!httpRequest) {
            alert('Abandon :( Impossible de créer une instance de XMLHTTP');
            return false;
            }
            httpRequest.onreadystatechange = alertContents;
            httpRequest.open('POST', 'exercices/ex_16.html'); // quoi mettre ?
            httpRequest.setRequestHeader('Content-Type', 'multipart/form-data');
            httpRequest.send();
        
        function alertContents() {
            console.log(httpRequest);

            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            {
                if (httpRequest.status === 200) 
                    div.innerHTML = httpRequest.responseText;
                else 
                    alert('Il y a eu un problème avec la requête.');
            }
        }
    });
});


// <form action="upload.php" method="post" enctype="multipart/form-data"></form>
// dans input -> accept="image/gif, image/jpeg, image/png  //ou// image/* "