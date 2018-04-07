

const aktivization = () => {
    const buttonAutorization = document.getElementById('autorization'),
        panelInfo = document.querySelector('.main_info'),
        panelOrder = document.querySelector('.main_order'),
        buttonIndex = document.querySelector('.order__form-button_main'),
        section = document.querySelector('.index-section')


    if (buttonAutorization !== null) {

        buttonAutorization.addEventListener('click', (e) => {
            e.preventDefault();
            buttonAutorization.style.display = 'none';

            panelInfo.classList.add('visuallyhidden')
            panelOrder.classList.remove('visuallyhidden')

        })

        buttonIndex.addEventListener('click', () => {
            buttonAutorization.style.display = 'block';
            panelOrder.classList.add('visuallyhidden')
            panelInfo.classList.remove('visuallyhidden')
        })

    }
    console.log("модуль загружен")
}

export default aktivization
