ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.778544, 37.664856],
        zoom: 16,
        controls: [],

    })  ;
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [55.778544 , 37.664856]
        },
        // Свойства.
        properties: {
            // Контент метки.
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(myGeoObject);
}