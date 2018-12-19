import View from './View.js';

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el);
    this.activeEl = el.querySelectorAll('li');
    this.bindClick();
    return this;
}

TabView.setActiveTab = function (tabName) {
    //debugger
<<<<<<< HEAD
    Array.from(this.activeEl)
        .forEach(li => {
            li.className = li.innerHTML === tabName ? 'active' : '';
        });
}
TabView.bindClick = function () {
    this.activeEl.forEach(li => {
        li.addEventListener('click', (e) => this.onActive(li.innerHTML));
    });
}

TabView.onActive = function (tabName) {
    this.setActiveTab(tabName);
    this.emit('@change', { tabName })
=======
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : '';
    });
>>>>>>> 031f66977b313a49d7d69f643ce791e320e5b7f1
}

export default TabView;
