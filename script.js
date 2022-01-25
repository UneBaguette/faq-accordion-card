const title = document.querySelectorAll('.title');
const titre = document.querySelectorAll('.title > h3');
const span = document.querySelectorAll('.text > span');
const imgs = document.querySelectorAll('.title > img');
let h3;
let spans;
let arrow;

for (let i = 0; i < title.length; i++){
    let titles = title[i];
    titles.addEventListener('click' , function() {
        h3 = titre[i];
        spans = span[i];
        arrow = imgs[i];
        if (!h3.classList.contains("active") && !spans.classList.contains("activespan") && !arrow.classList.contains("activearrow")) {
            h3.classList.add("active");
            spans.classList.add("activespan");
            arrow.classList.add("activearrow");
        }
        else if (h3.classList.contains("active") && spans.classList.contains("activespan") && arrow.classList.contains("activearrow")) {
            h3.classList.remove("active");
            spans.classList.remove("activespan");
            arrow.classList.remove("activearrow");
        }
        else {
            h3.classList.remove("active");
            spans.classList.remove("activespan");
            arrow.classList.remove("activearrow");
        }
    })
}


