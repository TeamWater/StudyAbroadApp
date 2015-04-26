//James Ritter Did this 
function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   }    
var MapModule = require('ti.map');




 function openMapCope(){
 	
 	var win = Titanium.UI.createWindow();
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude: 55.675987, longitude: 12.568145, latitudeDelta: 0.1, longitudeDelta: 0.1 },
     });
     
var placeList = ['553a70f1c3a596184905fc34','553aae8f57fff4d40608a187'];
 for (var i = 0; i < placeList.length; i++) {
     Cloud.Places.show({
         place_id: placeList[i]
     }, function(e) {
         if (e.success) {
             var place = e.places[0];
             var placeID = String(placeList[i]);       
             placeID = MapModule.createAnnotation({
            	 latitude: place.latitude,
   				 longitude: place.longitude,
   				 image: '',
   				 title: place.name,
    			 subtitle: place.details
    			
            });
           }
           mapview.addAnnotation(placeID);
        });
       };
                
    win.add(mapview);
    $.mapWin.close();
    win.open();
   
}

 function openMapOslo(){
 	
 	var win = Titanium.UI.createWindow();
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude:59.91361628, longitude: 10.75335361, latitudeDelta: 0.1, longitudeDelta: 0.1 },
     });
     
var placeList = ['553a70f1c3a596184905fc34','553aae8f57fff4d40608a187'];
 
 for (var i = 0; i < placeList.length; i++) {
     Cloud.Places.show({
         place_id: placeList[i]
     }, function(e) {
         if (e.success) {
             var place = e.places[0];
             var placeID = String(placeList[i]);       
             placeID = MapModule.createAnnotation({
            	 latitude: place.latitude,
   				 longitude: place.longitude,
   				 image: '',
   				 title: place.name,
    			 subtitle: place.details
    			
            });
           }
           mapview.addAnnotation(placeID);
        });
       };
                
    win.add(mapview);
    $.mapWin.close();
    win.open();
}

 function openMapGoth(){
 	
 	var win = Titanium.UI.createWindow();
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude: 57.70909962, longitude: 11.97458267, latitudeDelta: 0.1, longitudeDelta: 0.1 },
     });
     
var placeList = ['553a70f1c3a596184905fc34','553aae8f57fff4d40608a187'];

 for (var i = 0; i < placeList.length; i++) {
     Cloud.Places.show({
         place_id: placeList[i]
     }, function(e) {
         if (e.success) {
             var place = e.places[0];
             var placeID = String(placeList[i]);       
             placeID = MapModule.createAnnotation({
            	 latitude: place.latitude,
   				 longitude: place.longitude,
   				 image: '',
   				 title: place.name,
    			 subtitle: place.details
    			
            });
           }
           mapview.addAnnotation(placeID);
        });
       };
                
    win.add(mapview);
    $.mapWin.close();
    win.open();
   
}


function openMapYou(){
	var win = Titanium.UI.createWindow();

 if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.purpose = 'Get Current Location';
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.distanceFilter = 10;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    Ti.Geolocation.addEventListener('location', function(e) {
 if (e.error) {
            alert('Error: ' + e.error);
        } else {
	 		
      Ti.API.info(e.coords);
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude: e.coords.latitude , longitude: e.coords.longitude, latitudeDelta: 0.001, longitudeDelta: 0.001 },
     });
     
     if(OS_IOS){
     var you = MapModule.createAnnotation({
            	 latitude: e.coords.latitude,
   				 longitude: e.coords.longitude,
   				 title: "You are here",
   				 pincolor:"Ti.Map.ANNOTATION_RED"
    			
            });
 };
 
 if(OS_ANDROID){
     var you = MapModule.createAnnotation({
            	 latitude: e.coords.latitude,
   				 longitude: e.coords.longitude,
   				 title: "You are here",
   				pincolor: Ti.Map.ANNOTATION_RED,
    			
            });
 };
    mapview.addAnnotation(you);           
    win.add(mapview);
    $.mapWin.close();
    win.open();
        }
    });
} else {
    ('Please enable location services');
}
}


