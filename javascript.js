    var x, pav, buvespav = "", kartai = 0, laimejimai = 0, buves;
function vykdyk()
{
    kartai++;
    if(buves == x && kartai%2==0){
        kartai--;
        vykdyk();
    }
    else if(buvespav==pav && kartai%2==0){
        document.getElementById(buves).style.visibility = "hidden";
        document.getElementById(x).style.visibility = "hidden";
        laimejimai++;
        if (laimejimai == 3) {alert("Laimėjai!!!");}
    }
    else if(buvespav!=pav && kartai%2==0){
        document.getElementById(buves).src = "images/back.png";
        document.getElementById(x).src = "images/back.png";
    }
    else document.getElementById(x).src = pav;
    buvespav = pav;
    buves = x;
}
function versti1(){
    x = "p1";
    pav = "images/queen.png";
    vykdyk(x, pav);
}
function versti2(){
    x = "p2";
    pav = "images/queen.png";
    vykdyk(x, pav);
}
function versti3(){
    x = "p3";
    pav = "images/king.jpg";
    vykdyk(x, pav);
}
function versti4(){
    x = "p4";
    pav = "images/king.jpg";
    vykdyk(x, pav);
}
function versti5(){
    x = "p5";
    pav = "images/jack.jpg";
    vykdyk(x, pav);
}
function versti6(){
    x = "p6";
    pav = "images/jack.jpg";
    vykdyk(x, pav);
}