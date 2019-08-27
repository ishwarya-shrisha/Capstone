// See post: http://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
        center: [38.62, -90.19],
        minZoom: 8,
        zoom: 10
    })
    // chicaggo center position 41.8781� N, 87.6298� W
    // ua center position 39.50, -98.57
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo.js"]').attr('src').replace('leaf-demo.js', '')

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
})

for (var i = 0; i < markers.length; ++i) {
    L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
        .bindPopup('<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>')
        .addTo(map);
}