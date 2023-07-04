const form = document.getElementById('form');
const postIdInput = document.getElementById('input');
const searchBtn = document.getElementById("submit-btn");
const postContainer = document.getElementById('post-container');

const url = `https://jsonplaceholder.typicode.com/posts/`;

const fetchPost = (postId) => {
    return fetch(`${url}${postId}/`)
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Post not found.');
            }
        });
};

const fetchComments = (postId) => {
    return fetch(`${url}${postId}/comments/`)
        .then(response => response.json());
};

const displayComments = (commentsData, commentsContainer) => {
    commentsContainer.innerHTML = '';

    commentsData.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.innerHTML = `
            <h4>Name: ${comment.name}</h4>
            <p>Email: ${comment.email}</p>
            <p>${comment.body}</p>
            <hr/>
        `;
        commentsContainer.append(commentBlock);
    });
};

const handleError = (error) => {
    console.log(error);
    postContainer.innerHTML = 'ERROR'
};

const createPostBlock = (postData) => {
    const postBlock = document.createElement('div');
    postBlock.innerHTML = `
        <h2>Title: ${postData.title}</h2>
        <p>Id: ${postData.id}</p>
        <p>${postData.body}</p>
        <button class='commentsBtn'>Show comments</button>
        <div class='commentsContainer'></div>    
    `;

    const commentsBtn = postBlock.querySelector('.commentsBtn');
    const commentsContainer = postBlock.querySelector('.commentsContainer');
    commentsBtn.addEventListener('click', () => {
        fetchComments(postData.id)
            .then(commentsData => displayComments(commentsData, commentsContainer))
            .catch(handleError);
    });
    return postBlock;
};

const displayPost = (postData) => {
    const postBlock = createPostBlock(postData);
    postContainer.innerHTML = '';
    postContainer.append(postBlock);
};

const handleSearch = () => {
    const postId = postIdInput.value;
    if(postId >= 1 && postId <= 100) {
        fetchPost(postId)
            .then(displayPost)
            .catch(handleError);
    } else {
        postContainer.innerHTML = 'Invalid post ID';
    }
};

searchBtn.addEventListener('click', handleSearch);

