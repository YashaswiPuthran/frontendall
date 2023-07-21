const tabContainer = document.querySelector('.tab-container');
const tabHeaderElements = document.querySelectorAll('.tab-container .tab-header > div');
const tabBody = document.querySelector('.tab-container .tab-body');
const tabBodyElements = document.querySelectorAll('.tab-container .tab-content');

tabHeaderElements.forEach((tabElement, index) => {
    tabElement.addEventListener('click', () => {
        tabContainer.querySelector('.active').classList.remove('active');
        tabElement.classList.add('active');
        tabBody.querySelector('.active').classList.remove('active');
        tabBodyElements[index].classList.add('active');
    });
});
