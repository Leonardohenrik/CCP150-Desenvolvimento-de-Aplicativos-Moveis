class VideoGame{
    #marca;
    #nControles;
    #tipoMidia;
    ligado;

    constructor(marca, nControles, tipoMidia){
        this.#marca = marca;
        this.#nControles = nControles;
        this.#tipoMidia = tipoMidia;
        this.ligado = false;
    }

    ligar(estado){
        this.ligado = estado;
        console.log(this.#marca + (estado ? " Ligado!" : " Desligado!"));

    }

    jogar(){
        if(this.ligado){
            console.log("Jogando no " + this.#marca + "...");
        }else{
            console.log("Ligue o videogame para jogar");
        }
    }

    salvarJogo(){
        if(this.ligado){
            console.log("Jogo salvo com sucesso no: " + this.#marca + "!");
        }else{
            console.log("Não é possível salvar o jogo com o videogame desligado!");
        }
    }


}


var playstation = new VideoGame("sony", 2, "dvd");

playstation.jogar();
playstation.ligar(true);
playstation.jogar();
playstation.salvarJogo();
playstation.ligar(false);
playstation.salvarJogo();
