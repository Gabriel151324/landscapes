function logar(){

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "Basketball" && password == "1244466666"){
        alert('Sucesso');
        location.href = "Card.html";
    }else{
        alert('Usuario ou senha incorreto');
    }
}