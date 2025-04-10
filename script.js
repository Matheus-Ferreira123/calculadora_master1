$(document).ready(function () {
    var valor1 = '';
    var valor2 = '';
    var operador = '';
    var operacao = '';
    var resultado = '';

    //Função usada para pegar o operador da operação
    $('.operador').click(function () {
        operador = $(this).val();
        $('#text-tela').text(valor1 + operador);
    });

    //Função usada para pegar os valores com uma condição que decide qual é o primeiro
    $('.num').click(function () {
        if (operador === '') {
            valor1 += $(this).val();
            $('#text-tela').text(valor1);
        } else {
            valor2 += $(this).val();
            $('#text-tela').text(valor2);
        }
        operacao = valor1 + operador + valor2
        $('#text-tela').text(operacao);
    });

    //Função que executa as operações matemáticas
    $('#result').click(function () {
        let num1 = parseFloat(valor1);
        let num2 = parseFloat(valor2);


        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '/':
                resultado = num2 !== 0 ? num1 / num2 : 'Erro';
                break;

        }
        $('#text-tela').text(resultado);
    });

    //Função para limpar a tela
    $('#limpartela').click(function () {
        num1 = '';
        num2 = '';
        valor1 = '';
        valor2 = '';
        operador = '';
        resultado = '';

        $('#text-tela').text('');
    });
});