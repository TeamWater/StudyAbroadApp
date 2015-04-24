//James Ritter Did this 
function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   }    
var MapModule = require('ti.map');

$.copeView.addEventListener('click',openMapCope);
$.osloView.addEventListener('click',openMapOslo);
$.gothView.addEventListener('click',openMapGoth);


 function openMapCope(mapNotes){
 	
 	var win = Titanium.UI.createWindow();
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude: 55.675987, longitude: 12.568145, latitudeDelta: 0.1, longitudeDelta: 0.1 },
     });
     
var placeList = ['553a70f1c3a596184905fc34','553aae8f57fff4d40608a187'];
 var mapNotes = [];
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

 function openMapOslo(mapNotes){
 	
 	var win = Titanium.UI.createWindow();
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude:59.91361628, longitude: 10.75335361, latitudeDelta: 0.1, longitudeDelta: 0.1 },
     });
     
var placeList = ['553a70f1c3a596184905fc34','553aae8f57fff4d40608a187'];
 var mapNotes = [];
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

 function openMapGoth(mapNotes){
 	
 	var win = Titanium.UI.createWindow();
	 var mapview = MapModule.createView({
     mapType: MapModule.NORMAL_TYPE,
     region: {latitude: 57.70909962, longitude: 11.97458267, latitudeDelta: 0.1, longitudeDelta: 0.1 },
     });
     
var placeList = ['553a70f1c3a596184905fc34','553aae8f57fff4d40608a187'];
 var mapNotes = [];
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
