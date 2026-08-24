class FuncionariosDoHospital{
    #nome;
    #numeroRestanteDeFerias;

    constructor(nome){
        this.#nome = nome;
        this.#numeroRestanteDeFerias = 20;
        
    }


    tirarFerias(num_dias){
        this.#numeroRestanteDeFerias -= num_dias;
        console.log(this.#nome + "Tirou " + num_dias + " dias de férias");
    }


}

class Medico extends FuncionariosDoHospital{
    #cpf;

    constructor(nome, cpf){
        super(nome);
        this.#cpf = cpf;
    }

}

class Enfermeira extends FuncionariosDoHospital{
    #certificados;

    constructor(nome, certificados){
        super(nome);
        this.#certificados = certificados;
    }


    adicionarCertificados(certificado){
        this.#certificados = certificado;
    }

    get certificados(){
        return this.#certificados;
    }
}

let medico = new Medico("Carlos", "123456789");

let enfermeira = new Enfermeira("Ana", ["UTI"]);

medico.tirarFerias(5);
enfermeira.tirarFerias(10);

enfermeira.adicionarCertificados("Primeiros Socorros");

console.log(enfermeira.certificados);