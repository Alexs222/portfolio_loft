const skils = () => {
    const skilsList = document.querySelector('.skills-list'),
        // box = skilsList.getBoundingClientRect().top;
        box = skilsList.getBoundingClientRect(),
        skislAnimate = document.querySelectorAll('.circles'),
        skislAnimateArr = Array.from(skislAnimate);
    console.log(skislAnimate);
    console.log(skislAnimateArr);


if (skilsList) {
    document.querySelector('body').addEventListener('wheel', listSkils);
    function listSkils (e) {
        console.log(box.top);
        const pointActivation = box.top - 300;
        if (e.pageY >= pointActivation) {
            for (let i = 0; i < skislAnimateArr.length; i++) {
                skislAnimateArr[i].classList.add('active');
            }
            // skislAnimate.classList.add('active');
            console.log("достигли блока активации");
        }
        console.log(e.pageY);
        
    } 
        



    // skilsList.addEventListener('click', blockSkilsY);
    //     const blockSkilsY = function () {
    //     console.log(
    //         'elem height = ' + skilsList.offsetHeight + ', elem width = ' + skilsList.offsetWidth + ', elem top = ' + skilsList.offsetTop + ', elem left = ' + skilsList.offsetLeft
    //     );
    //     // const blockSkilsY = skilsList.offsetTop;
    //         return skilsList.offsetTop;
    //   }
    // console.log();
    
     
    // window.addEventListener('wheel', function (e) {
    //     e.preventDefault

    //     console.log(`${e.pageY} ${box}`);
    //     if (e.pageY >= box) {
    //         console.log("достигли блока активации")
    //     }
    //     console.log('Количество прокручеваемых пикселей:' + e.pageY);
    // })

    console.log("skils модуль загружен")
    }
}

export default skils