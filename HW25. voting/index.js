const emoji = [
    {
        name: 'Angry',
        emojiSrc: 'https://em-content.zobj.net/thumbs/120/apple/354/pouting-face_1f621.png',
    },
    {
        name: 'Not good',
        emojiSrc: 'https://em-content.zobj.net/thumbs/120/apple/354/confused-face_1f615.png',
    },
    {
        name: 'Neutral',
        emojiSrc: 'https://em-content.zobj.net/thumbs/120/apple/354/neutral-face_1f610.png'
    },
    {
        name: 'Good',
        emojiSrc: 'https://em-content.zobj.net/thumbs/120/apple/354/slightly-smiling-face_1f642.png'
    },
    {
        name: 'Great',
        emojiSrc: 'https://em-content.zobj.net/thumbs/120/apple/354/smiling-face-with-halo_1f607.png'
    }
];

let emojiDiv = document.createElement('div');
document.body.append(emojiDiv);

let counters = [0, 0, 0, 0, 0];

let updateCounter = (i) => {
    for(let i=0; i<5; i++) {
        let counterElement = document.getElementById(`number${i+1}`);
        counterElement.textContent = counters[i];
    }
};

for(let i=0; i<5; i++) {
    let emojiImg = document.createElement('img');
    emojiImg.src = emoji[i].emojiSrc;
    emojiImg.id = `emoji${i+1}`;
    emojiDiv.append(emojiImg);
    
    emojiImg.addEventListener('click', () => {
    counters[i]++;
    updateCounter();
});
};

for (let i = 0; i < 5; i++) {
    let counter = document.createElement('span');
    counter.id = `number${i + 1}`;
    counter.textContent = counters[i];
    emojiDiv.append(counter);
};

emojiDiv.style.display = 'flex';
emojiDiv.style.flexWrap = 'wrap';
emojiDiv.style.justifyContent = 'space-between';
emojiDiv.style.width = '600px';
emojiDiv.style.fontSize = '30px';