let buttonDiv = document.createElement('div');
let button1 = document.createElement('button');
let button2 = document.createElement('button');

button1.style.width = '100px';
button2.style.width = '100px';
button1.style.height = '50px';
button2.style.height = '50px';

button1.textContent = 'Button 1';
button2.textContent = 'Button 2';

let link1 = 'www.youtube.com/watch?v=dQw4w9WgXcQ';
let link2 = 'https://www.google.com/';

if(!link1.startsWith('https://') && !link1.startsWith('http://')) {
    link1 = 'https://' + link1;
};
    
if(!link2.startsWith('https://') && !link2.startsWith('http://')) {
    link2 = 'https://' + link2;
};

button1.href = link1;
button2.href = link2;

button1.target = '_blank';
button2.target = '_blank';

button1.addEventListener('click', () => {
    window.open(link1, '_blank');
});

button2.addEventListener('click', () => {
    window.open(link2, '_blank');
});

buttonDiv.append(button1, button2);
document.body.append(buttonDiv);