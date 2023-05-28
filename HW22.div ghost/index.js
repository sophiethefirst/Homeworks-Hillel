let wrapper = document.getElementById('wrapper');
let input = document.getElementById('text');

let newDiv = document.createElement('div');
newDiv.className = 'picture';
wrapper.append(newDiv);

let image = document.createElement('img');
image.src = 'https://media.tenor.com/QFSdaXEwtBAAAAAC/hello-there-general-kenobi.gif';
document.querySelector('.picture')
newDiv.append(image);
image.style.display = 'none';

let showPic = () => {
    image.style.display = 'block';
    input.style.borderColor = 'blue';
};

let hidePic = () => {
    image.style.display = 'none';
    input.style.borderColor = '';
}

input.addEventListener('mouseover', showPic);
input.addEventListener('mouseout', hidePic);


