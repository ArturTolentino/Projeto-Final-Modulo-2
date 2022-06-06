
class CadastroController {

    //Comunicação entre o Model e o View 
    Cep() {
        View.preencheFormCep({
            rua: cadastroModel.rua,
            bairro: cadastroModel.bairro,
            cidade: cadastroModel.cidade,
            uf: cadastroModel.estado,
        })
    }

    validaRG() {
        try {
            if (cadastroModel.validaRg()) {
                View.validarCampo("#rg")
            }
        }
        catch (erro) {
            View.invalidarCampo("#rg", erro.message)
        }
    }
    confirmaSenha() {
        try {
            if (cadastroModel.validaConfirmaSenha()) {
                View.validarCampo("#confirma-senha")
            }
        }
        catch (erro) {
            View.invalidarCampo("#confirma-senha", erro.message)
        }

    }

    validaSenha() {
        try {
            if (cadastroModel.validaSenha()) {
                View.validarCampo("#senha")
            }
        }
        catch (erro) {
            View.invalidarCampo("#senha", erro.message)
        }
    }


    validaNome() {
        try {
            if (cadastroModel.validaNome()) {
                View.validarCampo("#nome")
            }
        }
        catch (erro) {
            View.invalidarCampo("#nome", erro.message)
        }

    }
    validaCep() {
        try {
            if (cadastroModel.validaCep()) {
                View.validarCampo("#cep")
                cadastroModel.pesquisaEndereco()
            }
            else {
                View.limpaFormCep()
                View.invalidarCampo("#cep", "*CEP não encontrado")
            }
        }
        catch (erro) {
            View.invalidarCampo("#cep", erro.message)
        }

    }


    validaEmail() {
        try {
            if (cadastroModel.validaEmail()) {
                View.validarCampo("#email")
            }
        }
        catch (erro) {
            View.invalidarCampo("#email", erro.message)
        }
    }

    validaNumero() {
        try {
            if (cadastroModel.validaNumero()) {
                View.validarCampo("#num-casa")
            }
        }
        catch (erro) {
            View.invalidarCampo("#num-casa", erro.message)
        }
    }

}


const cadastroController = new CadastroController()


//Valida os Campos
$("#email").blur(() => {
    cadastroController.validaEmail()
})

$("#cep").blur(() => {
    cadastroController.validaCep()
})
$("#nome").blur(() => {
    cadastroController.validaNome()

})
$("#senha").blur(() => {
    cadastroController.validaSenha()
})
$("#confirma-senha").blur(() => {
    cadastroController.confirmaSenha()
})
$("#rg").blur(() => {
    cadastroController.validaRG()
})
$("#num-casa").blur(() => {
    cadastroController.validaNumero()
})

//Remove as mensagens de erro 
$("#email").focus(() => {
    View.removeErro("#email")
})

$("#cep").focus(() => {
    View.removeErro("#cep")
})
$("#nome").focus(() => {
    View.removeErro("#nome")

})
$("#senha").focus(() => {
    View.removeErro("#senha")
})
$("#confirma-senha").focus(() => {
    View.removeErro("#confirma-senha")
})
$("#rg").focus(() => {
    View.removeErro("#rg")
})
$("#num-casa").focus(() => {
    View.removeErro("#num-casa")
})



$("#botao").on("click", evento => {
    evento.preventDefault()
    if (cadastroModel.validaForm()) {
        location.replace("#")
    } else {
        cadastroController.validaRG()
        cadastroController.validaSenha()
        cadastroController.confirmaSenha()
        cadastroController.validaNome()
        cadastroController.validaCep()
        cadastroController.validaEmail()
        cadastroController.validaNumero()
    }
})


// Mostra a senha quando clickar na img olho
const senha = $('#senha');
const confirmasenha = $('#confirma-senha');
const olho = $("#olho");
const newOlho = $("#new-olho");

olho.mousedown(function () {
    senha.attr("type", "text");
});

newOlho.mousedown(function () {
    confirmasenha.attr("type", "text");
});

$("#olho").mouseout(function () {
    $("#senha").attr("type", "password");
});

$("#new-olho").mouseout(function () {
    $("#confirma-senha").attr("type", "password");
});