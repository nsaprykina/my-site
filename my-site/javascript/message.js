let messageForm = document.querySelector('.message-form');
let messageField = document.querySelector('.message-field');
let messageBtn = document.querySelector('.message-btn');

messageField.oninput = function () {
    /* console.log(messageField.value.length); */
    if (messageField.value.length < 10 || messageField.value.length > 200) {
        messageForm.classList.add('warning');
        messageBtn.disabled = true;
    } else {
        messageForm.classList.remove('warning');
        messageBtn.disabled = false;
    }
};