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
        var eventLabel = Ti.UI.createListView('Success:\n' +
            'Name: ' + event.name + '\n' +
            'Details: ' + event.details + '\n');}
    {
    $.EventList.add(eventLabel);
    }
});


Cloud.sendRequest({
	url : "events/count.json",
    method : "GET"
},
(function (e) 
{ for (var i = 0; i < e.meta.count; i++) {
	 var event = e.events[i]; 
	 var eventLabel = Ti.UI.createLabel({ text: "Project: " + event.name, top:20 });
	$.EventList.add(eventLabel);
}
}));

