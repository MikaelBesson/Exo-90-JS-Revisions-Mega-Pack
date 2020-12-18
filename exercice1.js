    //Consignes :

   // - Créer une variable nomVoiture, lui assigner la valeur suivante : "Peugeot"
maFonction();
let NomVoiture = "Peugeot";
    //- Créer une variable appelé x, lui assigner la valeur suivante : 50
let x = 50;
    //- Créer un div ou un span sur la page html ayant pour id "demo"
    // -  Créer deux variables appelés z et w permettant de calculer 5+10, afficher le résultat de l'opération en utilisant
    //   la phrase suivante dans l'élément ayant pour id "demo" : "z vaux 5, w vaux 10, le résultat est: {z+w} ",
    //   vous utiliserez les valeurs des variables dans la phrase ( vous n'écrivez pas directement la phrase telle quelle )
let z = 5;
let w = 10;
document.getElementById("demo").innerHTML = "z vaux "+z+ " w vaux "+w+ " le résultat est: {z+w} = " + (z+w);
    //- Créer une variable appelé d et assigner le résultat de z+w, afficher la valeur de d dans une boite d'alerte
let d = z+w;
alert("d est egal a : " + d)
    //- En une seule ligne de code, déclarer trois variables : prenom = "John" nom = "doe" age = 35
let personne = prenom = "john", nom ="doe"; age = 35;
    //- Dans une boite d'alerte, afficher le résultat de 10 multiplié par 5 ( vous ne devez pas créer de variables )
alert("resultat de 10*5= "+10*5);
    //- Dans une boite d'alerte, afficher le résultat de 10 divisé par 2 ( pas de variables non plus )
alert("resultat de 10/2= "+10/2);
    //BONUS - Afficher dans une boite d'alerte, le résultat de ce qui reste aprés la division de 15 par 9
alert("resultat de 15%9= "+15%9);
    //- Déclarer deux variables : l =10 , k = 5, en une seule ligne et sous forme raccourcie, faire en sorte que
    // l soit égal à 15 en utilisant la variable k
let l =10,k =5;
l= l+k;
alert("l vaut : "+ l);
    //- Créer une fonction appelée "maFonction" , cette fonction va afficher une boite d'alerte avec le message suivant :
    //  "Salut tout le monde !"
    // Executez cette fonction au chargement de la page
function  maFonction(){
    alert("salut tout le monde");
}
    //- Créer une fonction appelée "maFonctionDeRetour" qui va retourner le texe suivant : "Bonjour!" ,
    // afficher cette valeur de
    //  retour dans le div ayant pour id "demoRetour" ( le div est déjà sur la page html )
function maFonctionRetour(){
    document.getElementById("demoRetour").innerHTML = "Bonjour le monde !!!";
}
maFonctionRetour();
    //- Créer un bouton sur la page html et attrbuez lui l'id suivant : "monBoutton"
    // - Ajoutez un écouteur d'événement 'click' associé au bouton qui éxécutera une fonction anonmyme
    // affichant une boite d'alerte
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function (){
    alert("le bouton a etait clicker !!!!!")
});
    //- Créer un div dans la page ayant pour id "changeSurOver" , associer un événement 'mouseover' en javascript qui executera
    // une fonction anonyme permettant de changer le fond du div en rouge
let change = document.getElementById("changeSurOver");
change.addEventListener("mouseover", function (){
    change.style.backgroundColor = "red";
});
    //- Créer une variable appelée txt, lui associer la valeur suivante : "une longue phrase" , créez une deuxieme variable
    //  appelée longueur qui va stocker la longueur de la variable "txt" puis afficher dans une boite d'alerte la variable "longueur"
let txt = "une longue phrase";
let longueur = txt.length;
alert("la valeur de ma chaine de caractere est : "+longueur);
    //- Créer deux variables appelées str1 et str2 ayant pour valeur respectivement "Bonjour" et "le monde!" , dans une boite d'alerte
    // afficher les deux variables en une seule ligne.
let str1 = "bonjour";
let str2 = "le monde";
alert(str1+str2);
    //- Créer un tableau appelé listeVoitures, lui attribuer les valeurs suivante : "Renault","Volvo","Citroen"
    // stocker dans une variable appelée maVoiture la seconde valeur du tableau ( utiliser le tableau pour récuperer la valeur )
let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];
    //- Changer la premiere valeur du tableau listeVoitures et lui attribuer la valeur "Ford"
listeVoitures.splice(0,1,"Ford");
    alert(listeVoitures);
    //- Dans une boite d'alerte, afficher la longueur du tableau listeVoitures
alert("longueur du tableau = "+listeVoitures.length);
    //- Retirer la derniére valeur du tableau listeVoitures en utilisant la fonction adéquate ( ne modidifiez pas le tableau
    // directement )
let supprime = listeVoitures.pop();
alert("citroen a etait enlever du tableau "+listeVoitures);
    //- Ajouter à la fin du tableau listeVoitures la valeur suivante : "Ferrari" en utilisant la fonctioon adéquate (
    // ne modifiez pas le tableau directement )
let ajoute = listeVoitures.push("ferrari");
alert("ferrari a etait ajoutez au tableau "+listeVoitures);
    //- Créer une variable appelée rNumber, lui associer comme valeur un nombre aléatoire généré avec la méthode javascript
    // appropriée
let rNumber = Math.floor(Math.random()* 100);
alert("mon nombre aleatoire est : "+ rNumber) ;
    // - Créer une variable appelée fNumber, lui associer comme valeur un nombre à virgule de votre choix ( par exemple : 15.7 )
let fNumber = 15.7;
    // Utilisez la méthode javascript appropriée pour arrondir ce nombre à l'entier le plus proche
fNumber = Math.floor(fNumber);
alert("le nombre 15.7 est devenue : "+fNumber);
    // - Créer deux variables : nombreUn et nombreDeux , assigner comme valeurs respectivement 10 et 5
let nombreUn = 10;
let nombreDeux = 5;
    // Créez une condition qui vérifie si nombreUn est supérieur à nombreDeux, si c'est le cas, afficher une boite d'alerte
    // affichant "nombreUn est supérieur à nombreDeux"
if(nombreUn > nombreDeux){
    alert("nombreUn est supérieur à nombreDeux");
}
    // - Créer deux variables : nombreTrois et nombreQuatre, assigner comme valeur 10 aux deux variables
let nombreTrois =10;
let nombreQuatre =10;
    // Créer une condition qui vérifie que nombreTrois est égal à nombreQuatre, si c'est le cas, afficher une boite d'alerte
    // affichant "nombreTrois est égal à nombreQuatre"
if(nombreTrois === nombreQuatre){
    alert("nombreTrois est égal à nombreQuatre");
}
    // - Créez une condition qui vérifie que nombreUn et nombreDeux n'ont pas la même valeur, si c'est le cas, afficher une boite
    // d'alerte affichant "nombreUn n'est pas égal à nombreDeux"
if(nombreUn != nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux");
}
    // - Créer une boucle qui s'éxécute de 0 à 9, dans la boucle , utiliser console.log() pour afficher l'index de la boucle
for(let i = 0; i < 10; i++){
    console.log("i vaut : "+i);
}
    // - Créer un tableau appelé fruits qui contiendra les éléments suivant : "pomme","banane","poire"
let fruit =["pomme","banane","poire"];
    //   Créer une boucle qui parcourt toutes les entrées de ce tableau et afficher l'index en utilisant console.log à
    //   l'intérieur de la boucle
for(let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
    // - Créer une boucle qui s'éxécute tant que la variable i est inférieure à 10 ( utiliser l'instruction while )
let i =0;
while (i < 10){
    console.log("dans la boucle while i vaut : "+i);
    i++;
}
    // - Créer une boucle qui s'éxécute tant que la variable i est inférieure à 10 mais qui incrémente i de 2 à chaque itération
    //  ( utiliser un while )
    i =0;
while (i < 10){
    console.log("i incrementer de 2 vaut : "+i);
    i+=2;
}
    // - Créer une boucle qui s'éxécute de 0 à 10, dans la boucle quand la valeur d'index est égale à 5, afficher une boite
    // d'alerte affichant le message de votre choix.
for(let i =0; i < 10; i++){
    if (i === 5){
        alert("a ce passage de la boucle i vaut " + i);
    }
}




