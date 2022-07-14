
  document.getElementById("New_User_BTN").style = 'display:none';
  document.getElementById("Interface").style = 'display:none';
  
  function ModeAdm() {
  
    if (localStorage.getItem("Adm") == "off") {
      if (localStorage.getItem("Modo_OB") == 'Desenvolvedor' || localStorage.getItem("Modo_OB") == 'Adiministrador' || localStorage.getItem("Modo_OB") == 'Cordenador' || localStorage.getItem("Modo_OB") == 'Professor') {
          document.getElementById("add").innerHTML = "Desativar Desenvolvedor"
          document.getElementById("New_User_BTN").style = 'display:auto';
          document.getElementById("Interface").style = 'display:auto';
  
          window.location.href = "Inicio.html";
    localStorage.setItem("Adm", "off");  
  }
  } else {
    document.getElementById("add").innerHTML = "Modo Desenvolvedor"
    localStorage.setItem("Adm", "On");  
    window.location.href = "Inicio.html";
  
    document.getElementById("New_User_BTN").style = 'display:none';
    document.getElementById("Interface").style = 'display:none';
  
  // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  }
  
  
  if (localStorage.getItem("Adm") == "off") {
    
          document.getElementById("add").innerHTML = "Desativar Desenvolvedor"
          document.getElementById("New_User_BTN").style = 'display:auto';
          document.getElementById("Interface").style = 'display:auto';
  
  
  
  } else {
    document.getElementById("add").innerHTML = "Modo Desenvolvedor"
  
  
    document.getElementById("New_User_BTN").style = 'display:none';
    document.getElementById("Interface").style = 'display:none';
  
  // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  
  
  if (localStorage.getItem("Modo_OB") == 'Desenvolvedor' || localStorage.getItem("Modo_OB") == 'Adiministrador' || localStorage.getItem("Modo_OB") == 'Cordenador' || localStorage.getItem("Modo_OB") == 'Professor') {
  document.getElementById("Mode_ADM").style = ""
  } else {
      document.getElementById("add").innerHTML = "Modo Desenvolvedor"
  
    localStorage.setItem("Adm", "off");  
  document.getElementById("New_User_BTN").style = 'display:none';
  document.getElementById("Interface").style = 'display:none';
  document.getElementById("Mode_ADM").style = "color: rgba(0, 0, 0, 0.192);"

  
  
  // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  
x

  
 var data1 = new Date()
 const horas = data1.getHours();
 if (localStorage.getItem("Last_Login_Horas") == horas || localStorage.getItem("Last_Login_Horas") - horas == 1 && localStorage.getItem("Last_Login_Minutos") < minutos) {

   } else {
    localStorage.setItem("Load", "false");
    document.getElementById("Toast_Text").innerHTML = "Voçê Foi Desconectado, Reconect-se"
      Toast()
    
     setTimeout(function() {
    window.location.href = "index.html";
    }, 1000);
   }


