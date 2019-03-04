class NegociacoesView extends View {
    constructor(elem) {
        super(elem);
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${model.negociacoes.map(negociacao => {
                return `
                <tr>
                    <td>${DataHelper.DataParaTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                `
            }).join('')}
            </tbody>

            <tfoot>
                <td colspan="3">TOTAL</td>
                <td>${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)}</td>
            </tfoot>
     </table>
     `;
    }
}