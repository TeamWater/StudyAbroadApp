// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//

Alloy.Globals.Map = require('ti.map');

Alloy.Globals.FB = require('facebook');


 	
Ti.Geolocation.purpose = 'Track Users Phone for map display';
Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH ;
Ti.Geolocation.distanceFilter = 10;
Ti.Geolocation.ACTIVITYTYPE_FITNESS;
Ti.Geolocation.hasCompass = true;
Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
 
 Ti.Geolocation.addEventListener('location', function(e) {
  	Alloy.Globals.lat = e.coords.latitude;
  	Alloy.Globals.lng = e.coords.longitude;
  });
      