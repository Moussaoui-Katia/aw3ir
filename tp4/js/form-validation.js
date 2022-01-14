window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp

   

    let form = document.getElementById('formulaire');
  
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    var Modalok = new bootstrap.Modal(document.getElementById('Modalok'));
    var myModalDate = new bootstrap.Modal(document.getElementById('myModalDate'));
    var ModalLangueur = new bootstrap.Modal(document.getElementById('ModalLangueur'));

    let mail = document.getElementById('mail');
    var email =mail.value
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      
     

     
    
    form.addEventListener('submit',function(event){
      var lenom = document.getElementById('nom');
      var lepnom = document.getElementById('prenom');
      var ladate = document.getElementById('date');
      var leadr = document.getElementById('adresse');
      var lemail = document.getElementById('mail');
      
      var mydate = Date.parse(ladate.value.replace(/-/g,","));
      let dateNaissance = new Date(mydate);
      let dateNaissanceTimestamp = dateNaissance.getTime();
      let nowTimestamp = Date.now();
      
      if (lenom.value.trim() ==""||lepnom.value.trim() ==""|| leadr.value.trim() ==""||lemail.value.trim() ==""||ladate.value.trim() ==""){
        event.preventDefault();
        myModal.show(); 
        
      }else{
          
        if(5>lenom.value.length||5>lepnom.value.length || 5>leadr.value.length){
          event.preventDefault();
          ModalLangueur.show();
        }else{

          if (nowTimestamp < dateNaissanceTimestamp){
            event.preventDefault();
            myModalDate.show();
          }else{
          document.querySelector(".modalok-title").textContent = document.querySelector("#prenom").value;
          document.querySelector(".modalok-age").textContent = document.querySelector("#date").value;
          document.querySelector(".modalok-adr").textContent = document.querySelector("#adresse").value;
          Modalok.show(); 
          event.preventDefault();
        }}
        
          

        
        
       
      }

      var date1 = new Date(document.getElementById('date'));
      var date2 = new Date();
      console.log;

      
      
    });



contactStore.add(document.querySelector("#nom").value,document.querySelector("#prenom").value,document.querySelector("#date").value,document.querySelector("#adresse").value,document.querySelector("#mail").value);
var contactList = contactStore.getList();
for(var index in contactList){
 console.log(contactList[index].name);
 console.log(contactList[index].firsname);
 console.log(contactList[index].date);
 console.log(contactList[index].adress);
 console.log(contactList[index].mail);
 document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
'<tr><td>'+
 contactList[index].name+
 '</td><td>'+
 contactList[index].firsname+
 '</td><td>'+
 contactList[index].date+
 '</td><td>'+
 contactList[index].adress+
 '</td><td>'+
 contactList[index].mail+'</td></tr>';

    
  }
 
}
 function calcNbChar(id) {
  document.querySelector(`#${id} + span`).textContent = 1+document.querySelector(`#${id}`).value.length + " caractères";
}
 
