var txtInput = document.querySelector('#task_input');
let items = []
const btnInsert = document.querySelector('#insert_button');
let bigWords = [];
let smallWords = [];
btnInsert.addEventListener('click', function() {
    let word = txtInput.value;
    items = word.split(',');
    console.log(items);

    for(let i in items) {
        if( items[i].length <= 6) {
            smallWords.push(items[i]);
            document.getElementById('p1').innerHTML = smallWords;
        }

        if(items[i].length > 6) {

            bigWords.push(items[i]);
            document.getElementById('p2').innerHTML = bigWords;
        }
        }
    smallWords = items.filter(arr => arr.length <= 6);
    bigWords = items.filter(arr => arr.length > 6);
    document.getElementById('p1').innerHTML = smallWords;
    document.getElementById('p2').innerHTML = bigWords;
    document.getElementById('p2').innerHTML = items.filter(arr => arr.length > 6);

});