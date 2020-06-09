var sbtn = document.getElementById("secretButton")
var smodal = document.getElementById("secretModal")
var closeS = document.getElementsByClassName("close")[0];
const cool_font = document.getElementById("cool_font");

// When the user clicks the button, open the modal 
sbtn.onclick = function () {
    smodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeS.onclick = function () {
    smodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == smodal) {
        smodal.style.display = "none";
    }
}

function ShowCoolFont() {
    if (cool_font.style.display == "block")
        cool_font.style.display = "none";
    else
        cool_font.style.display = "block";
}
