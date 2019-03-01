class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        let helper = new DataHelper();

        let negociacao = new Negociacao(helper.TextoParaData(this._data.value), this._valor.value, this._quantidade.value);
        
        console.log(negociacao);
        console.log(helper.DataParaTexto(negociacao.data));
    }
}