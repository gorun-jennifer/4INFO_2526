function password(){
    let password = prompt("inserisci password")
    password == null && alert ("operazione annullata")
    password != "Agnell1no" && password != null && alert("password non corretta")
    password == "Agnell1no" && alert("entrato")
}

let user = prompt("inserisci l'username");
user = null && alert("errore")
user != "admin" && user != null && alert("chi sei")
user == "admin" && password()

