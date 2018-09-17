$(document).ready(function () {
    $("#table").tabs();
    $("#namber").spinner();
    $("#namber").spinner("value","1");
    $("#namber").spinner("enable");
    $("#Buy").button();
    $("#img1").click(function () {
        imag1 = $("#img1").attr("src");
        $(".bimg").attr("src",imag1);
    });
    $("#img2").click(function () {
        imag2 = $("#img2").attr("src");
        $(".bimg").attr("src",imag2);
    });
    $("#img3").click(function () {
        imag3 = $("#img3").attr("src");
        $(".bimg").attr("src",imag3);
    });
    $("#img4").click(function () {
        imag4 = $("#img4").attr("src");
        $(".bimg").attr("src",imag4);
    });
    $("#get_choise").click(function () {
        $("#choise").attr("style","background-color:#cccccc")
    });
    $("#get_choise").dblclick(function () {
        $("#choise").attr("style","background-color:none")
    });
    $("#Information").accordion();
    $("#education_clk").click(function () {
        $("#education").show(1000);
    });
    $("#Buy").click(function () {
        var num = $("#namber").val();
        if(num>1){
            alert("库存不足");
        }else if(num<1){
            alert("这你要买个啥");
        }else {
            $("#window").fadeIn(1000);
        };

    });
    $("#cls").click(function () {
        $("#window").hide();
    });
    $("#gold").click(function () {
        $("#big_gold").fadeIn(500);
    });
    $("#bee").click(function () {
        $("#big_bee").fadeIn(500);
    });
    $("#big_gold").click(function () {
        $("#big_gold").hide();
    })
    $("#big_bee").click(function () {
        $("#big_bee").hide();
    })
    $("#last").click(function () {
        $("#big_last").fadeIn(500);
    })
    $("#big_last").click(function () {
        $("#big_last").hide();
    })

})
