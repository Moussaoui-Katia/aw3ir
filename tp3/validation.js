window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
      });
     
     // Y mettre le code Javascript pour valider tous les champs du formulaire
     
     var nom=document.getElementById("nom").value;
     var prenom=document.getElementById("prenom").value;
     var date=document.getElementById("date").value;
     var adresse=document.getElementById("adresse").value;
     var mail=document.getElementById("mail").value;
 
     document.getElementById("error").innerHTML = "";
     document.getElementById("error").style.display="none";
     document.getElementById("resultat").style.display="none";
 

                     
                     if(nom.length <5){ document.getElementById("error").innerHTML +="Le nom doit contenir au moins 5 caractéres <br>";}
                     if(prenom.length <5){ document.getElementById("error").innerHTML +="Le prénom doit contenir au moins 5 caractéres  <br>";}
                     if(date.length <5){ document.getElementById("error").innerHTML +="La date de naissance doit contenir au moins 5 caractéres <br>";}
                     if(adresse.length <5){ document.getElementById("error").innerHTML +="L'adresse doit contenir au moins 5 caractéres <br>";}
                     if(mail.length <5){ document.getElementById("error").innerHTML +="Le mail doit contenir au moins 5 caractéres <br>";}
                      if (document.getElementById("error").innerHTML == "") { 
                          document.getElementById("resultat").style.display= 'block';
                          document.getElementById("resultat").innerHTML = 
                      "Bienvenue " + document.querySelector("#nom").value; }else
                      {
                          document.getElementById("error").style.display = 'block';
                      }
                      
 
     };
    