//Exemplo dos slides da aula 01//



/* a = 1;
console.log(a);

function ola(){
    a = a + 1;
    console.log(a);
}

ola();
console.log(a); */


/* function ola(){
    for(var i = 0; i < 10; i++){
        var cont = i;
    }
    console.log(cont);
}

ola(); */



/* function ola(){
    for(let i = 0; i < 10; i++){
        let cont = i;
    }
    console.log(cont);
}

ola(); */


/* class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    getName(){
        return this.nome;
    }
    setName(nome){
        this.nome = nome;
    }

}

pessoa = new Pessoa("Fulano");
console.log(pessoa.getName()); */




/* class Pessoa{
    constructor(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
}

pessoa = new Pessoa("Fulano");
console.log(pessoa.nome); */



/* class Pessoa{
    #nome;
    #idade;
    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }
    get nome(){
        return this.#nome;
    }
    get idade(){
        return this.#idade;
    }

    set nome(nome){
        this.#nome = nome;
    }
}

pessoa1 = new Pessoa("Fulano", 25);
pessoa1.nome = "Novo";
console.log(pessoa1.nome);
console.log(pessoa1.idade); */


/* class Pessoa{
    #nome;
    
    constructor(nome){
        this.#nome = nome;
        
    }

    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }

}

class Aluno extends Pessoa{
    #ra;
    constructor(nome, ra){
        super(nome);
        this.#ra = ra;
    }
    get ra(){
        return this.#ra;
    }
    set ra(ra){
        this.#ra = ra;
    }


}

aluno = new Aluno("Fulano", 123456);
console.log(aluno.nome);
console.log(aluno.ra);
 */





