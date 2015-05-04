
function openMenu() {
	
    var index = Alloy.createController("index").getView();
	index.open();
   }; 
  

function openPhoneToCallEmergency() {
	
	var the_number = '0123456789';
	Ti.Platform.openURL('tel:'+the_number);
	
};  


