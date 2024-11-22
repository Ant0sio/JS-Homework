
const div =  document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.innerText='Okten super'
const cloneDiv=div.cloneNode(true);
document.body.append(div,cloneDiv)

