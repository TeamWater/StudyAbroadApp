//James Ritter
function makeNote() {
	
alert($.soundSwitch.value);
 $.soundSwitch.addEventListener('change',function(e){
   $.soundSwitch.value = true;
   alert($.basicSwitch.value);
});

	var sound = $.soundSwitch.value;
    var text = $.pushText.getValue();
    Cloud.PushNotifications.notify({
        channel: 'all',
        payload: {
            "alert": text,
            "sound": sound,
            "vibrate": false
        },
        to_ids: 'everyone'
    }, function(e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}