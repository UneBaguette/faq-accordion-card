const title = document.querySelectorAll('.title');
const titre = document.querySelectorAll('.title > h3');
const span = document.querySelectorAll('.text > span');
const imgs = document.querySelectorAll('.title > img');
const text = document.querySelectorAll('.text');
let index = 0;

for (let i = 0; i < title.length; i++){
    let titles = title[i];
    titles.addEventListener('click' , function() {
        index = this.getAttribute('data-num');
        for(let i = 0; i < text.length; i++){
            if (title[i].getAttribute('data-num') === index){
                titre[i].classList.add("active");
                span[i].classList.add("activespan");
                imgs[i].classList.add("activearrow");
            }
            else {
                titre[i].classList.remove("active");
                span[i].classList.remove("activespan");
                imgs[i].classList.remove("activearrow");
            }
        }
    })
}