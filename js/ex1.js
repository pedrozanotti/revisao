document.getElementById('botao').addEventListener('click', function (e) {
    var nome=document.getElementById("nome").value
    e.preventDefault();
    if (nome.length < 3) {
        document.getElementById("nome").style.backgroundColor="red";
    }
    else {
        document.getElementById("nome").style.backgroundColor="white"
    }
 var email=document.getElementById("email").value; 
if(email.indexOf ("@")==-1 ||
   email.indexOf(".")==-1 ||
   email.length==0)
 }
 
)
  