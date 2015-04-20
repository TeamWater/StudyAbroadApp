function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 
   
var MapModule = require('ti.map');
var donHostel = MapModule.createAnnotation({
    latitude: 55.670905,
    longitude: 12.576385,
    image: '',
    title: 'DonHostel',
    subtitle: 'Copenhagen'
});
var  copeTrain = MapModule.createAnnotation({
    latitude: 55.672968,
    longitude: 12.564465,
    pincolor: MapModule.ANNOTATION_AZURE,
 // Even though we are creating a button, it does not respond to Button events or animates.
 // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    leftView: Ti.UI.createButton({title: 'Detail'}),
 // For eventing, use the Map View's click event
 // and monitor the clicksource property for 'rightPane'.
    rightButton: '',    
    title: 'Kobenhavn',
    subtitle: 'Train Station'
});

var amaAirPort = MapModule.createAnnotation({
    latitude: 35.218500,
    longitude: -101.705264,
    image: '',
    title: 'Rick Husband Amarillo International Airport',
    subtitle: 'Start'
});

var DFW = MapModule.createAnnotation({
    latitude: 32.899809,
    longitude: -97.040335,
    image: '',
    title: 'Dallas/Fort Worth International Airport',
    subtitle: 'Texas, US'
});

var spainAirPort = MapModule.createAnnotation({
    latitude: 40.464446,
    longitude: -3.572611,
    image: '',
    title: 'Adolfo Suárez Madrid–Barajas Airport',
    subtitle: 'Spain'
});

var route = MapModule.createRoute({
    width: 4,
    color: '#f00',
    points: [
        {latitude:amaAirPort.latitude, longitude:amaAirPort.longitude},
        {latitude:DFW.latitude, longitude:DFW.longitude},
        {latitude:spainAirPort.latitude, longitude:spainAirPort.longitude},
    ]
});

var mapview = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude: 55.675987, longitude: 12.568145, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [copeTrain,donHostel,amaAirPort,spainAirPort,DFW] //< add these annotations upon creation
});
// Add this annotation after creation'
mapview.addRoute(route);
$.Mapwin.add(mapview);
$.Mapwin.open();

