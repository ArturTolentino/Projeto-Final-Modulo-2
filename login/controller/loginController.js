$("#emailLogin").blur(() => {
    try {
        if (loginModel.validaEmail()) {
            View.validarCampo("#emailLogin")
        }
    }
    catch (erro) {
        View.invalidarCampo("#emailLogin", erro.message)
    }
} )

$("#emailLogin").focus(() => {
    View.removeErro("#emailLogin")
})

$("#password").blur(() => {
    try {
        if (loginModel.validaSenha()) {
            View.validarCampo("#password")
        }
    }
    catch (erro) {
        View.invalidarCampo("#password", erro.message)
    }
})

$("#password").focus(() => {
    View.removeErro("#password")
})

