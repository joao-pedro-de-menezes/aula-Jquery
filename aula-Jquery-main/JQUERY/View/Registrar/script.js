$(document).ready(function () {
    $(".register-container").fadeIn(1200);

    $("#btnRegistrar").click(function () {
        let nome = $("#nome").val();
        let email = $("#email").val();
        let senha = $("#senha").val();
        let confirmaSenha = $("#confirmaSenha").val();
        let areaServico = $("#areaServico").val();
        let setor = $("#setor").val();
        let usuario = $("#usuario").val();
        let tipo = $("#tipo").val();
        let genero = $("#genero").val();
        let pcd = $("#pcd").val();

        $("#mensagem").hide()

        // Fazer a confirmação de senha
        
        if(!nome || !email || !senha || !confirmaSenha || !areaServico || !setor || !usuario || tipo == "" || genero == 0 || pcd == null) {
            $("#mensagem")
            .removeClass("sucesso")
            .addClass("erro")
            .text("Preencha todos os campos")
            .fadeIn(500);

            $(".register-container")
            .animate({ marginLeft: "-10px" }, 100)
            .animate({ marginLeft: "10px" }, 100)
            .animate({ marginLeft: "-10px" }, 100)
            .animate({ marginLeft: "10px" }, 100)
            .animate({ marginLeft: "0px" }, 100)

        } else {
            $("#mensagem")
            .removeClass("erro")
            .addClass("sucesso")
            .text("Registro realizado com sucesso")
            .fadeIn(500)

            $("#btnRegistrar")
            .text("Cadastrando...")
            .slideUp(200)
            .slideDown(200)
        }
    })
})

function navLogin(){
    window.location.href = "../Login/login.html"
}