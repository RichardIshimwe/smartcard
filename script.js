var x  = document.getElementById("login");
var y  = document.getElementById("register");
var z  = document.getElementById("btn");
const name = document.getElementById('name');
const email = document.getElementById('email');
const messageHTML = document.getElementById('uid1');
const send = document.getElementById('submit');
const checkbox = document.querySelector("input[name=checkbox]");

let randomcode = generateCode();

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

let message = `We have received your request! Kindly use this code: ${randomcode} as your reference with further inquiries!`;

function sendemail(e){

e.preventDefault();

Email.send({
    SecureToken : "122b46f3-946a-4a63-aefe-18798760c49c",
    To : email.value,
    From : "princeelysee@gmail.com",
    Subject : "Contact Form",
    Body : messageHTML.value + ":is your card code from smart card"
}).then(
  message => alert(message)
);
clearInputFields();
console.log(message);
}

checkbox.addEventListener('change', sendemail);

function generateCode(){
    const set = "1234567890";
    let code = "";
    for(let i=0; i<5; i++) {
       let pos = Math.floor(Math.random()*set.length);
       code += set[pos];
    }
    return code;
}

function clearInputFields(){
  name.value = "";
  email.value = "";
  messageHTML.value = "";
}
// STMP ElasticMail
// Username: iotsmartcardgmail.com
// Password: D9B9A5D4EC32001B60AE166DDDD1D6F73BC3
// Server: smtp.elasticemail.com
// Port: 2525
// Security token: D9B9A5D4EC32001B60AE166DDDD1D6F73BC3


           function register(){
                    x.style.left = "-450px";
                    y.style.left = "0px";
                    z.style.left = "80px";
                    
                }
                function login(){
                    
                    x.style.left = "0px";
                    y.style.left = "450px";
                    z.style.left = "0px";
                    
                }

// STMP ElasticMail
// Username: iotsmartcardgmail.com
// Password: D9B9A5D4EC32001B60AE166DDDD1D6F73BC3
// Server: smtp.elasticemail.com
// Port: 2525
// Security token: D9B9A5D4EC32001B60AE166DDDD1D6F73BC3


//"change", (e) => {
//  if (e.target.checked) {
//    console.log("Checkbox is checked..");
//  } else {
//    console.log("Checkbox is not checked..");
//  }
//}