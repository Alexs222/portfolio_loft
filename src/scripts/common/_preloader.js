import { constants } from "zlib";

const preloader = () => {

    const 
        images = document.images,
        images_total_count = images.length,
        preloader = document.getElementById('page-preloader'),
        pers_display = document.getElementById('loader_perc');

    let images_loaded_count = 0;


        for (let i = 0; i < images_total_count; i++) {
            const image_clone = new Image();
            image_clone.onload = image_loaded;
            image_clone.onerror = image_loaded;
            // image_clone.src = '../../images/*.jpg';
            image_clone.src = images[i].src;
        }
            console.log(images_total_count);
            console.log(images_loaded_count);
            // console.log(images);


        function image_loaded () {
            images_loaded_count ++;
            pers_display.innerHTML = (((100 / images_total_count) * images_loaded_count ) << 0) + '%';

            if (images_loaded_count >= images_total_count) {
                setTimeout (function () {
            // console.log(preloader);
                    if (!preloader.classList.contains('done')) {
                        preloader.classList.add('done');
                        console.log('класс done добавлен');
                
                    }       
            
                }, 2000);
            }
          }


    //     console.log('событие onload произошло');
    // }
    //     console.log("preloader модуль загружен")
}

export default preloader