const initListeners = () => {
    displayListener('hamburger-icon', 'main_nav_top');
    onLoadingPage();
};

/* Event listeners */

// Toggles display of a "displayed element" by clicking on a "clicked element"
const displayListener = (clickedElementId, displayedElementId) => {
    const clicked = document.getElementById(clickedElementId);
    const displayed = document.getElementById(displayedElementId);
    clicked.addEventListener('click', event => {
        const displaysNone = displayed.classList.contains('display-none');
        const classToAdd = displaysNone ? 'display-block' : 'display-none';
        const classToRemove = displaysNone ? 'display-none' : 'display-block';
        displayed.classList.remove(classToRemove);
        displayed.classList.add(classToAdd);
    });
};

const onLoadingPage = () => {
    window.addEventListener('load', e => {
        if(location.href.endsWith('admin') ||
        location.href.endsWith('admin/')){
            const hamburger = document.getElementById('hamburger-icon');
            if(hamburger) {
                hamburger.classList.add('display-none');
            }
        }
        if(location.href.endsWith('add') ||
        location.href.includes('edit/')) {
            onSave();
        }
    });
}

const onSave = () => {
    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', e => {
        alert("Post was saved!");
    });
}

initListeners();

