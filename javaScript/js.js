function x() {
    let username = document.getElementById("name").value
    let password = document.getElementById("password").value 
    if(username == "mikail" && password == 123){
        window.location.assign("index1.html");
        document.getElementById("dis").innerHTML="giriş başarılı";
    }else{
        document.getElementById("dis").innerHTML="Kullanıcı Adı veya Şifre Yanlış";

    }
}
