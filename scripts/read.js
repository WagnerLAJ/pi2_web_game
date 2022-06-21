showdata ();
function showdata (){
    console.log("Chegou no JS");
//    const url = "http://177.62.79.244:4000/PI2/controllers/read.php";
    const url = "http://187.57.114.226:4000/PI2/controllers/read.php";
fetch(url,{
        method:'GET'
    }).then (response => response.text())
    .then(response => results.innerHTML=response)
    .catch(err => console.log(err))

}
