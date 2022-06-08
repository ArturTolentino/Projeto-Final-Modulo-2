$("#emailEsqueci").blur(() => {
    try {
        if (recuperacaoModel.validaEmail()) {
            View.validarCampo("#emailEsqueci")
            $("#enviarRecuperacao").click(() => {
                alert("Um código de recuperação foi enviado ao seu email");
            })
        }
    }
    catch (erro) {
        View.invalidarCampo("#emailEsqueci", erro.message)
    }
} )

$("#emailEsqueci").focus(() => {
    View.removeErro("#emailEsqueci")
})