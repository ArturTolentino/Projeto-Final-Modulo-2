class CadastroModel {
    constructor(nome, email, senha, confirmaSenha, rg, cep, estado,bairro, cidade, rua, numero) {
        this.nome = nome
        this.rg = rg
        this.cep = cep
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.numero = numero
        this.email = email
        this.senha = senha
        this.confirmaSenha = confirmaSenha

    }

    validaCep() {
        if (this.cep.val() == '') {
            throw {
                "message": "*Este campo é obrigatório"
            }}
            else{
                return this.cep.val().length == 8 && /^[0-9]+$/.test(this.cep.val())}
        
            
    }
    validaRg() {
        if (this.rg.val() == '') {
            throw {
                "message": "*Este campo é obrigatório"
            }

        }else if (this.rg.val().length < 11) {
                throw {
                    "message": "*RG inválido"
                }
            }
        // else {
        //         this.rg.val().replace(/\D/g,"")
        //         this.rg.val() = this.rg.val().replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4")
            
        //     }   
        return this.rg.val()
    }

    validaEmail() {
        if (this.email.val() == '') {
            throw {
                "message": "*Este campo é obrigatório"
            }

        } else if (!this.email.val().includes('@') || !this.email.val().includes('.com')) {

            throw {
                "message": "*Email Inválido"
            }

        } else {
            return this.email.val();
        };
    }

    validaNome() {
        if (this.nome.val() == '') {
            throw {
                "message": "*Este campo é obrigatório"
            }
        }
    return this.nome.val()
    }


    validaSenha() {
        if (this.senha.val() == '') {
            throw {
                "message": "*Este campo é obrigatório"
            }}
        else if (this.senha.val().length < 6) {
            throw {
                "message": "*Senha precisa ter pelo menos 8 dígitos"
            }}
            else {
                return this.senha.val()}
    }
    validaConfirmaSenha() {
            if (this.confirmaSenha.val() == '') {
                throw {
                    "message": "*Este campo é obrigatório"
                }
    
            } else if (this.senha.val() !== this.confirmaSenha.val()) {
                throw {
                    "message": "*As senhas não correspondem"
                }
    
            } else {
                return this.confirmaSenha.val();
            };

    }

    validaNumero() {
        if (this.numero.val() == '') {
            throw {
                "message": "*Este campo é obrigatório"
            }}
            else {
                return this.numero.val()}
    }

    pesquisaEndereco() {
        try {
            if(this.validaCep())
            $.ajax({
                url: `https://viacep.com.br/ws/${this.cep.val()}/json`,
                type: 'GET',
                success: (resposta) => {
                    this.rua = resposta.logradouro
                    this.bairro = resposta.bairro
                    this.cidade = resposta.localidade
                    this.estado = resposta.uf
                    cadastroController.Cep()}})
                else{
                throw {
                    "message": '*CEP não encontrado'
                }
        }} catch (error) {
            throw {
                "message": '*CEP Inválido'
            }
        }

    }

    validaForm() {
        return this.validaNome() && this.validaCep() && this.validaRg() && this.validaEmail() && this.validaSenha() && this.validaConfirmaSenha() &&  this.validaNumero()
    }


}

const cadastroModel = new CadastroModel( $("#nome"), $("#email"), $("#senha"),$("#confirma-senha"),$("#rg"),$("#cep"),$("#estado"),$("#bairro"),$("#cidade"),$("#rua"),$("#num-casa"),)
