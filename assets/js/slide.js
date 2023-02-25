var images = ['assets/img/certificado-Layouts-Responsivos.jpg','assets/img/certificado-css-pt1.jpg','assets/img/certificado-css-pt2.jpg','assets/img/certificado-css-pt3.jpg','assets/img/certificado-css-pt4.jpg','assets/img/certificado-Flexbox.jpg','assets/img/certificado-js-pt1.jpg'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;