let wrapper = document.getElementById('wrapper');
let input = document.getElementById('text');

let newDiv = document.createElement('div');
newDiv.className = 'picture';
wrapper.append(newDiv);

let image = document.createElement('img');
image.src = 'https://media.tenor.com/QFSdaXEwtBAAAAAC/hello-there-general-kenobi.gif';
document.querySelector('.picture')
newDiv.append(image);
image.style.display = 'inherit';

let showPic = () => {
    newDiv.style.display = 'block';
    input.style.borderColor = 'blue';
};

let hidePic = () => {
    newDiv.style.display = 'none';
    input.style.borderColor = '';
}

input.addEventListener('mouseover', showPic);
input.addEventListener('mouseout', hidePic);


