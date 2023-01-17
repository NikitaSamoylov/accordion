const acc = document.getElementsByClassName('accordion');
var i;
const panels = document.querySelectorAll('.panel');
//uncomment the code below to make first tab opened:
// const panels = document.querySelectorAll('.panel');
// panels.forEach((elem) => {
//     elem.classList.contains('--active') ? elem.style.maxHeight = elem.scrollHeight + "px" : elem.style.maxHeight = null
// })
panels.forEach((elem) => {
  elem.style.marginBottom = '10px';
});
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = '10px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.marginBottom = '0';
    }
  });
}
