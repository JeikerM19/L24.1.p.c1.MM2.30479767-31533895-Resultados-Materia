export default class Cl_Salon{
    constructor(){
        this.contT = 0;
        this.contA = 0;
        this.mayor = 0;
        this.auxCed = 0; 
    }
    procesarEstudiante(est){
        this.contT ++;
        if(est.notaF >= 48){
            this.contA ++
        }
        if(est.notaF > this.mayor){
            this.auxCed = est.ced;
            this.mayor = est.notaF;
        }
    }
    porcAprob(){
        return this.contA * (100/this.contT);
    }
    mostrarMejorEst(){
        return this.auxCed;
    }
}