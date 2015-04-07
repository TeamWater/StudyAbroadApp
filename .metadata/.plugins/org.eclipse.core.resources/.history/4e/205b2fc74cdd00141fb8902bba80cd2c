function doClick(e) {
    $.menu.open();
   } 
 var Cloud = require('ti.cloud');
 Cloud.debug = true;
 
 var plainTemplate = {
    childTemplates: [
        {                            // Title
            type: 'Ti.UI.Label',     // Use a label for the title
            bindId: 'title',         // Maps to a custom title property of the item data
            properties: {            // Sets the label properties
                backgroundColor: "#e4e4e4", 
				width: "320dp", 
				height: "100dp",
				top:"5dp",
				bottom: "5dp",
				color: "#565656", 
				borderRadius: "5dp",
                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
          
            },
        },
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'subtitle',      // Maps to a custom subtitle property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '14dp' },
                left: '60dp', top: 45,
            }
        }
    ],
};
 
 //Array of event Id's 
 var eventList= ['55130f8eac4547febdac2a75','55130f8eac4547febdac2a75','55130f8eac4547febdac2a75'];

 	for(var i = 0; i < eventList.length; i++){
		Cloud.Events.show({
    		event_id: eventList[i]
				}, function (e) {
  					  if (e.success) {
    						var event = e.events[0];
							var data = [];
							for (var i = 0; i < eventList.length; i++) {
							    data.push({
							   		
							   		title: { text : event.name},
							    	subtitle: { text : event.id},	
							    	
							    	});
							}
							 var win = Ti.UI.createWindow({	});
							var section = Ti.UI.createListSection();
							 var listView = Ti.UI.createListView({ templates: { 'uncheck': plainTemplate }, defaultItemTemplate: 'uncheck'});
							section.setItems(data);
							listView.sections = [section];
							win.add(listView);
							win.open();

					}
				}	
			);
		};	
		



