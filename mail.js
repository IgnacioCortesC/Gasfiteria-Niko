(function(){
emailjs.init("jfCvzA0kP0rt9qVS_");
})();

const form = document.getElementById("contact-form");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", function(e){

e.preventDefault();

alerta.innerHTML = "⏳ Enviando mensaje...";

emailjs.sendForm(
"service_h6xbyxl",
"template_65xsq8c",
this
).then(function(){

alerta.innerHTML = "✅ Mensaje enviado correctamente";

form.reset();

}, function(){

alerta.innerHTML = "❌ Error al enviar el mensaje";

});

});