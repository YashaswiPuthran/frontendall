const accordionTitles = document.querySelectorAll('.accord__title');
const accordionContents = document.querySelectorAll('.accord__desc');

accordionTitles.forEach((title, index) => {
title.addEventListener('click', function() {

    const content = accordionContents[index];
    for (let i = 0; i < accordionContents.length; i++) {
        if (i !== index) {
            accordionContents[i].style.display = 'none';
        }
    }

    if (content.style.display === 'none') {
        content.style.display = 'block';
    }
    else {
        content.style.display = 'none';
    }

    });
});