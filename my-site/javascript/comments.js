let commentForm = document.querySelector('.comment-form');
let chat = document.querySelector('.comment-chat');
let commentField = document.querySelector('.comment-field');
let commentName = document.querySelector('.comment-name');
let commentEmail = document.querySelector('.comment-email');
let commentBtn = document.querySelector('.comment-btn');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('div');
    newComment.classList.add ('comment-text');
    chat.append(newComment);
    let newImage = document.createElement('img');
    newImage.classList.add('comment-image');
    newComment.append(newImage);
    let newUser = document.createElement('b')
    newUser.classList.add('comment-user');
    newUser.textContent = commentName.value;
    newComment.append(newUser);
    newMessage = document.createElement('p');
    newMessage.classList.add('comment-message');
    newMessage.textContent = commentField.value;
    newComment.append(newMessage);
    commentName.value = '';
    commentEmail.value = '';
    commentField.value = '';    
};

commentField.oninput = function () {
    /* console.log(commentField.value.length); */
    if (commentField.value.length < 10 || commentField.value.length > 200) {
        commentForm.classList.add('warning');
        commentBtn.disabled = true;
    } else {
        commentForm.classList.remove('warning');
        commentBtn.disabled = false;
    }
};