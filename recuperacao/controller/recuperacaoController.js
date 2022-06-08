$("#emailEsqueci").blur(() => {
    try {
        if (recuperacaoModel.validaEmail()) {
            View.validarCampo("#emailEsqueci")
        }
    }
    catch (erro) {
        View.invalidarCampo("#emailEsqueci", erro.message)
    }
} )

$("#emailEsqueci").focus(() => {
    View.removeErro("#emailEsqueci")
})