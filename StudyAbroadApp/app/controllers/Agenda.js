function doClick(e) {
    $.menu.open();
   } 
 var Cloud = require('ti.cloud');
 Cloud.debug = true;
 
 var plainTemplate = {
    childTemplates: [
        {                            // Title
            type: 'Ti.UI.Label',     // Use a label for the title
            bindId: 'box',         // Maps to a custom title property of the item data
            properties: {            // Sets the label properties
                backgroundColor: "#e4e4e4", 
				width: "260dp", 
				height: "100dp",
				top:"20dp",
				bottom: "5dp",
				left: "75dp",
				borderRadius: "5dp",
          
            },
        },
        
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the title
            bindId: 'title',      	 // Maps to a custom subtitle property of the item data
            properties: {            // Sets the label properties
                color: '#565656',
                font: { fontFamily:'Arial', fontSize: '21dp' },
                left: '100dp', 
                top: "20dp",
            }
        },
        
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'details',      // Maps to a custom subtitle property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '12dp' },
                left: '100dp',
                top: "50dp",
            }
        }
    ],
};
 
 //Array of event Id's 
 var eventList = ['55130f8eac4547febdac2a75'];

 	for(var i = 0; i < eventList.length; i++){
		Cloud.Events.show({
    		event_id: eventList[i]
				}, function (e) {
  					  if (e.success) {
    						var event = e.events[0];
							var data = [];
							for (var i = 0; i < eventList.length; i++) {
							    data.push({
							   		
							   		box: { },
							   		title: { text : event.name},	
							    	details: {text : event.details}
							    	
							    	});
							}
							 var win = Ti.UI.createWindow(
							 	{	
							 		backgroundColor: "#253640"
							 		});
							 		
							 var line = Ti.UI.createView(
							 	{
							 		backgroundColor:"white", 
							 		height: "100%", 
							 		left: "60dp", 
							 		width: "2dp",
							 		top: "20dp"
							 		});
							 var date = Ti.UI.createView(
							 	{
							 		backgroundColor:"white", 
							 		height: "60dp", 
							 		left: "10dp", 
							 		width: "60dp",
							 		top: "20dp",
							 		color: "black"
							 		});
							var dateView = Ti.UI.createView(
								{
									backgroundColor: "red",
									right: "10",
									left: "10",
									top: "10",
									bottom: "10",
									
									});
								var listView = Ti.UI.createListView({ templates: { 'uncheck': plainTemplate }, defaultItemTemplate: 'uncheck'});
									var section = Ti.UI.createListSection();
									
							section.setItems(data);
							listView.sections = [section];
							
							win.add(dateView);
								dateView.add(date);
								dateView.add(line);
								dateView.add(listView);
								
									
							win.add(listView);
							win.add(line);
							win.open();

					}
				}	
			);
		};	
		



