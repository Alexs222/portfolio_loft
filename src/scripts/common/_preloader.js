
const preloader = () => {

    const 
        imagesArr = [... document.querySelectorAll('img')],
        images_total_count = imagesArr.length + 1, // +1 - это картинка созданная вручную bg
        preloader = document.getElementById('page-preloader'),
        pers_display = document.getElementById('loader_perc');

    let images_loaded_count = 0;

            function image_loaded() {
            images_loaded_count++;
            pers_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

            if (images_loaded_count >= images_total_count) {
                setTimeout(function () {
                    // console.log(preloader);
                    if (!preloader.classList.contains('done')) {
                        preloader.classList.add('done');
                        console.log('класс done добавлен');

                    }

                }, 1000);
            }
            // console.log(images_loaded_count)
        }

    const img = new Image();
    imagesArr.forEach(i => i.addEventListener('load', image_loaded));
    img.addEventListener('load', image_loaded);
    img.src = '../assets/images/my-works/feedback_bg.png';


// console.log(imagesArr)
// console.log(images_total_count)
// console.log(img)





    //     console.log('событие onload произошло');
    // }
        console.log("preloader модуль загружен")
}

export default preloader

        // for (let i = 0; i < images_total_count; i++) {
        //     const image_clone = new Image();
        //     image_clone.onload = image_loaded;
        //     image_clone.onerror = image_loaded;
        //     // image_clone.src = '../../images/*.jpg';
        //     image_clone.src = images[i].src;

        // }
        // console.log(images_total_count);
        // console.log(images_loaded_count);
        // // console.log(images);


        // function image_loaded() {
        //     images_loaded_count++;
        //     pers_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

        //     if (images_loaded_count >= images_total_count) {
        //         setTimeout(function () {
        //             // console.log(preloader);
        //             if (!preloader.classList.contains('done')) {
        //                 preloader.classList.add('done');
        //                 console.log('класс done добавлен');

        //             }

        //         }, 1000);
        //     }
        // }
