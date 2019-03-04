class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.mensagem = 'cadastro realizado com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limparForm();
    }

    _limparForm() {
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;

        this._data.focus();
    }

    _criaNegociacao() {
        return new Negociacao(DataHelper.TextoParaData(this._data.value), this._valor.value, this._quantidade.value);
    }
}