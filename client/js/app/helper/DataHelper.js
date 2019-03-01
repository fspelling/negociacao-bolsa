class DataHelper {
    DataParaTexto(data) {
        let dataFormat = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        return dataFormat
    }

    TextoParaData(texto) {
        let listaData = texto.split('-').map((item, index) => item - (index % 2));
        return new Date(...listaData);
    }
}