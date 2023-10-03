let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let beshir = document.querySelector(".beshir");

window.onscroll = function () {
    let v = scrollY;
    // console.log(v)
    stars.style.left = v + "px"
    moon.style.top = v *4 + "px"
    mountains3.style.top = v *2 + "px"
    mountains4.style.top = v *1.5 + "px"
    river.style.top = v  + "px"
    boat.style.top = v  + "px"
    boat.style.left = v *3 + "px"
    beshir.style.fontSize = v  + "px"
    if (scrollY >= 100) {
        beshir.style.fontSize = 100 + "px";
        beshir.style.fontSize = 'fixed';
        if (scrollY >= 478) {
            beshir.style.display = 'none';
        } else {
            beshir.style.display = 'block';
        }
        if(scrollY >= 37) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}
