//James Ritter Did this 
function openMenu() {
    var index = Alloy.createController("index").getView();
    index.open();
}

function OpenYouMap() {    	
        if (Ti.Geolocation.locationServicesEnabled) {
        
            var mapview = MapModule.createView({
                mapType : MapModule.NORMAL_TYPE,
                region : {
                    latitude : Alloy.Globals.lat,
                    longitude : Alloy.Globals.lng ,
                    latitudeDelta : 0.01,
                    longitudeDelta : 0.01
                },
                regionFit : true,
                userLocation : true,
            });
            $.mapWin.add(mapview);
            } else{
    	alert("Enable Location Services");
    }
}
var MapModule = require('ti.map');

function openMapCope(){

    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 55.675987,
            longitude: 12.568145,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        },
        animate : true,
        regionFit : true,
        userLocation: true,
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
    $.mapWin.add(mapview);
}




function openMapOslo() {

    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 59.91361628,
            longitude: 10.75335361,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        },
        userLocation: true,
        animate : true,
        regionFit : true,
        
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
    $.mapWin.add(mapview);
}

function openMapGoth() {

    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 57.70909962,
            longitude: 11.97458267,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        },
        userLocation: true,
        animate : true,
        regionFit : true,


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

    $.mapWin.add(mapview);
}

