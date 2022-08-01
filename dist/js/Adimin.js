
  document.getElementById("Layout").style = 'display:none';
  document.getElementById("New_User_BTN").style = 'display:none';
  document.getElementById("Interface").style = 'display:none';
  
  function ModeAdm() {
  
    if (localStorage.getItem("Adm") == "off") {
      if (localStorage.getItem("Modo_OB") == 'Desenvolvedor' || localStorage.getItem("Modo_OB") == 'Adiministrador' || localStorage.getItem("Modo_OB") == 'Cordenador' || localStorage.getItem("Modo_OB") == 'Professor') {
          document.getElementById("add").innerHTML = "Desativar Desenvolvedor"
  document.getElementById("Layout").style = 'display:auto';
  document.getElementById("New_User_BTN").style = 'display:auto';
          document.getElementById("Interface").style = 'display:auto';
  
          document.location.reload(true)

    localStorage.setItem("Adm", "On");  
  }
  } else {
    document.getElementById("add").innerHTML = "Modo Desenvolvedor"
    localStorage.setItem("Adm", "off");  
    document.location.reload(true)
  
  document.getElementById("Layout").style = 'display:none';
  document.getElementById("New_User_BTN").style = 'display:none';
    document.getElementById("Interface").style = 'display:none';
  
  // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  }
  
  
  if (localStorage.getItem("Adm") == "off") {
    
          document.getElementById("add").innerHTML = "Desativar Desenvolvedor"
  document.getElementById("Layout").style = 'display:auto';
  document.getElementById("New_User_BTN").style = 'display:auto';
          document.getElementById("Interface").style = 'display:auto';
  
  
  
  } else {
    document.getElementById("add").innerHTML = "Modo Desenvolvedor"
  
  
  document.getElementById("Layout").style = 'display:none';
  document.getElementById("New_User_BTN").style = 'display:none';
    document.getElementById("Interface").style = 'display:none';
  
   document.addEventListener('contextmenu', event => event.preventDefault());
  }
  
  
  if (localStorage.getItem("Modo_OB") == 'Desenvolvedor' || localStorage.getItem("Modo_OB") == 'Adiministrador' || localStorage.getItem("Modo_OB") == 'Cordenador' || localStorage.getItem("Modo_OB") == 'Professor') {
  document.getElementById("Mode_ADM").style = ""
  } else {
      document.getElementById("add").innerHTML = "Modo Desenvolvedor"
  
    localStorage.setItem("Adm", "off");  
  document.getElementById("New_User_BTN").style = 'display:none';
  document.getElementById("Interface").style = 'display:none';
  document.getElementById("Layout").style = 'display:none';
  document.getElementById("Mode_ADM").style = "color: rgba(0, 0, 0, 0.192);"

  
  
   document.addEventListener('contextmenu', event => event.preventDefault());
  }
  
  localStorage.setItem("Load11", "false");
