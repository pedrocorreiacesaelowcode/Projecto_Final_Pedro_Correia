mudarTemaBtn.addEventListener("click", changeToGreen);

function changeTheme() {
this.style.backgroundColor = "green";}

function changeColor();
mySilkyChickens.style.backgroundColor = 'green';

function makeRandom(){
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', "violet"];
let mySpans = document.getElementsByTagName("span");
count=0;
for(let element of mySpans){element.style.color=colors[count++];}}

function switchImage(){
if  (banner.src ==
                "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")
    {banner.src =
                "https://center-portugal.transforms.svdcdn.com/production/images/galinha-branca.jpg?w=1920&h=720&q=100&auto=format&fit=min&crop=focalpoint&fp-x=0.5479&fp-y=0.2387&dm=1720799383&s=e7548edce9a4bb9458eea0ca2e093d4f";}
else{banner.src =
                "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";}
}

function changeOrder(){
let myList = document.querySelectorAll('li');
for (let element of myList){
    if  (element.classList.contains('highlight'))
        (element.classList.remove('highlight'));
    else(element.classList.add('highlight'))}}

function changeDarkMode(){
    let myBody = document.querySelector('body');
    if(myBody.classList.contains('day')){
    myBody.classList.remove('night');
    myBody.classList.add('day')
    }else{
    myBody.classList.remove('night');
    myBody.classList.add('day')}}