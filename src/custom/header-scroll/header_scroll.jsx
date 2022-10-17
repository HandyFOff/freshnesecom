window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled !== 0){document.querySelector('.header').style.backgroundColor = '#000';}
    else{document.querySelector('.header').style.backgroundColor = 'rgba(255, 255, 255, 0)';};
};