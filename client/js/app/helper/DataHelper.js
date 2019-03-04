class DataHelper {
    constructor() {
        throw new Error('Essa classe nao pode ser instanciada');
    }

    static DataParaTexto(data) {
        let dataFormat = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
        return dataFormat
    }

    static TextoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/g.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        let listaData = texto.split('-').map((item, index) => item - (index % 2));
        return new Date(...listaData);
    }
}
