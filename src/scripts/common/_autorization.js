const aktivization = () => {
    const buttonAutorization = document.getElementById('autorization'),
        flip = document.querySelector('.flip'),
        panelInfo = document.querySelector('.front'),
        panelOrder = document.querySelector('.back'),
        buttonIndex = document.querySelector('.order__form-button_main')
        // section = document.querySelector('.index-section')

        // console.log(buttonAutorization)
        // console.log(panelInfo)
        // console.log(panelOrder)
        // console.log(buttonIndex)
        // console.log(section)

    if (buttonAutorization !== null) {

        buttonAutorization.addEventListener('click', (e) => {
            e.preventDefault();
            buttonAutorization.style.display = 'none';
            flip.classList.add('active')

        })

        buttonIndex.addEventListener('click', () => {
            buttonAutorization.style.display = 'block';
            flip.classList.remove('active')
        })
    }
    console.log("модуль загружен")
}

export default aktivization