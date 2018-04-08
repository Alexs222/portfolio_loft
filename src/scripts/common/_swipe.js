const swipe = () => {
    const btnSwipe = document.querySelector('.blog__swipe__btn'),
        blockSwipe = document.querySelector('.blog-swipe__menu'),
        blockMenu = document.querySelector('.blog-swipe__list');
        // aticlesArr = document.querySelectorAll('.blog-swipe__link');



    // console.log(aticlesArr);

    if (blockSwipe) {

    btnSwipe.addEventListener('click', (e) => {
        blockSwipe.classList.add('active');
        blockMenu.classList.add('active');


        console.log('Сработал Swipe')
    })

    blockMenu.addEventListener('click', (e) => {
        console.log(e.target.classList ) 
            

        // blockSwipe.classList.remove('active');
        // blockMenu.classList.remove('active');


        console.log('Сработал un Swipe')
    })

        

    console.log("swipe модуль загружен");
}
}
export default swipe