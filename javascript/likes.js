let like = document.querySelector('.like-button');
let likeNumber = document.querySelector('.like-number');

like.onclick = function () {
    if (like.classList.contains('added')) {
        likeNumber.textContent--;
    } else {
        likeNumber.textContent++;
    }
    like.classList.toggle('added');
};