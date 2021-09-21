function hoverOne(){
    document.getElementById("fourty").innerHTML = "95%"
}
function hoverTwo(){
    document.getElementById("fourty").innerHTML = "76%"
}
function hoverThree(){
    document.getElementById("fourty").innerHTML = "72%"
}
function hoverFour(){
    document.getElementById("fourty").innerHTML = "70%"
}
function hoverFive(){
    document.getElementById("fourty").innerHTML = "67%"
}
function hoverSix(){
    document.getElementById("fourty").innerHTML = "33%"
}
function hoverSeven(){
    document.getElementById("fourty").innerHTML = "20%"
}
function hoverZero(){
    document.getElementById("fourty").innerHTML = "48%"
}

document.querySelector(".second_car").remove()

let slideImage = document.querySelector('.car_img');
let next = document.querySelector('.right_btn')
let prev = document.querySelector('.left_btn')
    
let img1 = src =("./images/Car.png");
let img2 = src=("./images/second.png");

let slideArr = [
    "./images/Car.png",
    "./images/second.png"
]
let count = 0;

function slideNext() {
    if (count < slideArr.length - 1) {
        count++;
    } else {
        count = 0;
    }
    slideImage.src = slideArr[count];
    console.log(slideArr[count], count)

}
function slidePrev() {
    if (count > 0) {
        count--;
    } else {
        count = slideArr.length - 1;
    }
    slideImage.src  = slideArr[count];
    console.log(slideArr[count], count)
}