const parallax_mouse = () => {
    const
        parallaxContainer = document.getElementById('parallax'),
        layers = document.getElementsByClassName('parallax-image '),
        layersArr = [...layers];
    // console.log(parallaxContainer);
    // console.log(layers);
    // console.log(layersArr);

    const moveLayers = (e) => {
        const initialX = window.innerWidth / 2 - e.pageX;
        const initialY = window.innerHeight / 2 - e.pageY;

        // console.log(initialX, initialY);
        

        layersArr.forEach((layer, i) => {
            const divider = i / 100;
            const positionX = initialX * divider;
            const positionY = initialY * divider;
            const lrPosition = window.innerWidth / 2 * divider;
            const layerStyle = layers.style;

            layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
            layer.style.bottom = `-${lrPosition}px`;

        })

    } 

    
    



    window.addEventListener('mousemove', moveLayers);
 
    console.log("parallaxMouse модуль загружен")
}

export default parallax_mouse