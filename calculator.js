var screen= document.querySelector('.theResult');
var item= document.querySelector('.squares');

for(var i=0; i<item.children.length; i++) {
    item.children[i].addEventListener('click', function(event) {
    switch(event.target.innerText) {
    case 'DEL':
   {
        screen.textContent = '';
        break;
   }
   case 'RESET':
   {
        screen.textContent = '';
        break;
   }
   case '=':
   {
       screen.textContent= eval(screen.textContent);
       break;
   }
   default:
   {
       screen.textContent+= event.target.innerText;
   }
   }
 });
}
