let spinnerWrapper = document.querySelector('.load-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
