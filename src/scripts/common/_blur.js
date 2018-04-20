const blur = () => {

    const
        wrapper = document.querySelector('.feedback-form__contaner'),
        form = document.querySelector('.connect__blured');

    // console.log(wrapper);
    // console.log(form);

    const set = function () {
        let topIndent = wrapper.offsetTop;
        let leftIndent = wrapper.offsetLeft;
        let height = wrapper.offsetHeight;
        let width = wrapper.offsetWidth;

        form.style.chip = `rect(${topIndent}px, ${leftIndent + width}px, ${topIndent + height}px, ${leftIndent}px)`;  


        // const windowWidth = document.querySelector('.feedback').offsetWidth,
        //     posLeft = -wrapper.offsetLeft,
        //     posTop = -wrapper.offsetTop,
        //     blurCSS = form.style;

        // blurCSS.backgroundSize = windowWidth + 'px' + ' ' + 'auto';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        // // blurCSS.backgroundSize = `${windowWidth} px auto`;
        // // blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;

        // // console.log(blurCSS);

    }; 
    
    if (wrapper != null) {
        window.onload = set();
        window.addEventListener('resize', () => set());
    }
    


    // window.onresize = function () {
    //     // console.log(e);
    //     set();
    // }



    // window.onscroll = function () {
    //     const parallaxV = (function () {
    //         const
    //             parallax = document.querySelector('.parallax-wrap'),
    //             fon = document.querySelector('.hero__fon'),
    //             content = document.querySelector('.header__content');

    //         // console.log(parallax);
    //         // console.log(fon);
    //         // console.log(content);
    //         return {
    //             move: function (block, windowScroll, strafeAmount) {
    //                 const strafe = windowScroll / -strafeAmount + '%';
    //                 const transformString = `translate3d(0, ${strafe} , 0)`;
    //                 const style = block.style;
    //                 style.transform = transformString;
    //                 style.webkitTransform = transformString;
    //             },
    //             init: function (wScroll) {
    //                 if (fon) {
    //                     this.move(parallax, wScroll, 45);
    //                     this.move(fon, wScroll, 35);
    //                     this.move(content, wScroll, 25);
    //                 }
    //                 else {
    //                     this.move(parallax, wScroll, 45);
    //                     this.move(content, wScroll, 25);
    //                 }
    //             }
    //         }
    //     }());

    //     const wScroll = window.pageYOffset;
    //     parallaxV.init(wScroll);
    //     // console.log(wScroll);


    // }

    console.log("blur модуль загружен")
}

export default blur