function header() {
    fetch("../js/temp/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}
// this loads the header for multiple html files with the id of header
window.onload = header;