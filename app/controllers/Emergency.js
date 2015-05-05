
function openMenu() {
	
    var index = Alloy.createController("index").getView();
	index.open();
   }; 
  
//Anthony and Mayra on 5/2/15
function openPoliceEmergency() {
	
	var the_number = '112';
	Ti.Platform.openURL('tel:'+the_number);
	
};  

function openAmbulanceEmergency() {
	
	var the_number = '111';
	Ti.Platform.openURL('tel:'+the_number);
	
}; 
function openFireEmergency() {
	
	var the_number = '110';
	Ti.Platform.openURL('tel:'+the_number);
	
}; 

