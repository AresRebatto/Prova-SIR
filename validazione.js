
function Validate()
{
    var contErrore = 0;
    var nome = document.modulo.nome.value;
    var cognome = document.modulo.cognome.value;
    var nascita = document.modulo.lNascita.value;
    var provincia = document.modulo.provincia.value;
    var codFisc = document.modulo.codFis.value;
    var nTel = document.modulo.numeroTel.value;
    var email = document.modulo.email.value;
    var cap = document.modulo.Cap.value;
    var dominio;

    for(var i = 0; i < email.length; i++)
    {
        if(email[i]=='@')
        {
            dominio = true;
        }
    }
    if(nome == "")
    {
        alert("Il nome non è valido");
        contErrore++;
    }
    if(cognome == "")
    {
        alert("Il cognome non è valido");
        contErrore++;
    }
    if(nascita == "")
    {
        alert("il luogo di nascita non è valido");
        contErrore++;
    }
    if(codFisc == "")
    {
        alert("Il codice fiscale non è valido");
        contErrore++;
    }
    if(provincia == "")
    {
        alert("La provincia non è valida");
        contErrore++;
    }
    if(isNaN(nTel) || nTel=="")
    {
        alert("Il numero di telefono non è valido");
        contErrore++;
    }
    if(email == "" || !dominio)
    {
        alert("l'email non è valida");
        contErrore++;
    }
    if(cap == "")
    {
        alert("Il CAP non è valido");
        contErrore++;
    }


    if(contErrore == 0)
    {
        window.open('corretto.html');
    }

}