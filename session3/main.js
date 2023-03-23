const paragraph = document.createElement('p')
paragraph.innerText = 'My name is Jessica';
paragraph.style.fontSize = '18px';
paragraph.style.fontFamily = 'sans-serif';
paragraph.style.width = '100px';
paragraph.style.border = '1px solid orange';
paragraph.style.padding = '30px';

document.body.appendChild(paragraph);

const div = document.getElementById('content')
const newHeader = document.createElement('h1')
div.appendChild(newHeader)

newHeader.innerText = `I'm in!`;
newHeader.style.border = '1px dashed blue';
newHeader.style.padding = '50px';