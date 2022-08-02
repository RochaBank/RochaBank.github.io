function Banner(uid1, uid2) {
    
    var database_ref = database.ref()



    var Ban = {
        Caso : 'BAN',
        Messagem : uid2
    }

   database_ref.child('Usuarios/' +  uid1 + "/Dados/Caso").set(Ban)

    document.getElementById("Toast_Text").innerHTML = "Hack Ne?"
    Toast()

    setTimeout(function() {
        localStorage.setItem("Caso", "Livre");
    localStorage.setItem("Nome", "");
    localStorage.setItem("Nome1", "");
    localStorage.setItem("Nome2", "");
    localStorage.setItem("Serie", "");
    localStorage.setItem("Contador", "");
    localStorage.setItem("Senha", "");
    localStorage.setItem("Last_Login", "12345678");
      
        window.location.href = "index.html";
      }, 1500);

}