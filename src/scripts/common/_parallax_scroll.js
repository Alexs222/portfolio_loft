const parallax_scroll = () => {

    window.onscroll = function () {
        const parallaxV = (function () {
            const 
                parallax = document.querySelector('.parallax-wrap'),
                fon = document.querySelector('.hero__fon'),
                content = document.querySelector('.header__content');

    // console.log(parallax);
    // console.log(fon);
    // console.log(content);
            return {
                move: function (block, windowScroll, strafeAmount) {
                    const strafe = windowScroll / -strafeAmount + '%';
                    const transformString = `translate3d(0, ${strafe} , 0)`;
                    const style = block.style;
                    style.transform = transformString;
                    style.webkitTransform = transformString;
                }, 
                init: function (wScroll) {
                    if (fon) {
                        this.move(parallax, wScroll, 45);
                        this.move(fon, wScroll, 35);
                        this.move(content, wScroll, 25);
                    }
                    else {
                        this.move(parallax, wScroll, 45);
                        this.move(content, wScroll, 25);
                    }
                }
            }
        }());

        const wScroll = window.pageYOffset;
        parallaxV.init(wScroll);
        // console.log(wScroll);
        
        
    }

    console.log("parallaxScroll модуль загружен")
}

export default parallax_scroll