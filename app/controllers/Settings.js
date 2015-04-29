var args = arguments[0] || {};

function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 
   
 
function OpenPush() {
	var Settings = Alloy.createController("Puch Notifications").getView();
	PushNotifications.open();
}