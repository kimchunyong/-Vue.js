import View from './View.js';

const tag = '[KeywordView]';

const KeywordView = Object.create(View);

KeywordView.setup = function (el) {
    this.init(el);
    return this;
}

KeywordView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getKeywordHTML(data) : "추천 검색어가 없습니다.";
    this.bindClickEvent();
    this.show();
}

KeywordView.getKeywordHTML = function (data) {
    return data.reduce((html, item, index) => {
        html += `<li data-keyword="${item.keyword}">
            <sapn clas="number">${index + 1}</span>
            ${item.keyword}
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

KeywordView.bindClickEvent = function () {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => {
            this.onClickKeyword(e)
        })
    })
}

KeywordView.onClickKeyword = function (e) {
    console.log(e.currentTarget.dataset)
    const { keyword } = e.currentTarget.dataset;
    this.emit('@click', { keyword });
}

export default KeywordView;