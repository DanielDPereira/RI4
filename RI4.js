class Cliente {
    #cpf

    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = []
    }

    get cpf() {
        return this.#cpf
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    detalhe() {
        let info = `Nome: ${this.nome}\n`
        info += `Estado: ${this.endereco.estado} `
        info += `Cidade: ${this.endereco.cidade} `
        info += `Rua: ${this.endereco.rua} `
        info += `Número: ${this.endereco.numero}\n`

        this.telefones.forEach(t => {
            info += `DDD: ${t.ddd} Número: ${t.numero}\n`
        })

        return info
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }
}

class Empresa {
    #cnpj

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.telefones = []
        this.clientes = []
    }

    get cnpj() {
        return this.#cnpj
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente)
    }

    detalhe() {
        let info = `Razão Social: ${this.razaoSocial}\n`
        info += `Nome Fantasia: ${this.nomeFantasia}\n`
        info += `------------------\n`

        this.clientes.forEach(cliente => {
            info += cliente.detalhe() + "\n"
        })

        return info
    }
}

const enderecoEmpresa = new Endereco(
    "Av Central",
    "1000",
    "São Paulo",
    "SP"
)

const empresa = new Empresa(
    "ABC LTDA",
    "Mercado Online",
    "12.345.678/0001-99",
    enderecoEmpresa
)

const cliente1 = new Cliente(
    "João",
    "111.111.111-11",
    new Endereco("Av Andrômeda", "987", "São José dos Campos", "SP")
)

cliente1.adicionarTelefone(new Telefone("99", "99999999"))
cliente1.adicionarTelefone(new Telefone("99", "99999999"))
empresa.adicionarCliente(cliente1)

const cliente2 = new Cliente(
    "Gabriel",
    "222.222.222-22",
    new Endereco("Av Andrômeda", "412", "São José dos Campos", "SP")
)

cliente2.adicionarTelefone(new Telefone("88", "88888888"))
cliente2.adicionarTelefone(new Telefone("88", "88888888"))
empresa.adicionarCliente(cliente2)

const cliente3 = new Cliente(
    "Bárbara",
    "333.333.333-33",
    new Endereco("Av São João", "789", "São José dos Campos", "SP")
)

cliente3.adicionarTelefone(new Telefone("77", "77777777"))
cliente3.adicionarTelefone(new Telefone("77", "77777777"))
empresa.adicionarCliente(cliente3)

const cliente4 = new Cliente(
    "Márcia",
    "444.444.444-44",
    new Endereco("Av Andrômeda", "452", "São José dos Campos", "SP")
)

cliente4.adicionarTelefone(new Telefone("66", "66666666"))
cliente4.adicionarTelefone(new Telefone("66", "66666666"))
empresa.adicionarCliente(cliente4)

console.log(empresa.detalhe())