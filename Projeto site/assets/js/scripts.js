
document.getElementsByClassName("menuMobile")[0].onclick = function(){
    if(document.querySelector(".menu nav ul").style.display == 'flex') {
        document.querySelector(".menu nav ul").style.display = 'none';
    } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
    }
}



