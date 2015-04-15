var Events = Alloy.Collections.instance("Events");

function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 

// function StartEventModel() {
	// var event = Alloy.createModel('Events');
// 	
	// event.createEvent($.AgendaTable.show);
// }
// $.initialize = function() {
	// loadEvents();
// };
// 
// function loadEvents() {
	// var row = [];
	// Events.fetch({
		// success: function(model, response) {
			// Events.each(function(event){
				// var eventRow = Alloy.createController("EventRow", event);
			// });
			// $.AgendaTable.data = row;
		// },
		// error : function(error) {
			// alert('Error loading comments ' + e.message);
			// Ti.API.error(JSON.stringify(error));
		// }
		// });
	// }

var Cloud = require("ti.cloud");
Cloud.debug = true;

var plainTemplate = {
    childTemplates: [ {
        type: "Ti.UI.Label",
        bindId: "box",
        properties: {
            backgroundColor: "#e4e4e4",
            width: "260dp",
            height: "100dp",
            top: "20dp",
            left: "75dp",
            borderRadius: "5dp"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            color: "#565656",
            font: {
                fontFamily: "Arial",
                fontSize: "21dp"
            },
            left: "100dp",
            top: "20dp"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "details",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "12dp"
            },
            left: "100dp",
            top: "50dp"
        }
    } ]
};

var listView = Ti.UI.createListView({
    templates: {
        uncheck: plainTemplate
    },
    defaultItemTemplate: "uncheck"
});
var section = Ti.UI.createListSection();
 	listView.sections = [ section ];

dateView = Ti.UI.createView();

var data = [];
var eventList = [ "55130f8eac4547febdac2a75", "551c1763ac4547fec5d4025f" ];

Cloud.Events.show({
    event_id: eventList[0]
	}, function(e) {
		for (var i = 0; i < eventList.length; i++) {
        var event = e.event[0];
        	data.push({
            	box : {},
            	title: { text: event.name},
            	details: { text: event.details}
            
            });
            
             $.section.setItems(data);
		}
    $.dateView.add(listView);
});
$.win.add(dateView);
$.win.open();
