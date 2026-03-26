// // let banner = document.getElementById('banner');
// // console.log(banner);


// // let squareElements = document.getElementsByClassName('square');
// // console.log(squareElements);

// // let firstSquare = document.querySelector('.square');
// // console.log(firstSquare);

// // let mySilkyChickens = document.querySelector('h1');
// // function changeLanguage(){
// // if(mySilkyChickens.innerText=='Silky Chickens'){
// //     mySilkyChickens.innerText = 'Galinhas Sedosas';
// // }else{
// //     mySilkyChickens.innerText = 'Silky Chickens';}}

// // let myPickles = document.querySelector('span');
// // console.log(myPickles);
 
// // function changeTaste(){
// //     if(myPickles.innerText == 'Yammi'){
// //     myPickles.innerText='Yack';
// //     }
// //     else {
// //         myPickles.innerText='Yammi';
// //     }
// // }


// function changeColor();
// mySilkyChickens.style.backgroundColor = 'green';

// function changeImg()_V1
// function changeImg(){
// if  (banner.src ==
//                 "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")
//     {banner.src =
//                 "https://center-portugal.transforms.svdcdn.com/production/images/galinha-branca.jpg?w=1920&h=720&q=100&auto=format&fit=min&crop=focalpoint&fp-x=0.5479&fp-y=0.2387&dm=1720799383&s=e7548edce9a4bb9458eea0ca2e093d4f";}
// else{banner.src =
//                 "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";}
// }

// function changeImg()_V2
// function changeImg(){
// if(         banner.getAttribute('src')==
//                                 "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
//         ){  banner.setAttribute('src' ,
//                                 "https://center-portugal.transforms.svdcdn.com/production/images/galinha-branca.jpg?w=1920&h=720&q=100&auto=format&fit=min&crop=focalpoint&fp-x=0.5479&fp-y=0.2387&dm=1720799383&s=e7548edce9a4bb9458eea0ca2e093d4f",
// );}else{    banner.setAttribute('src' ,
//                                 "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
// );}}

// function eggOrChicken() {
//   let imageEgg = document.querySelector("img");
 
//   if (
//     imageEgg.getAttribute("src") ==
//             "images/egg.png"
//   ) {
//     imageEgg.setAttribute(
//       "src",
//             "images/chicken.png"
//     );
//   } else {
//     imageEgg.setAttribute("src",
//             "images/egg.png"
// );
//   }
// }

// let myLis = document.getElementsByClassName('toclevel-1');
// for (let element of myLis){
// element.style.backgroundColor='green';}

// function makeRandom(){
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', "violet"];
// let mySpans = document.getElementsByTagName("span");
// count=0;
// for(let element of mySpans){element.style.color=colors[count++];}}

// function changeDarkMode(){
// let myBody = document.querySelector('body');
// if(myBody.classList.contains('day')){
// myBody.classList.remove('night');
// myBody.classList.add('day')
// }else{
// myBody.classList.remove('night');
// myBody.classList.add('day')}}


function changeOrder(){
let myList = document.querySelectorAll('li');
for (let element of myList){
    if  (element.classList.contains('highlight'))
        (element.classList.remove('highlight'));
    else(element.classList.add('highlight'))}}