const skils = () => {
    const skilsList = document.querySelector('.skills-list'),
        skislAnimate = document.querySelectorAll('.circles'),
        skislAnimateArr = Array.from(skislAnimate);
    // console.log(skislAnimate);
    // console.log(skislAnimateArr);


if (skilsList) {
    const box = skilsList.getBoundingClientRect();
    document.querySelector('body').addEventListener('wheel', listSkils);
    function listSkils (e) {
        console.log(box.top);
        const pointActivation = box.top - 300;
        if (e.pageY >= pointActivation) {
            for (let i = 0; i < skislAnimateArr.length; i++) {
                skislAnimateArr[i].classList.add('active');
            }
            console.log("достигли блока активации");
        }
        console.log(e.pageY);
        
    } 
    console.log("skils модуль загружен")
    }
}

export default skils