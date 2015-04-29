//James Ritter Did this 
function openMenu() {
    var index = Alloy.createController("index").getView();
    index.open();
}
var MapModule = require('ti.map');

function openMapYou() {
  
    if (Ti.Geolocation.locationServicesEnabled) {
        Ti.Geolocation.purpose = 'Get Current Location';
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
        Ti.Geolocation.distanceFilter = 10;
        Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
        
        Ti.Geolocation.addEventListener('location', function(e) {
            if (e.error) {
                alert('Error:Please enable location services');
            } else {
            	var win = Titanium.UI.createWindow();
               
                var mapview = MapModule.createView({
                    mapType: MapModule.NORMAL_TYPE,
                    region: {
                        latitude: e.coords.latitude,
                        longitude: e.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    },
                    userLocation: true,
                    animate: true,
                });
                
                win.add(mapview);
                $.mapWin.close();
                win.open();
                
            }
        });
    }
}

function openMapCope(){

    var win = Titanium.UI.createWindow();
    
    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 55.675987,
            longitude: 12.568145,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        },
        userLocation: true,
        animate: true,
    });

  Cloud.Places.query({
    where:{city:"Copenhagen"}
}, function (e) {
    if (e.success) {
        for (var i = 0; i < e.places.length; i++) {
            var place = e.places[i];
             var placeID = MapModule.createAnnotation({
                    latitude: place.latitude,
                    longitude: place.longitude,
                    image: '',
                    title: place.name,
                    subtitle: place.details

              }) ;
              mapview.addAnnotation(placeID);
        	}
   		  }
	});
	win.add(mapview);
    $.mapWin.close();
    win.open();
}




function openMapOslo() {

    var win = Titanium.UI.createWindow();
    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 59.91361628,
            longitude: 10.75335361,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        },
        userLocation: true,
        animate: true,
    });

  Cloud.Places.query({
    where:{city:"Oslo"}
}, function (e) {
    if (e.success) {
        for (var i = 0; i < e.places.length; i++) {
            var place = e.places[i];
             var placeID = MapModule.createAnnotation({
                    latitude: place.latitude,
                    longitude: place.longitude,
                    image: '',
                    title: place.name,
                    subtitle: place.details

              }) ;
              mapview.addAnnotation(placeID);
        	}
   		  }
	});
	win.add(mapview);
    $.mapWin.close();
    win.open();
}

function openMapGoth() {

    var win = Titanium.UI.createWindow();
    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 57.70909962,
            longitude: 11.97458267,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        },
        userLocation: true,
        animate: true,
    });

  Cloud.Places.query({
    where:{city:"Gothenburg"}
}, function (e) {
    if (e.success) {
        for (var i = 0; i < e.places.length; i++) {
            var place = e.places[i];
             var placeID = MapModule.createAnnotation({
                    latitude: place.latitude,
                    longitude: place.longitude,
                    image: '',
                    title: place.name,
                    subtitle: place.details

              }) ;
              mapview.addAnnotation(placeID);
        	}
   		  }
	});
	win.add(mapview);
    $.mapWin.close();
    win.open();
}

