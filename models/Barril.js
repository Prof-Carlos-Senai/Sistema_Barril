class Barril{
    // diamMaior => y, diamMenor => z, altura => h
    constructor(diamMaior, diamMenor, altura){
        this.diamMaior = diamMaior
        this.diamMenor = diamMenor
        this.altura = altura
    }

    // raio base = (z / 2)
    calcularRaio(){
        return this.diamMenor / 2.0
    }
    // Ab = π * r²
    calcularAb(){
        let raio = this.calcularRaio()
        return Math.PI * raio * raio
    }
    // AB = 2 * Ab
    calcularAB(){
        return this.calcularAb() * 2.0
    }
    // Al = ((π * h)/3) * (2 *y +  z)
    calcularAl(){
        return ((Math.PI * this.altura)/3.0) * 
            (2.0 * this.diamMaior + this.diamMenor) 
    }
    // At = Ab + Al
    calcularAt(){
        return this.calcularAb() + this.calcularAB()
    }
    // v = ((π * h)/12) * (2*y² + z²) 
    calcularVolume(){
        return ( (Math.PI * this.altura) / 12.0 ) *
            ( (2.0 * (this.diamMaior * this.diamMaior)) + 
              (this.diamMenor * this.diamMenor) )
    }

    classificarBarril(){
        let volume = this.calcularVolume()

        if(volume < 100000 ){
            return 'Classificação: Ancorote (Pequeno Porte)'
        }else if(volume >= 100000 && volume <= 400000){
            return 'Classificação: Barril Padrão (Bordalesa)'
        }else if(volume > 400000){
            return 'Classificação: Tonel / Bago (Grande Porte)'
        }
    }
}

module.exports = Barril
