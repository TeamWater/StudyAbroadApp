//James Ritter
function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 


function makeNote() {
	
 $.soundSwitch.addEventListener('change',function(e){
 	if($.soundSwitch.value = true){
   $.soundSwitch.value = false;
  } else{
  	$.soundSwitch.value = true;
  }
});

 $.vibSwitch.addEventListener('change',function(e){
 	if($.vibSwitch.value = true){
   $.vibSwitch.value = false;
  } else{
  	$.vibSwitch.value = true;
  }
});

	var sound = $.soundSwitch.value;
	var vib = $.vibSwitch.value;
    var text = String($.pushText.getValue());
    if(text == ""){
    	alert('Please add to text field');
    } else {
    Cloud.PushNotifications.notify({
        channel: 'all',
        payload: {
            "alert": text,
            "sound": sound,
            "vibrate": vib,
        },
        to_ids: 'everyone'
    }, function(e) {
        if (e.success) {
            alert('Success');
            openMenu();
            $.pushText.value = null;
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
  }
}