// Дано 3 блоки
//     В лівій частині сторінки - перелік категорій.
//     При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
//     Клік на товар - інформацію про товар у правому блоці.
//     В інформації товару - кнопка “купити”.
//     При натисканні на “купити” з'являється повідомлення, що товар куплений і 
//     повернення у вихідний стан програми ( коли відображається лише список категорій).

const wrapper = document.createElement('div');
const navigation = document.createElement('nav');
const bookCategories = document.createElement('ul');
const allItems = document.createElement('div');
const classicsDiv = document.createElement('div');
const fantasyDiv = document.createElement('div');
const nonFicDiv = document.createElement('div');

const allBooksProfiles = document.createElement('div');

const classicsBookProfile1 = document.createElement('div');
const classicsBookProfile2 = document.createElement('div');
const classicsBookProfile3 = document.createElement('div');

const fantasyBookProfile1 = document.createElement('div');
const fantasyBookProfile2 = document.createElement('div');
const fantasyBookProfile3 = document.createElement('div');

const nonFicBookProfile1 = document.createElement('div');
const nonFicBookProfile2 = document.createElement('div');
const nonFicBookProfile3 = document.createElement('div');

classicsDiv.className = 'categories-div';
fantasyDiv.className = 'categories-div';
nonFicDiv.className = 'categories-div';

classicsBookProfile1.className = 'profiles';
classicsBookProfile2.className = 'profiles';
classicsBookProfile3.className = 'profiles';

fantasyBookProfile1.className = 'profiles';
fantasyBookProfile2.className = 'profiles';
fantasyBookProfile3.className = 'profiles';

nonFicBookProfile1.className = 'profiles';
nonFicBookProfile2.className = 'profiles';
nonFicBookProfile3.className = 'profiles';


bookCategories.insertAdjacentHTML('beforeend', `
    <li id='classicsLi'>Classics</li>
    <li id='fantasyLi'>Fantasy</li> 
    <li id='nonficLi'>Non-fiction</li>`
);

const classicsList = document.createElement('ul');
classicsList.insertAdjacentHTML('beforeend', `
    <li id='classics-book1'>Pride and Prejudice</li>
    <li id='classics-book2'>The Picture of Dorian Gray</li> 
    <li id='classics-book3'>The Odyssey</li>
`);

const fantasyList = document.createElement('ul');
fantasyList.insertAdjacentHTML('beforeend', `
    <li id='fantasy-book1'>The Fellowship of the Ring (LOR Book 1)</li>
    <li id='fantasy-book2'>The Eye Of The World (Wheel of Time Book 1)</li> 
    <li id='fantasy-book3'>The Last Wish (The Witcher Book 1)</li>
`);

const nonFicList = document.createElement('ul');
nonFicList.insertAdjacentHTML('beforeend', `
    <li id='nonfic-book1'>A Brief History Of Time: From Big Bang To Black Holes</li>
    <li id='nonfic-book2'>The Diary of a Young Girl</li> 
    <li id='nonfic-book3'>Borderland: A Journey Through the History of Ukraine</li>
`);

classicsBookProfile1.insertAdjacentHTML('beforeend', `
    <h2>Pride and Prejudice</h2>
    <h3>Jane Austen</h3>
    <p>
        Austen's most famous novel, the delightfully witty courtship of Elizabeth Bennet and Fitzwilliam Darcy is brimming with character, playfulness and irony. Impeccably crafted in flawless prose, Pride and Prejudice remains one of the jewels in the crown of English literature.
    </p>
`);

classicsBookProfile2.insertAdjacentHTML('beforeend', `
    <h2>The Picture of Dorian Gray</h2>
    <h3>Oscar Wilde</h3>
    <p>
        Enthralled by his own exquisite portrait, Dorian Gray exchanges his soul for eternal youth and beauty.
        Influenced by his friend Lord Henry Wotton, he is drawn into a corrupt double life; indulging his desires in secret while remaining a gentleman in the eyes of polite society. Only his portrait bears the traces of his decadence.
        The novel was a succes de scandale and the book was later used as evidence against Wilde at the Old Bailey in 1895. It has lost none of its power to fascinate and disturb.
    </p>
`);

classicsBookProfile3.insertAdjacentHTML('beforeend', `
    <h2>The Odyssey</h2>
    <h3>Homer</h3>
    <p>
        This epic tale, one of the oldest surviving records of Classic verse, telling the story of Odysseus and his ten-year journey home after the Trojan War forms one of the earliest and greatest works of Western literature.
    </p>
`);

fantasyBookProfile1.insertAdjacentHTML('beforeend', `
    <h2>The Fellowship of the Ring - The Lord of the Rings Book 1</h2>
    <h3>J. R. R. Tolkien</h3>
    <p>
        The first part of Tolkien's genre-defining masterpiece introduces arguably the most famous quest in fiction, as Frodo and his comrades set off to destroy the One Ring.
    </p>
`);

fantasyBookProfile2.insertAdjacentHTML('beforeend', `
    <h2>The Eye Of The World - Wheel of Time</h2>
    <h3>Robert Jordan</h3>
    <p>
        Robert Jordan's vast Wheel of Time sequence is one of the most astounding achievements in fantasy literature. Spanning 14 volumes, this is world-building on an unprecedented scale as well as a kaleidoscopic fusion of myth, religion, folklore and Eastern philosophy. The epic journey begins here, with the mesmeric The Eye of The World.
    </p>
`);

fantasyBookProfile3.insertAdjacentHTML('beforeend', `
    <h2>The Last Wish - The Witcher 1</h2>
    <h3>Andrzej Sapkowski</h3>
    <p>
        Introducing Geralt the Witcher - revered and hated - who holds the line against the monsters plaguing humanity in the bestselling series that inspired the Witcher video games and a major Netflix show.
    </p>
`);

nonFicBookProfile1.insertAdjacentHTML('beforeend', `
    <h2>A Brief History Of Time: From Big Bang To Black Holes</h2>
    <h3>Stephen Hawking</h3>
    <p>
        Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries?
        These are just some of the questions considered in an internationally acclaimed masterpiece by one of the world's greatest thinkers.
        Following his passing in March 2018, Stephen Hawking's A Brief History of Time will continue to forever stand as his gift to the world. 
        Few books have carried such a siesmic impact, opening millions of minds to the deep cosmos in language that is both succinct and clear. 
    </p>
`);

nonFicBookProfile2.insertAdjacentHTML('beforeend', `
    <h2>The Diary of a Young Girl</h2>
    <h3>Anne Frank</h3>
    <p>
        One of the most famous accounts of living under the Nazi regime of World War II comes from the diary of a thirteen-year-old Jewish girl, Anne Frank. Today, The Diary of a Young Girl has sold over 25 million copies world-wide.
    </p>
`);

nonFicBookProfile3.insertAdjacentHTML('beforeend', `
    <h2>Borderland: A Journey Through the History of Ukraine</h2>
    <h3>Anna Reid</h3>
    <p>
        A potent mix of history and travel writing, Reid's chronicle of Ukraine deploys testimony from both pro-democracy activists and pro-Russian militiamen in a bid to understand the complexities of a unique European nation.
    </p>
`);

document.body.append(wrapper);
wrapper.append(navigation, allItems, allBooksProfiles);
navigation.append(bookCategories);
allItems.append(classicsDiv, fantasyDiv, nonFicDiv);
classicsDiv.append(classicsList);
fantasyDiv.append(fantasyList);
nonFicDiv.append(nonFicList);
allBooksProfiles.append(
    classicsBookProfile1, classicsBookProfile2, classicsBookProfile3, 
    fantasyBookProfile1, fantasyBookProfile2, fantasyBookProfile3, 
    nonFicBookProfile1, nonFicBookProfile2, nonFicBookProfile3
);

wrapper.style = {
    position: 'absolute',
    left: '100%'
};

const classicsButton = document.getElementById('classicsLi');
const fantasyButton = document.getElementById('fantasyLi');
const nonFicButton = document.getElementById('nonficLi');

let addStylePropertiesMiddle = (element) => {
    element.style.display = 'none';
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '30%';
};

let addStylePropertiesRight = (element) => {
    element.style.display = 'none';
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '90%';
};

addStylePropertiesMiddle(nonFicDiv);
addStylePropertiesMiddle(classicsDiv);
addStylePropertiesMiddle(fantasyDiv);

addStylePropertiesRight(classicsBookProfile1);
addStylePropertiesRight(classicsBookProfile2);
addStylePropertiesRight(classicsBookProfile3);
addStylePropertiesRight(fantasyBookProfile1);
addStylePropertiesRight(fantasyBookProfile2);
addStylePropertiesRight(fantasyBookProfile3);
addStylePropertiesRight(nonFicBookProfile1);
addStylePropertiesRight(nonFicBookProfile2);
addStylePropertiesRight(nonFicBookProfile3);

const allCategories = document.getElementsByClassName('categories-div');

function manageAppearance(element, elements) {
    return function() {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
        for(el of elements){
            if(el !== element) {
                el.style.display = 'none';
            };
        };
    };
};

classicsButton.addEventListener('click', manageAppearance(classicsDiv, allCategories));
fantasyButton.addEventListener('click', manageAppearance(fantasyDiv, allCategories));
nonFicButton.addEventListener('click', manageAppearance(nonFicDiv, allCategories));

const classicsProfiles = [];

for(let i=1; i<4; i++) {
    const element = document.getElementById(`classics-book${i}`);
    classicsProfiles.push(element);
};

console.log(classicsProfiles);

navigation.style.position = 'relative';





