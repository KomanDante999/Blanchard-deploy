type="text/javascript">
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map",
            {
                center: [55.758468, 37.601088],
                zoom: 17,
                controls: ['geolocationControl', 'zoomControl']
            },
            {
              suppressMapOpenBlock: true,
              geolocationControlSize: "large",
              geolocationControlPosition:  { top: "200px", right: "20px" },
              geolocationControlFloat: 'none',
              zoomControlSize: "small",
              zoomControlFloat: "none",
              zoomControlPosition: { top: "120px", right: "20px" }
            }
            );
            // Создание геообъекта с типом точка (метка).
            // var myGeoObject = new ymaps.GeoObject({
            //     geometry: {
            //         type: "Point", // тип геометрии - точка
            //         coordinates: [55.758468, 37.601088] // координаты точки
            //     }
            // });

            var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'block/yandex-map/img/point.jpg',
                iconImageSize: [20, 20],
                // iconImageOffset: [-3, -42]
            });

            // Размещение геообъекта на карте.
            // myMap.geoObjects.add(myGeoObject);
            myMap.geoObjects.add(myPlacemark);

        }


