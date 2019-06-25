var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var inputElement = document.querySelector('#app button')

var a_fazer = [
    'Fazer Café',
    'Cozinhar',
    'Emagrecer',
    'Get Rich',
];

function renderAfazer() {
    for (item of a_fazer) {
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);

        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
    
    }
}

renderAfazer();