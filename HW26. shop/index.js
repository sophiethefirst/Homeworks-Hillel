const books = [
    {
        id: 0,
        genre: 'classics',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: `Austen's most famous novel, the delightfully witty courtship of Elizabeth Bennet and Fitzwilliam Darcy is brimming with character, playfulness and irony. Impeccably crafted in flawless prose, Pride and Prejudice remains one of the jewels in the crown of English literature.`,
    }, 
    {
        id: 1,
        genre: 'classics',
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        description: `Enthralled by his own exquisite portrait, Dorian Gray exchanges his soul for eternal youth and beauty.
        Influenced by his friend Lord Henry Wotton, he is drawn into a corrupt double life; indulging his desires in secret while remaining a gentleman in the eyes of polite society. Only his portrait bears the traces of his decadence.
        The novel was a succes de scandale and the book was later used as evidence against Wilde at the Old Bailey in 1895. It has lost none of its power to fascinate and disturb.`,
    },
    {
        id: 2,
        genre: 'classics',
        title: 'The Odyssey',
        author: 'Homer',
        description: `This epic tale, one of the oldest surviving records of Classic verse, telling the story of Odysseus and his ten-year journey home after the Trojan War forms one of the earliest and greatest works of Western literature.`,
    },
    {
        id: 3,
        genre: 'fantasy',
        title: 'The Fellowship of the Ring - The Lord of the Rings Book 1',
        author: 'J. R. R. Tolkien',
        description: `The first part of Tolkien's genre-defining masterpiece introduces arguably the most famous quest in fiction, as Frodo and his comrades set off to destroy the One Ring.`,
    },
    {
        id: 4,
        genre: 'fantasy',
        title: 'The Eye Of The World - Wheel of Time',
        author: 'Robert Jordan',
        description: `Robert Jordan's vast Wheel of Time sequence is one of the most astounding achievements in fantasy literature. Spanning 14 volumes, this is world-building on an unprecedented scale as well as a kaleidoscopic fusion of myth, religion, folklore and Eastern philosophy. The epic journey begins here, with the mesmeric The Eye of The World.`,
    },
    {
        id: 5,
        genre: 'fantasy',
        title: 'The Last Wish - The Witcher 1',
        author: 'Andrzej Sapkowski',
        description: `Introducing Geralt the Witcher - revered and hated - who holds the line against the monsters plaguing humanity in the bestselling series that inspired the Witcher video games and a major Netflix show.`,
    },
    {
        id: 6,
        genre: 'non-fiction',
        title: 'A Brief History Of Time: From Big Bang To Black Holes',
        author: 'Stephen Hawking',
        description: `Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries?
        These are just some of the questions considered in an internationally acclaimed masterpiece by one of the world's greatest thinkers.
        Following his passing in March 2018, Stephen Hawking's A Brief History of Time will continue to forever stand as his gift to the world. 
        Few books have carried such a siesmic impact, opening millions of minds to the deep cosmos in language that is both succinct and clear.`,
    },
    {
        id: 7,
        genre: 'non-fiction',
        title: 'The Diary of a Young Girl',
        author: 'Anne Frank',
        description: `One of the most famous accounts of living under the Nazi regime of World War II comes from the diary of a thirteen-year-old Jewish girl, Anne Frank. Today, The Diary of a Young Girl has sold over 25 million copies world-wide.`,
    }
];

const createBookCard = ({title, author, description}) => `
    <div class='bookCards'>
        <div class='cardInfo'>
            <h2 class='title'>${title}</h2>
            <h4 class='author'>${author}</h4>
            <p class='description'>${description}</p>
        </div>
    </div>
`;