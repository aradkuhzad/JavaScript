function ShowDate() {
    document.getElementById("demo").innerHTML = Date();
}
function Show() {
    document.getElementById("showmessage").innerHTML = "Hello World";
}
function activate() {
    document.getElementById("picture-lamp").src = "img/pic_bulbon.gif";
}
function deactivate() {
    document.getElementById("picture-lamp").src = "img/pic_bulboff.gif";
}
function changefont() {
    document.getElementById("change-fontsize").style.fontSize = "40px";
}
function hidetext() {
    document.getElementById("hide-text").style.display = "none";
}

