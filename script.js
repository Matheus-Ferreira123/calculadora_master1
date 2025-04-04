$(document).ready(function(){
    var valor1 = 1
    var valor2 = 1
    var resultado = 0

    $('#num1').click(function() {
        var valor1 = this.value
    });

    $('#num2').click(function(){
        var valor2 = 2
    });

    $("#adição").click(function(){
        var resultado = valor1 + valor2
    });

    $('#result').click(function(){
        $('#text-tela').text('num1');
    });
});