var samHi = alert('you are at the right place');
var askingName = prompt('what is your name ? I am excited to know it .');

document.getElementById('textColor').style .fontFamily="Playbill";
document.getElementById('textColor').style .fontSize="100px";

function booksRead() {
    var booksInput = prompt('hey how many stories did you read in past 2 months ? (it should be greater than 1)', '3');
    var stories = (booksInput * 6) ;
    var totalRead = stories*7;
    var htext = document.createElement('h1');
    var addingText = document.createTextNode(askingName +' '+ 'you read' +' ' + totalRead + ' ' + 'stories in 7 years with a total of' + ' ' + stories + ' ' + 'stories read in 1 year...WELL DONE!!!'); 
    htext.setAttribute('id','booksRead');
    htext.appendChild(addingText);
    document.getElementById('box-last').appendChild(htext);
}


function removing() {
 var dataRemove = document.getElementById('booksRead').remove();  
}

// document.getElementById('text-1').style .fontSize="90px";
// document.getElementById('text-1').style .fontFamily="Stencil";

