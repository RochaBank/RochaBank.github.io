

function Noti_Atu(uid1, uid2, uid3) {
 var database_ref = database.ref()
 full_name = uid1


 var a444444 = database.ref('Usuarios/' +  full_name + "/Dados/Visual/Notification/1")
 a444444.on('value', function(snapshot) {
var data = snapshot.val()
localStorage.setItem("Notifi1_1_Messager", data.a1);
localStorage.setItem("Notifi1_1_Title", data.title);
});





var a44444 = database.ref('Usuarios/' +  full_name + "/Dados/Visual/Notification/2")
 a44444.on('value', function(snapshot) {
var data = snapshot.val()
localStorage.setItem("Notifi1_2_Messager", data.a2);
localStorage.setItem("Notifi1_2_Title", data.title);
});




var a4444 = database.ref('Usuarios/' +  full_name + "/Dados/Visual/Notification/3")
 a4444.on('value', function(snapshot) {
var data = snapshot.val()
localStorage.setItem("Notifi1_3_Messager", data.a3);
localStorage.setItem("Notifi1_3_Title", data.title);
});

setTimeout(function() {













  var Acept1 = {
    title : uid2,
    a1 : uid3
    }
    
  var Acept2 = {
    title : localStorage.getItem('Notifi1_1_Title'),
    a2 : localStorage.getItem('Notifi1_1_Messager')
    }
    var Acept3 = {
        title : localStorage.getItem('Notifi1_2_Title'),
        a3 : localStorage.getItem('Notifi1_2_Messager')
        }
        var Acept4 = {
            title : localStorage.getItem('Notifi1_3_Title'),
            a4 : localStorage.getItem('Notifi1_3_Messager')
            }
                
    
database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/1").set(Acept1)
database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/2").set(Acept2)
database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/3").set(Acept3)
database_ref.child('Usuarios/' +  full_name + "/Dados/Visual/Notification/4").set(Acept4)
}, 1100);
}

function TransferSet(uid1, uid2, uid3, uid4 ,uid5, uid6, uid7, uid8) {
    var database_ref = database.ref()
    full_name = uid1
    full_name2 = uid2
   

if (uid8 == '1') {
    var a444444 = database.ref('Usuarios/' +  full_name + "/Dados/Transferencias")
    a444444.on('value', function(snapshot) {
   var data = snapshot.val()
   localStorage.setItem("Total1_Value", data.Total);
   });
}
if (uid8 == '2') {
    var a444444 = database.ref('Usuarios/' +  full_name2 + "/Dados/Transferencias")
    a444444.on('value', function(snapshot) {
   var data = snapshot.val()
   localStorage.setItem("Total1_Value", data.Total);
   });
}
   setTimeout(function() {
   const salario = localStorage.getItem("Total1_Value")

   const salarioFormatado = parseFloat(salario);
  
const solorio1 = salarioFormatado + 1

var Comprar = {
    De : uid1,
    Para : uid2,
    Valor : uid3,
    Data : uid4,
    Code : uid5,
    Message : uid6,
    Tipo : uid7
}
var Total = {
    Total : solorio1
}
if (uid8 == '1') {

database_ref.child('Usuarios/' +  full_name + "/Dados/Transferencias1/" + solorio1).set(Comprar)
database_ref.child('Usuarios/' +  full_name + "/Dados/Transferencias").set(Total)
}
if (uid8 == '2') {

    
database_ref.child('Usuarios/' +  full_name2 + "/Dados/Transferencias1/" + solorio1).set(Comprar)
database_ref.child('Usuarios/' +  full_name2 + "/Dados/Transferencias").set(Total)
}
}, 1000);
}