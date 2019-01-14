function upArrowPressed() {
    var uppress=document.getElementById('idimgNopita');
    uppress.style.top=parseInt(uppress.style.top)-10+'px';
}
function dowArrowPressed() {
    var dowpress=document.getElementById('idimgNopita');
    dowpress.style.top=parseInt(dowpress.style.top) +10 +'px';
}
function leftArrowPressed() {
    var leftpress=document.getElementById('idimgNopita');
    leftpress.style.left= parseInt(leftpress.style.left) - 10 + 'px';
}
function rightArrowPressed() {
    var rightpress=document.getElementById('idimgNopita');
    rightpress.style.left=parseInt(rightpress.style.left) + 10 + 'px'
}



function listenEvent(even) {
    switch (even.keyCode) {
        case 37:
        {
            leftArrowPressed();
            break;

        }
        case 38:{
            upArrowPressed();
            break;
            alert("Up");
        }
        case 39:{
            rightArrowPressed();
            break;
        }
        case 40:{
            dowArrowPressed();
        }
    }
}
function eventPress() {
    window.addEventListener('keydown', listenEvent)
}
