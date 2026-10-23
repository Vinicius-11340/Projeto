function toggleMenu() {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
}

function styleFont() {
    document.getElementById('demo').style.fontSize = "72px";

    function addContent() {
        document.getElementById('demo').innerHTML = Date();
    }

}