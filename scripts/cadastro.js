function createUser(){
//    console.log("usuario criado")

    const name=document.getElementById('name').value;
    const cpf=document.getElementById('cpf').value;
    const nivel=document.getElementById('nivel').value;
    const pontuacao=document.getElementById('pontuacao').value;

    const form = new FormData ();
    form.append('name',name);
    form.append('cpf',cpf);
    form.append('nivel',nivel);
    form.append('pontuacao',pontuacao);
//    http://177.115.79.131:4000/PI2/view/cadastro.html
//    const url = "http://177.62.79.244:4000/PI2/controllers/cadastro.php";
    const url = "http://187.57.114.226:4000/PI2/controllers/cadastro.php";


    fetch(url,{
        method:'POST', 
        body:form
    }).then(response =>{
        response.json().then(result =>{
            console.log(result)
        })
    }).catch(err => console.log(err))
}