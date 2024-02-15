function display(val) {
    document.getElementById('result').value += val;
}


function clearScreen() {
    document.getElementById('result').value = '';
}


function solve() {
    const query = document.getElementById('result').value;
    const answer = eval(query);
    document.getElementById('result').value = answer;
}
