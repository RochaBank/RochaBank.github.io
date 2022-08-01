// MARK: =============================  Definir Firebase OnLine  ====================================
localStorage.setItem("Tentar_Login", "false")


setTimeout(function() {
  if (document.getElementById('Nome').innerHTML == '') {
   
      window.location.href = "index.html";
   
  }
  
  }, 2000);

// window.location.href = "Conectado.html";

var firebaseConfig = {
  apiKey: "AIzaSyCXbd8twOm0_RVCohDjMdNHKdqySPTRlPM",
      authDomain: "rocha-bank.firebaseapp.com",
      databaseURL: "https://rocha-bank-811ce-default-rtdb.firebaseio.com",
      projectId: "rocha-bank-811ce",

      messagingSenderId: "105823096937",
      appId: "1:105823096937:web:ae61163d65ab5ace2052f8"
  };
  // =============================== Iniciar Firebase ========================================
  
  firebase.initializeApp(firebaseConfig);
  
  // =============================== Iniciar Variavens Da Firebase ===========================
  const auth = firebase.auth()
  const database = firebase.database()


// ===========================================================================================


function ObterPessoal1() {
  var username = localStorage.getItem("Nome_Real_CD")
  
  var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Pessoal")
  DadosPessoais.on('value', function(snapshot) {
    var data = snapshot.val()
      localStorage.setItem("Nome_Real_OB1", data.Nome_Real);
  });
    
          
      };


      function ObterArmazenar() {
        var username = localStorage.getItem("Nome1")
        
        var DadosPessoais = database.ref('Usuarios/' + username + "/Dados/Armazenar/Info")
        DadosPessoais.on('value', function(snapshot) {
          var data = snapshot.val()
            localStorage.setItem("Total_OB", data.Total);
         
        });
          
                
            };


function ObterCadastro() {
  var username = localStorage.getItem("Nome1");
  
  var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Cadastro")
  DadosPessoais.on('value', function(snapshot) {
    var data = snapshot.val()
      localStorage.setItem("Modo_OB", data.Modo);
      localStorage.setItem("Dia_Cadastro_OB", data.Dia_Cadastro);
      localStorage.setItem("Contador_OB", data.Contador);
      localStorage.setItem("Uid2_OB", data.Endere);
   
  });
      var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Cadastro/Senha")
      DadosPessoais.on('value', function(snapshot) {
        var data = snapshot.val()
          localStorage.setItem("Senha_OB", data.Senha);
          
      });
      var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Cadastro/UT_Login")
      DadosPessoais.on('value', function(snapshot) {
        var data = snapshot.val()
          localStorage.setItem("Ultimo_Login_OB", data.Ultimo_Login);
          
      });

     
      var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Cadastro/Nome_Usuario")
      DadosPessoais.on('value', function(snapshot) {
        var data = snapshot.val()
      localStorage.setItem("Nome_Usuario_OB", data.Nome_Usuario);
       
          
      });
      var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Cadastro")
      DadosPessoais.on('value', function(snapshot) {
        var data = snapshot.val()
      localStorage.setItem("Uid_Soli_OB", data.Endere);
       
          
      });

}




function ObterDados() {

  var username = localStorage.getItem("Nome2");

                                      var DadosPessoais = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Total")
                                      DadosPessoais.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                         
                                          localStorage.setItem("Total1_OB", data.Total);
                                          
                                      });
                                      var DadosPessoais1 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Provas")
                                      DadosPessoais1.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Provas_OB", data.Provas);
                                         
                                      });
                                      var DadosPessoais2 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Ganhos")
                                      DadosPessoais2.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Ganhos_OB", data.Ganhos);
                                         
                                      });
                                      var DadosPessoais12 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Perdas")
                                      DadosPessoais12.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Perdas_OB", data.Perdas);
                                         
                                      });
                                      var DadosPessoais3 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Social")
                                      DadosPessoais3.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Social_OB", data.Social);
                                         
                                      });
                                      var DadosPessoais4 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Server")
                                      DadosPessoais4.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Server_OB", data.Server);
                                         
                                      });
                                      var DadosPessoais5 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Project")
                                      DadosPessoais5.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Project_OB", data.Project);
                                         
                                      });
                                       var DadosPessoais6 = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal/Diarial")
                                      DadosPessoais6.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Diarial_OB", data.Diarial);
                                         
                                      });
                                     
                                      
 }






// ===========================================================================================



function ObterLogin() {

  var username = localStorage.getItem("Nome2");
  

  var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Pessoal")
  DadosPessoais.on('value', function(snapshot) {
    var data = snapshot.val()
      localStorage.setItem("Nome_Real_OB1", data.Nome_Real);
      
  });
}
function ObterPessoal() {

    var username = localStorage.getItem("Nome2");
  
                                        var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Pessoal")
                                        DadosPessoais.on('value', function(snapshot) {
                                          var data = snapshot.val()
                                            localStorage.setItem("Nome_Real_OB", data.Nome_Real);
                                            localStorage.setItem("Idade_OB", data.Idade);
                                            localStorage.setItem("Sexo_OB", data.Sexo);
                                            localStorage.setItem("Serie_OB", data.Serie);
                                            localStorage.setItem("Campo_OB", data.Campo);

                                        });
                                       
                                                         
   }

ObterQuantidade()

   
function ObterQuantidade() {



                                      var DadosPessoais = database.ref('Usuarios1/Quantidade')
                                      DadosPessoais.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Quantidade", data.Alunos);
                                        
                                      });
                                     
                                                       
 }

 
// ===========================================================================================
// ===========================================================================================
  

if (localStorage.getItem("Caso2") == "SUS") {
  document.getElementById("Toast_Text").innerHTML = localStorage.getItem("Message")
  Toast()

  window.location.href = "index.html";
}




function ObterBanido() {



  var DadosPessoais = database.ref('Usuarios/' + username + '/Dados/Caso')
  DadosPessoais.on('value', function(snapshot) {
    var data = snapshot.val()
      localStorage.setItem("Caso_OB", data.Caso);
      localStorage.setItem("Message_OB", data.Message);
    
  });
 if (localStorage.getItem("Metodo") == BAN) {
  var database_ref = database.ref()
    var Error = {
      Caso : "SUS",
      Message : "Sua Conta Foi Desativada Devido A Um Poblema Com Seus Dados!"
     }
     database_ref.child('Usuarios/' + username + "/Dados/Caso").set(Error)

     localStorage.setItem("Last_Login_Horas", "7654345678765456788");

 }
                   
}



// ===========================================================================================
// ===========================================================================================
  
    
   if (localStorage.getItem("Metodo") == "Error") {
    
  
    }
  


  // ===========================================================================================
// ===========================================================================================


// ==============================  Function Regsiter  =============================================


function Register420 () {


  // =============================== Variavens Nessacarias =================================
  
  full_name = localStorage.getItem("Nome_Real_CD");
 
  
  // ===============================  Defini Horas ====================
  
    var data = new Date(),
    dia  = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(),
    mesF = (mes.length == 1) ? '0'+mes : mes,
    anoF = data.getFullYear();
    const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();
  const day = diaF+"/"+mesF+"/"+anoF+" "+[horas, minutos, segundos].join(':');
  
    // =============================== Declarar A Firebase =============================
  

  
    // =============================== Definir O Que E Firebase ====================================
  
    var database_ref = database.ref()

    // ===================================Definições =================================================
    var Pessoal_1_1_1 = {
      Nome_Real : localStorage.getItem("Nome_Real_CD"),
      Sexo : localStorage.getItem("Sexo"),
      Serie : localStorage.getItem("Serie_CD"),
      Idade : localStorage.getItem("Idade_CD1"),
      Campo : localStorage.getItem("Matutino_Select"),
    
    }
    var Pessoal_1_1_2 = {
      Descricao : localStorage.getItem("Description12")
    }
    var Pessoal_1_1_3 = {
      Foto : "Foto_1"
    }
    var Pessoal_1_1_4 = {
      Nome_Usuario : localStorage.getItem("Nome_Usuario_CD")
    }

      
        var Cadastro_1_2_2 = {
          Senha : localStorage.getItem("Senha_CD")
        }
        var Cadastro_1_2_4 = {
          Ultimo_Login : day
        }
            var Notification1 = {
              title : "Registro",
              a1 : "Conta Registrada Com Sucesso!!"
             
            }
            var Notification2 = {
              title : "Alerta",

              a2 : "A Varsão 1.0 Pode Ter bugs!!"
             
            }
            var Notification3 = {
              title : "Parabens",

              a3 : "Voçê Ganhou 1 Leal"
             
            }
            var Notification4 = {
              title : "Valeu Pela Força",

              a4 : "Obrigado"
             
            }
            
                var Armazenar = {
                  Toatal : "0%",
                  Mensagens : "0%",
                  Fotos : "0%",
                  Posters : "0%"
                }
                  var Cecebi_Leal = {

                  
                    
                    Diarial : "0"
                 

                  }
                  var Cecebi1_Leal = {

                  
                  
                    Project : "0"
                

                  }
                  var Cecebi2_Leal = {

                  
                
                    Provas : "0"
                 
                  }
                  var Cecebi3_Leal = {

                  
                 
                    Server : "1"
                 
                  }
                  var Cecebi4_Leal = {

                
                    Social : "0"
                    

                  }
                  var Cecebi5_Leal = {

           
                    Ganhos : "0"

                  }
                  if (document.getElementById('Leal_INC').value == '') {
                    var Cecebi6_Leal = {

           
                      Total : '1.0'
  
                    }
                  } else {
                  var Cecebi6_Leal = {

           
                    Total : document.getElementById('Leal_INC').value

                  }
                }
                  var Cecebi8_Leal = {

           
                    Perdas : "0"

                  }
                      var Ganhos = {
                        Por : "Oferecido Pelo Servidor",
                        Data : day,
                        Valor : "1.0",
                      }
                      var Ganhos1 = {
                        Quant : "1",
                        a1 : localStorage.getItem("Nome_Usuario_CD")
                      }
                      const salario = localStorage.getItem("Quantidade")

                      const salarioFormatado = parseFloat(salario);
                     
                     
                          var Usuarios = {
                            Alunos : salarioFormatado + 1
                           
                          }
                          var Usuarios1 = {
                            Nome_Real : localStorage.getItem("Nome_Real_CD"),
                            Nome_Usuario : localStorage.getItem("Nome_Usuario_CD"),
                            Amigos : "0",
                            Vendas : "0",
                            Compras : "0",
                            Leais : "0"
                          }
                                var Pagamentos = {
                                  Credit : Math.random(1, 100),
                                  Historico : "0",
                                  
                                }
                                var Pagamentos1 = {
                               0 : "Vazio"
                                }
                                  var Livre = {
                                    Caso : "Livre",
                                    Messangem : "Nada Aqui!"
                                  }
                                  var Cadastro_1_2_1 = {
                                    Nome_Usuario : localStorage.getItem("Nome_Usuario_CD"),
                                Nome_Real : localStorage.getItem("Nome_Real_CD"),
                                Endere : salarioFormatado + 1,
                                    Dia_Cadastro : day,
                                    Senha : localStorage.getItem("Senha_CD"),
                                    Modo : localStorage.getItem("Modo"),
                                    Contador : localStorage.getItem("Contador_CD1")
                                  }
                                  var Trans = {
                                    Total : 0
                                  }
                         
    // // =============================== Criar Usuario Data ==============================
  
                                   
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal").set(Pessoal_1_1_1)
  
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal/Descricao").set(Pessoal_1_1_2)
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal/Foto").set(Pessoal_1_1_3)
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal/NomeUsuario").set(Pessoal_1_1_4)


    database_ref.child('Usuarios/' +  full_name + "/Info/Cadastro").set(Cadastro_1_2_1)
    database_ref.child('Usuarios/' +  full_name + "/Info/Cadastro/Senha").set(Cadastro_1_2_2)
    database_ref.child('Usuarios/' +  full_name + "/Info/Cadastro/UT_Login").set(Cadastro_1_2_4)

    database_ref.child('Usuarios/' +  full_name + "/Dados/Armazenar/Info").set(Armazenar)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Diarial").set(Cecebi_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Project").set(Cecebi1_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Provas").set(Cecebi2_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Server").set(Cecebi3_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Social").set(Cecebi4_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Ganhos").set(Cecebi5_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Perdas").set(Cecebi8_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal/Total").set(Cecebi6_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoGanhos/" + anoF + "/" + mesF + "/" + diaF + "/1").set(Ganhos)
    database_ref.child('Usuarios/' +  full_name + "/Dados/ListaDeAmigos").set(Ganhos1)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/1").set(Notification1)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/2").set(Notification2)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/3").set(Notification3)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/4").set(Notification4)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Caso").set(Livre)

database_ref.child('Usuarios/' +  full_name + "/Dados/Transferencias").set(Trans)


    database_ref.child('Usuarios/' +  full_name + "/Dados/Pagamento/Info").set(Pagamentos)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Pagamento/Info/History").set(Pagamentos1)


ObterQuantidade()

setTimeout(function() {
  const salario = localStorage.getItem("Quantidade")

  const salarioFormatado = parseFloat(salario);
  const salario1 = salarioFormatado + 1;
  database_ref.child('Usuarios1/Quantidade').set(Usuarios)
  database_ref.child('Usuarios1/Uid/' + salario1).set(Usuarios1)



  setTimeout(function() {
  document.getElementById("Toast_Text").innerHTML = "Sua Conta Foi Criada"
  Toast()
  document.getElementById("Create").stye = "display: none;"
  window.location.href = "index.html";
}, 1300);
}, 1300);
  }
  

 // ===========================================================================================
// ============================================================================================


// ==============================  Segurança  =================================================


// document.addEventListener('contextmenu', event => event.preventDefault());
 document.getElementById("login-btn").style = 'display:auto';


 
 // ===========================================================================================
// ============================================================================================


// ==============================  Toast  =====================================================


function Toast() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

 // ===========================================================================================
// ============================================================================================


// ==============================  Toast  =====================================================

function lettersOnly(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 33 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
 
      return false;
  }
  return true;
}





















function bem_vindo_confirm() {
  localStorage.setItem("Metodo1", 'Vez');
  

  document.getElementById("Boas555").style = 'display:none';
  

}
  

if (localStorage.getItem("Vez22") == "true") {
  document.getElementById("Boas555").style = 'display:none';
} else {
  document.getElementById("Boas555").style = 'display:auto';

}


  localStorage.setItem("Metodo", "Logi1n");






  function Desc() {
    localStorage.setItem("Caso", "Livre");
    localStorage.setItem("Nome", "");
    localStorage.setItem("Nome1", "");
    localStorage.setItem("Nome2", "");
    localStorage.setItem("Serie", "");
    localStorage.setItem("Contador", "");
    localStorage.setItem("Senha", "");
    localStorage.setItem("Last_Login", "12345678");

   
    window.location.href = "index.html";
  }










































function limit(element)
{
var max_chars = 8;
element.value = element.value.replace(/[^0-9]/g,'')
if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}

}

function limit1(element)
{
var max_chars = 2;
element.value = element.value.replace(/[^1-9]/g,'')
if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}
function limit2(element)
{
var max_chars = 20;
if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}
function limit3(element)
{
var max_chars = 30;

if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}
function limit4(element)
{
var max_chars = 100;

if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}
function limit5(element)
{
var max_chars = 8;
element.value = element.value.replace(/[^0-9]/g,'')
if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}
function limit523(element)
{
var max_chars = 16;
element.value = element.value.replace(/[^0-9]/g,'')
if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}





function login12() {
  
data1 = new Date()
const horas5446545673 = data1.getHours();


  if (horas5446545673 == localStorage.getItem('36474656473376473761')) {
    if (localStorage.getItem('Tentar_Login') == 'false') {
      if (localStorage.getItem("Senha_OB") ==  document.getElementById("password").value) {
    if (localStorage.getItem("Nome_Real_OB1") ==  document.getElementById("email").value) {
  localStorage.setItem('36474656473376473761', '1')
  setTimeout(function() {
    document.getElementById("login-btn").style = 'opacity: 1;';
    localStorage.setItem("Tentar_Login", "false")

    document.getElementById("Toast_Text").innerHTML = "Desbloqueado"
    Toast()
  }, 1500);
    }
        }
    document.getElementById("Toast_Text").innerHTML = "Conta Bloqueada Temporariamente, Volte Em Uma Hora"
    Toast()
    document.getElementById("login-btn").style = 'opacity: 0.7;';
  localStorage.setItem("Tentar_Login", "true")
    }
    } else {

  if (localStorage.getItem('3647465647337647376') == '11111') {
   

  localStorage.setItem('36474656473376473761', '1')

  }
  if (localStorage.getItem('3647465647337647376') == 'null') {
    localStorage.setItem('3647465647337647376', 1)

  }
  

if (localStorage.getItem("Tentar_Login") == "false") {
  document.getElementById("login-btn").style = 'opacity: 0.6;';
  localStorage.setItem("Tentar_Login", "true")

  localStorage.setItem("Tentou", 'true');
  localStorage.setItem("Nome2", document.getElementById("email").value);
  localStorage.setItem("Nome1", document.getElementById("email").value);
  localStorage.setItem("Senha1", document.getElementById("password").value);

  ObterCadastro();
  ObterPessoal();
  ObterLogin();

  setTimeout(function() {
    if (localStorage.getItem("Nome_Real_OB1") ==  document.getElementById("email").value) {
      if (localStorage.getItem("Senha_OB") ==  document.getElementById("password").value) {
         
      
        localStorage.setItem('3647465647337647376', null)

      

localStorage.setItem('Nome_Real_OB1', "Vazio")
data = new Date(),
dia  = data.getDate().toString(),
diaF = (dia.length == 1) ? '0'+dia : dia,
mes  = (data.getMonth()+1).toString(),
mesF = (mes.length == 1) ? '0'+mes : mes,
anoF = data.getFullYear();
const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
const day = diaF+"/"+mesF+"/"+anoF+" "+[horas, minutos, segundos].join(':');
     
      localStorage.setItem("Last_Login_Horas", horas);
      localStorage.setItem("Last_Login_Minutos", minutos);
      localStorage.setItem("Last_Login_Dia", data);
      localStorage.setItem("Last_Login_Completo", day);

if (localStorage.getItem("Modo_OB") == "Adiministrador" || localStorage.getItem("Modo_OB") == "Professor" || localStorage.getItem("Modo_OB") == "Desenvolvedor") {
  window.location.href = "Inicio.html";

} else {
  window.location.href = "Conectado.html";

}
      } else {
        document.getElementById("Toast_Text").innerHTML = "Senha Incorreta, Tente Novamente"
  Toast()
  localStorage.setItem('3647465647337647376', localStorage.getItem('3647465647337647376') + 1)

  if (localStorage.getItem('3647465647337647376') == '11111') {
    data1 = new Date()
    const horas = data1.getHours();


  localStorage.setItem('36474656473376473761', horas)

  }
  setTimeout(function() {
  document.getElementById("login-btn").style = 'opacity: 1;';
  localStorage.setItem("Tentar_Login", "false")
}, 1500);
      }
    } else {
      document.getElementById("Toast_Text").innerHTML = "Nome Incorreto, Tente Novamente"
      Toast()
      setTimeout(function() {
        document.getElementById("login-btn").style = 'opacity: 1;';
        localStorage.setItem("Tentar_Login", "false")
      }, 1500);
    }
  
  }, 1000);
}
}
       }

function Show_pass1() {
  var x = document.getElementById("password");
  var y = document.getElementById("Show_Pass");
  if (x.type === "password") {
    x.type = "text";
    y.innerHTML = "Ocultar"
  } else {
    x.type = "password";
    y.innerHTML = "Mostrar"

  }
  }

  if (typeof(Storage) !== "undefined") {
    
    } else {
      localStorage.setItem("Load", "false");
      document.getElementById("Toast_Text").innerHTML = "Error 001, Navegador Incompativel"
        Toast()
      
       setTimeout(function() {
      window.location.href = "error-002.html";
      }, 1000);
    }


  


    function Product_Photo(element, idss) {
      if (idss == "1")  {
        element.src = "./static/photos/Caneta.jpg"

      }

    }
