class Mensagem {
    constructor(msg = '') {
        this._mensagem = msg;
    }

    get mensagem() {
        return this._mensagem;
    }

    set mensagem(valor) {
        this._mensagem = valor;
    }
}