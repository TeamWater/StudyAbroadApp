var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white'});
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
var random = MapModule.createAnnotation({
    latitude: -33.87365,
    longitude: 151.20689,
    pincolor: MapModule.ANNOTATION_VIOLET,
 // Even though we are creating a label, it does not respond to Label events.
 // Use the Map View's events instead.    
    customView: Ti.UI.createLabel({
        text: 'MOVE ME!',
        opacity: '80%',
        color: 'red',
        backgroundColor: 'gray',
        font: {
            fontSize: '16dp',
            fontWeight: 'bold'
        }
    }),
    draggable: true
});

var route = MapModule.createRoute({
    width: 4,
    color: '#f00',
    points: [
        {latitude:donHostel.latitude, longitude:donHostel.longitude},
        {latitude:copeTrain.latitude, longitude:copeTrain.longitude},
    ]
});

var mapview = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude: 55.675987, longitude: 12.568145, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [copeTrain,donHostel] //< add these annotations upon creation
});
// Add this annotation after creation'
mapview.addRoute(route);
mapview.addAnnotation(random);
win.add(mapview);
win.open();

