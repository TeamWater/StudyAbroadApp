function doClick(e) {
    $.menu.open();
   } 
 var Cloud = require('ti.cloud');
 Cloud.debug = true;
 
Cloud.Events.show({
    event_id: '55130f8eac4547febdac2a75'
}, function (e) {
    if (e.success) {
        var event = e.events[0];
        alert('Success:\n' +
            'Name: ' + event.name + '\n' +
            'Details: ' + event.details + '\n');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});


