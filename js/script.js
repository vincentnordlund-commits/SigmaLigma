let flagga = 0
function changeText() {
    let rubrik = document.getElementById('rubrik');
    if (flagga == 0) {
        rubrik.innerHTML = 'Välkommen hos oss!';
        flagga = 1;
    }
    else {
        rubrik.innerHTML = 'Våra favoriter';
        flagga = 0;
    }
}

function changeGreen(){
    document.body.classList.remove("rosa");
    document.body.classList.add("green")
}

function changePink(){
    document.body.classList.remove("green");
    document.body.classList.add("rosa");
}