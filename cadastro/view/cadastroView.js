class CadastroView {


    // Limpa valores do formulário de cep.
    limpaFormCep = () => {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#estado").val("");
    }

    //Atualiza os campos com os valores da consulta ao API
    preencheFormCep = (endereco) => {
        $("#rua").val(endereco.rua);
        $("#bairro").val(endereco.bairro);
        $("#cidade").val(endereco.cidade);
        $("#estado").val(endereco.uf);
    }
    // Valida os inputs
    validarCampo = (idCampo) => {
        $(idCampo).removeClass("is-invalid")
        $(idCampo).addClass("is-valid")

    }
    // Renderiza mensagem de erro
    invalidarCampo = (idCampo, erro) => {
        $(idCampo).removeClass("is-valid")
        $(idCampo).addClass("is-invalid")
        $(idCampo).after(`<small class="invalid-feedback">  ${erro}</small>`)

    }
    // remove mensagem de erro
    removeErro = (id) => {
        if ('small')
            $(id).next('small').remove();
    }
}

const View = new CadastroView()