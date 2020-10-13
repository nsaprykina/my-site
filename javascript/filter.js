let articles = document.querySelectorAll('.article-item');
let theme = document.querySelector('.articles-theme');

theme.onchange = function () {
    for (let article of articles) {
        if (article.dataset.category !== theme.value && theme.value !== 'all') {
            article.classList.add('hidden');
        } else {
            article.classList.remove('hidden');
        }
    }
};