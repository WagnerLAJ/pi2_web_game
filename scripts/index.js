showdata ();
function showdata (){
    console.log("Chegou no JS");
//    const url = "http://177.62.79.244:4000/PI2/controllers/read.php";
    const url = "http://187.57.114.226:4000/pi2_web_game/controllers/read.php";
fetch(url,{
        method:'GET'
    }).then (response => response.text())
    .then(response => results.innerHTML=response)
    .catch(err => console.log(err))

}

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
    const url = "http://187.57.114.226:4000/pi2_web_game/controllers/cadastro.php";
//    const url = "http://187.57.114.226:4000/PI2/controllers/cadastro.php";

    if ((name=="")||(cpf=="")||(nivel=="")||(pontuacao=="")) {
//        console.log("Todos os campos devem estar preenchidos");
        Swal.fire('Todos os campos devem estar preenchidos');
      }
      else {
    fetch(url,{
        method:'POST', 
        body:form
    }).then(response =>{
        response.json().then(result =>{
            //console.log(result)
            Swal.fire(result.message)

            document.getElementById('name').value = "";
            document.getElementById('cpf').value = "";
            document.getElementById('nivel').value = "";
            document.getElementById('pontuacao').value = "";

        })
    }).catch(err => console.log(err))
}}

function get_id(id){
    const form = new FormData ();
    form.append('id',id);
    const url = "http://187.57.114.226:4000/pi2_web_game/controllers/get_id.php";
    fetch(url,{
        method:'POST', 
        body:form
    }).then(response =>{
        response.json().then(data =>{
            //console.log(result)
            window.localStorage.setItem('user',JSON.stringify(data[0]));
            window.location.href = 'update.html';
            })
    }).catch(err => console.log(err))
}

showUserData()
function showUserData(){
    const user = JSON.parse(window.localStorage.getItem('user'));
    if(user!= null){
          //console.log(user.name)
        document.getElementById("id").value = user.id;
        document.getElementById("name-1").value = user.nome;
        document.getElementById('cpf-1').value = user.cpf;
        document.getElementById('nivel-1').value = user.nivel;
        document.getElementById('pontuacao-1').value = user.pontuacao;
    }else{
        console.log("")
    }
  
}

function updateUser(){
    //    console.log("usuario criado")
    
        const id=document.getElementById('id').value;
        const name=document.getElementById('name-1').value;
        const cpf=document.getElementById('cpf-1').value;
        const nivel=document.getElementById('nivel-1').value;
        const pontuacao=document.getElementById('pontuacao-1').value;
    
        const form = new FormData ();
        form.append('id',id);
        form.append('name',name);
        form.append('cpf',cpf);
        form.append('nivel',nivel);
        form.append('pontuacao',pontuacao);
    //    http://177.115.79.131:4000/PI2/view/cadastro.html
    //    const url = "http://177.62.79.244:4000/PI2/controllers/cadastro.php";
        const url = "http://187.57.114.226:4000/pi2_web_game/controllers/update.php";
    //    const url = "http://187.57.114.226:4000/PI2/controllers/cadastro.php";
    
        if ((name=="")||(cpf=="")||(nivel=="")||(pontuacao=="")) {
    //        console.log("Todos os campos devem estar preenchidos");
            Swal.fire('Todos os campos devem estar preenchidos');
          }
          else {
        fetch(url,{
            method:'POST', 
            body:form
        }).then(response =>{
            response.json().then(result =>{
                //console.log(result)
//                Swal.fire(result.message)
                    Swal.fire(result.message).then(result =>{
                        if(result.isConfirmed){
                            window.location.href = "index.html";
                            window.localStorage.removeItem('user');
                        }

            })
        }).catch(err => console.log(err))
    })}
}
                

//fun????o deletar linha
function remove(id){
    const form = new FormData ();
    form.append('id',id);
    const url = "http://187.57.114.226:4000/pi2_web_game/controllers/remove.php";
    Swal.fire({
        title: 'Voc?? realmente quer deletar este usu??rio?',
        text: "Esta a????o n??o poder?? ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(url,{
            method:'POST', 
            body:form
        }).then(response =>{
            response.json().then(data =>{
                //console.log(result)
                Swal.fire(data.message);
                showdata ();
            })
        }).catch(err => console.log(err))
        }
    })

}
function verificaLogin(){
//    console.log("usuario criado")

    const cpf_login=document.getElementById('cpf_login').value;
    const senha_login=document.getElementById('senha_login').value;

    if(cpf_login=="12345678900"&&senha_login=="1234") {
        window.location.href = "cadastro.html";
    }
/*
*/
else {
    Swal.fire("Senha ou usu??rio n??o conferem").then(result =>{
        if(result.isConfirmed){
            window.location.href = "login.html";
        }
    })
    }
}
function verificaLoginAluno(){
        console.log("verifica login aluno")
    
        const id_login=document.getElementById('id_login').value;
        const url = "http://187.57.114.226:4000/pi2_web_game/controllers/loginaluno.php";
    
        const form = new FormData ();
        form.append('id_login',id_login);
    
        if ((id_login=="")) {
    //        console.log("Todos os campos devem estar preenchidos");
            Swal.fire('Preencher com algum ID')
        
          }
          else {
        fetch(url,{
            method:'POST', 
            body:form
        }).then(response =>{
            response.json().then(result =>{
                //console.log(result)
//                Swal.fire(result.message)
            if(result.message=="ID n??o cadastrado"){
                Swal.fire(result.message).then(result =>{
                    if(result.isConfirmed){
                        window.location.href = "loginaluno.html";
                    }
                })

            } else {

                Swal.fire({
                    title: result.message,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "https://simmer.io/@Abhner/projeto-integrador-jogo-infantil";
                    }
                })
    
            }

        })
    }).catch(err => console.log(err))

    }
}
    