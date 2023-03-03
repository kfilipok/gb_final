const passFieldFirst = document.querySelector('#password1');
const passFieldSecond = document.querySelector('#password2');
document.addEventListener('input', (e) => {
  if(e.target.type == 'password'){
    if(passFieldFirst.value == "" && passFieldSecond.value == ""){
      passFieldFirst.style = "border: 1px solid #d9d9d9";
      passFieldSecond.style = "border: 1px solid #d9d9d9";      
    }else if(passFieldFirst.value !== passFieldSecond.value){
      passFieldFirst.style = "border: 1px solid red";
      passFieldSecond.style = "border: 1px solid red";
    }else{
      passFieldFirst.style = "border: 1px solid green";
      passFieldSecond.style = "border: 1px solid green";
    }
  }
  return true;
});

const hamburgerMenuBox = document.querySelector('.menu__box');
console.dir(hamburgerMenuBox);
hamburgerMenuBox.addEventListener('click', function (e) {
  if(e.target.className == "menu__item") {
    // hamburgerMenuBox.style.visibility = 'hidden';
    // hamburgerMenuBox.style.visibility = '';
  }
});
