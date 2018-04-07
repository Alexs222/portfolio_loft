const swipe = () => {
    const btnSwipe = document.querySelector('.blog__swipe__btn'),
        blockSwipe = document.querySelector('.blog-swipe__menu'),
        blockMenu = document.querySelector('.blog-swipe__list'),
        aticlesArr = document.querySelectorAll('.blog-swipe__link');


        //     fsRight = document.querySelector('.fullscreenmenu-right'),
    //     closeFullscreen = document.querySelector('.fullscreen__btn'),
    //     blockFullscreen = document.querySelector('.fullscreenmenu'),
    //     fsList = document.querySelector('.fullscreen__list'),
    //     fsHeader = document.querySelector('.fullscreen-header'),
    //     fsBody = document.querySelector('body')

    console.log(aticlesArr);
    // // console.log(closeFullscreen)
    // // console.log(fsBody)

    // if (buttonFullscreen) {

    btnSwipe.addEventListener('click', (e) => {
        blockSwipe.classList.add('active');
        blockMenu.classList.add('active');


        console.log('Сработал Swipe')
    })

    !blockMenu.addEventListener('click', (e) => {
        blockSwipe.classList.remove('active');
        blockMenu.classList.remove('active');


        console.log('Сработал un Swipe')
    })

        
    //         e.preventDefault();
    //         console.log("click сработал");
    //         blockFullscreen.style.height = '100' + '%';
    //         fsLeft.style.width = '50' + '%';
    //         fsRight.style.width = '50' + '%';
    //         fsList.classList.add('active');
    //         fsHeader.classList.add('active');
    //         buttonFullscreen.style.display = 'none';
    //         fsBody.style.overflow = 'hidden';
    //     })

    //     closeFullscreen.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         fsList.classList.remove('active');
    //         fsHeader.classList.remove('active');
    //         fsLeft.style.width = '0';
    //         fsRight.style.width = '0';
    //         blockFullscreen.style.transitionDelay = '0.6' + 's';
    //         blockFullscreen.style.height = '0';
    //         buttonFullscreen.style.display = 'block';
    //         fsBody.style.overflow = 'auto';
    //     })
    // }

    console.log("swipe модуль загружен");
}

export default swipe