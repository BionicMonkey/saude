///// Section-1 CSS-Slider /////
// Auto Switching Images for CSS-Slider
function bannerSwitcher() {
    next = $(".sec-1-input").filter(":checked").next(".sec-1-input");
    if (next.length) next.prop("checked", true);
    else $(".sec-1-input").first().prop("checked", true);
  }
  
  var bannerTimer = setInterval(bannerSwitcher, 5000);
  
  $("nav .controls label").click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 50000);
  });
  
  ///// Anchor Smooth Scroll /////
  //   $('.main-menu a, .learn-more-button a').click(function(e){
  
  //     e.preventDefault();
  
  //     var target = $(this).attr('href');
  
  //     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
  //     return false;
  //   });
  
// Calcular el IMC
// Segons aquesta imatge dir si esta Normal / sobrepes /obesitat


function calc() {
    //pega valores inseridos, e substitui virgula por ponto
    var peso = document.getElementById("peso").value.replace(/,/g, ".");
    var altura = document.getElementById("altura").value.replace(/,/g, ".");
  
    // valida se os campos não estão vazios
    if (peso == "" || altura == "") {
      document.getElementById("message").innerHTML = "preencha os campos";
      return false;
    }
  
    // calcula IMC
    var resultado = peso / (altura * altura);
    var message = "";
  
    // verifica situação
    if (resultado < 17) {
      message = "Você está muito abaixo do peso";
    } else if (resultado >= 17 && resultado <= 18.49) {
      message = "Você está abaixo do peso";
    } else if (resultado >= 18.5 && resultado <= 24.99) {
      message = "Seu peso está normal";
    } else if (resultado >= 25 && resultado <= 29.99) {
      message = "Você está acima do peso";
    } else if (resultado >= 30 && resultado <= 34.99) {
      message = "Você tem obesidade nível I";
    } else if (resultado >= 35 && resultado <= 39.99) {
      message = "Você tem Obesidade nível II";
    } else if (resultado >= 40) {
      message = "Você tem Obesidade nível III";
    }
  
    // mostra resultado
    resultado = resultado.toFixed(2).replace(/\./g, ",");
    document.getElementById("message2").innerHTML =
    "VEJA SEU RESULTADO CLICANDO EM 'PASSO 02 👇'";

    document.getElementById("message").innerHTML =
      "Seu IMC é : " + resultado + "<br>" + message;
  } 
  
