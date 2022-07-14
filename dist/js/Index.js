// MARK: =============================  Definir Firebase OnLine  ====================================




var firebaseConfig = {
    apiKey: "AIzaSyAqnA-19T5WQQn3M8sJ_-Up-ZrlSpsDO70",
      authDomain: "rocha-bank.firebaseapp.com",
      databaseURL: "https://rocha-bank-default-rtdb.firebaseio.com/",
      projectId: "rocha-bank",
      storageBucket: "rocha-bank.appspot.com",
      messagingSenderId: "203742887644",
      appId: "1:203742887644:web:6333509b03285f6ecffe19"
  };
  // =============================== Iniciar Firebase ========================================
  
  firebase.initializeApp(firebaseConfig);
  
  // =============================== Iniciar Variavens Da Firebase ===========================
  const auth = firebase.auth()
  const database = firebase.database()


// ===========================================================================================


function ObterCadastro() {
  var username = localStorage.getItem("Nome1");
  
  var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Cadastro")
  DadosPessoais.on('value', function(snapshot) {
    var data = snapshot.val()
      localStorage.setItem("Modo_OB", data.Modo);
      localStorage.setItem("Dia_Cadastro_OB", data.Dia_Cadastro);
   
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


}




function ObterDados() {

  var username = localStorage.getItem("Nome1");

                                      var DadosPessoais = database.ref('Usuarios/' + username + "/Dados/HistoricoLeal")
                                      DadosPessoais.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Vendas_OB", data.Vendas);
                                          localStorage.setItem("Provas_OB", data.Provas);
                                          localStorage.setItem("Social_OB", data.Social);
                                          localStorage.setItem("Total_OB", data.Total);
                                          localStorage.setItem("Diarial_OB", data.Dirial);
                                          localStorage.setItem("Server_OB", data.Server);
                                          localStorage.setItem("Project_OB", data.Project);
                                          localStorage.setItem("Total_OB", data.Total);
                                          localStorage.setItem("Total_OB", data.Total);
                                          
                                      });
 }


// ===========================================================================================


function ObterPessoal() {

    var username = localStorage.getItem("Nome1");
  
                                        var DadosPessoais = database.ref('Usuarios/' + username + "/Info/Pessoal")
                                        DadosPessoais.on('value', function(snapshot) {
                                          var data = snapshot.val()
                                            localStorage.setItem("Nome_Real_OB", data.Nome_Real);
                                            localStorage.setItem("Idade_OB", data.Idade);
                                            localStorage.setItem("Sexo_OB", data.Sexo);
                                            localStorage.setItem("Serie_OB", data.Serie);
                                            localStorage.setItem("Telefone_OB", data.Telefone);
                                            localStorage.setItem("Campo_OB", data.Campo);

                                        });
                                       
                                                         
   }

// ===========================================================================================
// ===========================================================================================
  


if (localStorage.getItem("Caso2") == "SUS") {
  document.getElementById("Toast_Text").innerHTML = localStorage.getItem("Message")
  Toast()

  window.location.href = "Conectar.html";
}



// ===========================================================================================
// ===========================================================================================
  
    
   if (localStorage.getItem("Metodo") == "Error") {
    
    var database_ref = database.ref()
    var Error = {
      Caso : "SUS",
      Message : "Sua Conta Foi Desativada Devido A Um Poblema Com Seus Dados!"
     }
     database_ref.child('Usuarios/' + username + "/Admin/Caso").set(Error)
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
  
    var user = auth.currentUser
  
    // =============================== Definir O Que E Firebase ====================================
  
    var database_ref = database.ref()

    // ===================================Definições =================================================
    var Pessoal_1_1_1 = {
      Nome_Real : localStorage.getItem("Nome_Real_CD"),
      Sexo : localStorage.getItem("Sexo"),
      Serie : localStorage.getItem("Serie_CD"),
      Idade : localStorage.getItem("Idade_CD"),
      Campo : localStorage.getItem("Matutino_Select"),
      Telefone : localStorage.getItem("Telefone_CD"),
    
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

        var Cadastro_1_2_1 = {
          Nome_Usuario : localStorage.getItem("Nome_Usuario"),
      Nome_Real : localStorage.getItem("Nome_Real_CD"),

          Dia_Cadastro : day,
          Senha : localStorage.getItem("Senha_CD"),
          Modo : localStorage.getItem("Modo")
        }
        var Cadastro_1_2_2 = {
          Senha : localStorage.getItem("Senha_CD")
        }
        var Cadastro_1_2_4 = {
          Ultimo_Login : day
        }
            var Notification = {
              1 : "Conta Registrada Com Sucesso!!",
              2 : "Configure Sua Conta!",
              3 : "Parabens Voçê Ganha 1 leal!",
              4 : "Versão Beta deectado!"
            }
                var Armazenar = {
                  Mensagens : "0%",
                  Fotos : "0%",
                  Posters : "0%",
                }
                  var Cecebi_Leal = {

                  
                    Total : "1.0",
                    Server : "1.0",
                    Social : "0.0",
                    Dirial : "0.0",
                    Project : "0.0",
                    Provas : "0.0",
                    Vendas : "0.0"

                  }
                      var Ganhos = {
                        1 : "Vazio Por Enquanto"
                      }
    // // =============================== Criar Usuario Data ==============================
  
                                   
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal").set(Pessoal_1_1_1)
  
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal/Descricao").set(Pessoal_1_1_2)
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal/Foto").set(Pessoal_1_1_3)
    database_ref.child('Usuarios/' +  full_name + "/Info/Pessoal/NomeUsuario").set(Pessoal_1_1_4)


    database_ref.child('Usuarios/' +  full_name + "/Info/Cadastro").set(Cadastro_1_2_1)
    database_ref.child('Usuarios/' +  full_name + "/Info/Cadastro/Senha").set(Cadastro_1_2_2)
    database_ref.child('Usuarios/' +  full_name + "/Info/Cadastro/UT_Login").set(Cadastro_1_2_4)

    database_ref.child('Usuarios/' +  full_name + "/Dados/Visu/Noti/Page1").set(Notification)
    database_ref.child('Usuarios/' +  full_name + "/Dados/Armazenar/Info").set(Armazenar)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoLeal").set(Cecebi_Leal)
    database_ref.child('Usuarios/' +  full_name + "/Dados/HistoricoGanhos").set(Ganhos)



if (localStorage.getItem("Metodo999") == "Register555") {
  
    login12()
}
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
    localStorage.setItem("Senha", "");
    localStorage.setItem("Last_Login", "12345678");

   
    window.location.href = "index.html";
  }








































function Register1992() {
    
  localStorage.setItem("Metodo", "Criar");

  if (document.getElementById("Modo").value == "1") {
  localStorage.setItem("Modo", "Aluno");
}
if (document.getElementById("Modo").value == "3") {
  localStorage.setItem("Modo", "Professor");
}
if (document.getElementById("Modo").value == "4") {
  localStorage.setItem("Modo", "Cordenador");
}
if (document.getElementById("Modo").value == "5") {
  localStorage.setItem("Modo", "Administrador");
}
if (document.getElementById("Modo").value == "6") {
  localStorage.setItem("Modo", "Desenvolvedor");
}


localStorage.setItem("Opt_1", "Personalizado");
function Opt_1_1() {
localStorage.setItem("Opt_1", "Personalizado");
}
function Opt_1_2() {
localStorage.setItem("Opt_1", "Masculino");
}
function Opt_1_3() {
localStorage.setItem("Opt_1", "Feminino");
}

                                            localStorage.setItem("Telefone_OB", data.Telefone);
if (localStorage.getItem("Matutino_Select") == "Medio") {
localStorage.setItem("Serie_CD", document.getElementById("Serie_CD").value);
} else {
localStorage.setItem("Serie_CD", document.getElementById("Seri_CD").value);

}
localStorage.setItem("Leal_INC", document.getElementById("Leal_INC").value); 
localStorage.setItem("Description12", document.getElementById("Description12").value);
localStorage.setItem("Contador", document.getElementById("Contador1").value);
localStorage.setItem("Nome_Real_CD", document.getElementById("Nome_Real_CD").value);

localStorage.setItem("Idade_CD1234", document.getElementById("Idade_CD12341").value);
localStorage.setItem("Senha_CD", document.getElementById("Senha_CD1").value); 
localStorage.setItem("Idade_CD1234", document.getElementById("Idade_CD12341").value); 
localStorage.setItem("Sexo", document.getElementById("Sexo").value); 


if (localStorage.getItem("Contador").length > 3 || !localStorage.getItem("Senha_CD").length == 0 && localStorage.getItem("Senha_CD").length > 3 && !localStorage.getItem("Idade_CD1234").value == "") {
var data45 = new Date()
const horas = data45.getHours();


localStorage.setItem("Criado", horas); 

Register420()

} else {
if (localStorage.getItem("Metodo") == "Criar") {
document.getElementById("Toast_Text").innerHTML = "Algumas das Informações Não Foram Aceitas!, Cadastro Mal Sucedido"
Toast()
}
}
}

function limit(element)
{
var max_chars = 4;
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
var max_chars = 13;
element.value = element.value.replace(/[^0-9]/g,'')
if(element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
}
}






function login12() {
if (localStorage.getItem("Tentar_Login") == "false") {
  document.getElementById("login-btn").style = 'opacity: 0.6;';
  localStorage.setItem("Tentar_Login", "true")

  localStorage.setItem("Tentou", 'true');
  localStorage.setItem("Nome2", document.getElementById("email").value);
  localStorage.setItem("Nome1", document.getElementById("email").value);
  localStorage.setItem("Senha1", document.getElementById("password").value);

  ObterCadastro();
  ObterPessoal();

  setTimeout(function() {
    if (localStorage.getItem("Nome_Real_OB") ==  document.getElementById("email").value) {
      if (localStorage.getItem("Senha_OB") ==  document.getElementById("password").value) {
         
        var data = new Date()
      
        const horas = data.getHours();
      const minutos = data.getMinutes();
     
      localStorage.setItem("Last_Login_Horas", horas);
      localStorage.setItem("Last_Login_Minutos", minutos);

if (localStorage.getItem("Modo_OB") == "Adiministrador" || localStorage.getItem("Modo_OB") == "Professor") {
  window.location.href = "Inicio.html";

} else {
  window.location.href = "Conectado.html";

}
      } else {
        document.getElementById("Toast_Text").innerHTML = "Senha Incorreta, Tente Novamente"
  Toast()
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


  