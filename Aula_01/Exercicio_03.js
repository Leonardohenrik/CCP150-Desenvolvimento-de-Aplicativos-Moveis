function funcao_1(nome, sobrenome){
    console.log("olá " + nome + " " + sobrenome +", eu sou uma função");
}

const funcao_2 = (nome, sobrenome) => console.log("olá " + nome + " " + sobrenome +", eu sou uma função");

funcao_1("Leonardo", "Henrique");
funcao_2("Eloise", "Veiga");