const title = document.querySelectorAll('.title');
const titre = document.querySelectorAll('.title > h3');
const span = document.querySelectorAll('.text > span');
const imgs = document.querySelectorAll('.title > img');
const text = document.querySelectorAll('.text');
let index = 0;

for (let i = 0; i < title.length; i++){
    let a = title[i];
    let titles = titre[i];
    let s = span[i];
    let im = imgs[i];
    a.addEventListener('click' , function() {
        for(let i = 0; i < text.length; i++){
            if (titles === titre[i] && !titles.classList.contains('active')){
                titles.classList.add("active");
                s.classList.add("activespan");
                im.classList.add("activearrow");
            } else if (titles === titre[i] && titles.classList.contains('active')){
                titles.classList.remove("active");
                s.classList.remove("activespan");
                im.classList.remove("activearrow");
            }
            else {
                titre[i].classList.remove("active");
                span[i].classList.remove("activespan");
                imgs[i].classList.remove("activearrow");
            }
        }
    })
}