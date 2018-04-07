const fullscreenMenu = () => {
    const buttonFullscreen = document.querySelector('.hamburger'),
        fsLeft = document.querySelector('.fullscreenmenu-left'),
        fsRight = document.querySelector('.fullscreenmenu-right'),
        closeFullscreen = document.querySelector('.fullscreen__btn'),
        blockFullscreen = document.querySelector('.fullscreenmenu'),
        fsList = document.querySelector('.fullscreen__list'),
        fsHeader = document.querySelector('.fullscreen-header'),
        fsBody = document.querySelector('body')
            
    // console.log(buttonFullscreen)
    // console.log(closeFullscreen)
    // console.log(fsBody)

    if (buttonFullscreen) {

        buttonFullscreen.addEventListener('click', (e) => {
            if (blockFullscreen.style.transitionDelay !== '0' + 's') {
                blockFullscreen.style.transitionDelay = '0' + 's';
            }

            e.preventDefault();
            console.log("click сработал");
            blockFullscreen.style.height = '100' + '%';
            fsLeft.style.width = '50' + '%';
            fsRight.style.width = '50' + '%';
            fsList.classList.add('active');
            fsHeader.classList.add('active');
            buttonFullscreen.style.display = 'none';
            fsBody.style.overflow = 'hidden';
        })

        closeFullscreen.addEventListener('click', (e) => {
            e.preventDefault();
            fsList.classList.remove('active');
            fsHeader.classList.remove('active');
            fsLeft.style.width = '0';
            fsRight.style.width = '0';
            blockFullscreen.style.transitionDelay = '0.6' + 's';
            blockFullscreen.style.height = '0';
            buttonFullscreen.style.display = 'block';
            fsBody.style.overflow = 'auto';
        })
    }

    console.log("fullscreenMenu модуль загружен")
}

export default fullscreenMenu