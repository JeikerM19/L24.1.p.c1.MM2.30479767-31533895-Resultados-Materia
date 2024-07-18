export default class Cl_estudiante {
    constructor(c, nF) {
        this.ced = c;
        this.notaF = nF;

    }
    set ced(c) {
        this._ced = c;
    }
    get ced() {
        return this._ced;
    }

    set notaF(nF) {
        this._notaF = nF;
    } get notaF() {
        return this._notaF;
    }


}