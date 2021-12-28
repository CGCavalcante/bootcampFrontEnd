
var novoElemento = document.getElementById("minhaLista");
var lista = [];
var itemId;
var descricaoElemento;

function adicionar() {
    let entrada = document.getElementById("elementoLista");
    if ( entrada.value != '' ) {
        itemId = novoElemento.childElementCount;
        novoElemento.appendChild(criarElemento(entrada.value , itemId));
        descricaoElemento.appendChild(criarDescricaoItem(itemId));
        descricaoElemento.before(novoElemento);

    }
}

function criarElemento( valorItem, idItem) {
    let input = document.createElement('input');
    input.setAttribute('name', idItem);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', valorItem);
    input.appendChild(document.createTextNode(valorItem));
    return input;
}

function criarDescricaoItem( idItem ) {
    let label = document.createElement('label');
    label.setAttribute('for', idItem );
    // label.innerText = idItem;
    return label
}
