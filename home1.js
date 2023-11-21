var calls = 0;
display()

function display() {
    var counts = document.getElementsByClassName('sliding')
    var i;
    for (i = 0; i < counts.length; i++) {
        counts[i].style.display = 'none'
    }
    calls++;
    if (calls > counts.length) {calls = 1}
    counts[calls-1].style.display = 'block'
    setTimeout(display, 2000)
}
