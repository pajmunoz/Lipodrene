$(function () {
    var $btnMenu = $(".menu-ico-resp");
    var $header = $("#header");
    var enlaces = $("#menu a");
    var logo = $("#header figure");
    var $top = $("#top");
    var $preload = $(".preload");
    var $ancho = $(window).width();


    // console.log($ancho);

    window.onload = function () {
        $preload.hide();
    };

    $btnMenu.on("click", function () {
        $(document).find(".menu-top").toggleClass("menuShow");
        $(".menu-ico-resp span:nth-child(1)").toggleClass("span1");
        $(".menu-ico-resp span:nth-child(2)").toggleClass("span2");
        $(".menu-ico-resp span:nth-child(3)").toggleClass("span3");
    });
    $.getScript('https://cdn.jsdelivr.net/scrollreveal.js/3.0.9/scrollreveal.min.js', function () {
        window.sr = ScrollReveal();
        sr.reveal(".aparecer-arriba", {
            duration: 500,
            useDelay: "always"
        });
        sr.reveal(".aparecer-derecha", {
            duration: 500,
            useDelay: "always",
            origin: "left"
        });
        sr.reveal(".aparecer-izquierda", {
            duration: 500,
            useDelay: "always",
            origin: "right",
            delay: 500,
            easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)'
        });
        sr.reveal(".aparecer-abajo", {
            duration: 500,
            useDelay: "always",
            origin: "top"
        });
        sr.reveal(".aparecer-delay", {
            duration: 500
        }, 50);
    });

    $(window).scroll(function () {
        var $scroll = $(document).scrollTop();
        var efecto = $("#segunda").offset().top;
        var efecto6 = $("#sexta").offset().top-100;
        var $pag = $("ul li a");
        var $efectoBlue = $("#cuarta").offset();
        var $menuBef = $(".triangle");
        var $menuDiv = $("#menu");
        var $logoT =$("#menu .logo figure");
        var scrollTop = $(window).scrollTop();
        var divam = 200;
        var blurstr = "blur("+scrollTop/divam*3.14+"px)";
        //console.log(pag);
        // console.log($efectoBlue);
        $("#primera").css({
          "-webkit-filter": blurstr,
          "filter": blurstr   
      });
        $("#segunda").css({
          "-webkit-filter": blurstr,
          "filter": blurstr   
      });
        if ($scroll >= (efecto)) {
            logo.addClass("logo-fig2");
            $top.css("opacity", "1");
            $menuBef.css("top", "-38px");
            $pag.css("color","#00B6BE");
            $logoT.css("background", "url(img/logo1.png)");
            $menuDiv.css("background-color","rgba(255, 255, 255, 0.7)");
            // $menuDiv.css("border-bottom", "2px solid #00AEEF");
        } else {
            logo.removeClass("logo-fig2");
            $top.css("opacity", "0");
            $menuBef.css("top", "");
            $pag.css("color","white");
            $logoT.css("background", "url(img/logo2.png)");
            $menuDiv.css("background-color","rgba(255, 255, 255, 0.1)");
            //$menuDiv.css("border-bottom", "2px solid transparent");
        }
        if ($scroll <= (efecto6)) {
            $menuDiv.css("top","0");
        }
        else{
            $menuDiv.css("top","-140px");
        }
    });
enlaces.on("click", function (e) {
    e.preventDefault();
    var t = $(this);
    var tbox = t.attr("href");
    var topCaja = $(tbox).offset().top;
    var $document = $("html , body");
    $(document).find(".menu-top").toggleClass("menuShow");
    $document.stop().animate({
        scrollTop: topCaja
    }, 600, "easeInOutCubic");
    $(".menu-ico-resp span:nth-child(1)").toggleClass("span1");
    $(".menu-ico-resp span:nth-child(2)").toggleClass("span2");
    $(".menu-ico-resp span:nth-child(3)").toggleClass("span3");

});
$top.on("click", function () {
    $("html , body").animate({
        "scrollTop": 0
    }, 600, "easeInOutCubic");
         // for( var m in e){
         //    console.log(m);
         // };
     });

var intervalID = window.setInterval(myCallback, 1800);

function myCallback() {
    var c = document.getElementById("submit");
    var t = c.getAttribute("value");
    if (t === "PEDILO YA") {
        c.setAttribute("value", "COMPLETÁ TUS DATOS");
    } else {
        c.setAttribute("value", "PEDILO YA");
    }
}

var $numeroTel = $("[data-tel]");
var cambiarEste = $numeroTel.attr("data-tel");
var mystring = cambiarEste.replace('-', '');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var $paraBtn = $(".btn-llamar");
    $paraBtn.append('<a href="tel:+5411' + mystring + '"><button1 class="btn-llamar centro hasta-web espacio icon-telefono btn-gracias">LLAMANOS!</button1></a>');
}
});
