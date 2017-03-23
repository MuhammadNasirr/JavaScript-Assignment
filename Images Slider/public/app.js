    var img = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg");


var img_number = 0;
var img_length = img.length -1;

function change_img(num){
    img_number = img_number + num;
    if(img_number > img_length){
        img_number = 0
    }
    if(img_number < 0){
        img_number = img_length;
    }
    document.slider.src= img[img_number];
    return false;
}