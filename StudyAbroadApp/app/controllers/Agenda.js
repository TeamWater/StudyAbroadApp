//Mark and James
var Events = Alloy.Collections.instance("Events");

function openMenu() {
    var index = Alloy.createController("index").getView();
    index.open();
}

var Cloud = require("ti.cloud");
Cloud.debug = true;

if(OS_ANDROID) {
	
var plainTemplate = {
    childTemplates: [{
            type: "Ti.UI.Label",
            bindId: "box",
            properties: {
                backgroundColor: "#e9e9e9",
                width: Ti.UI.FILL,
                top: "10dp",
                bottom: "10dp",
                left: "75dp",
                right: "10dp",
                borderRadius: "5dp",
            }
        }, {
            type: "Ti.UI.Label",
            bindId: "title",
            properties: {
            	height: Ti.UI.FILL,
            	width: Ti.UI.FILL,
                color: "#424242",
                font: {
                    fontFamily: "Arial",
                    fontSize: "21dp"
                },
                left: "100dp",
                top: "20dp"
            },
        }, {
            type: "Ti.UI.Label",
            bindId: "details",
            properties: {
            	height: Ti.UI.FILL,
            	width: Ti.UI.FILL,
                color: "#424242",
                font: {
                    fontSize: "14dp"
                },
                left: "100dp",
                top: "50dp",
                bottom: "50dp",
                
            },
        }, {
            type: "Ti.UI.Label",
            bindId: "date",
            properties: {
                height: "50dp",
                left: "6dp",
                width: "60dp",
                top: "5dp",
                right: "200dp",
                color: "#e9e9e9",
       
            }
        },
    ]};
}


if(OS_IOS) {
	
var plainTemplate = {
    childTemplates: [{
        type: "Ti.UI.Label",
        bindId: "box",
        properties: {
            backgroundColor: "white",
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
        },
    }, 
    
    {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            color: "#424242",
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            left: "30dp",
            top: "5dp"
        },
    },
    
     {
        type: "Ti.UI.Label",
        bindId: "details",
        properties: {
            color: "gray",
            height: Ti.UI.SIZE,
            width: Ti.UI.FILL,
            left: "30dp",
            top: "25dp"
        },
    }, 
    
    {
        type: "Ti.UI.Label",
        bindId: "date",
        properties: {
            height: "38dp",
            left: "5dp",
            width: "38dp",
            top: "5dp",
            color: "#e9e9e9",
        },
    }, 
    ]};
}


var listView = Ti.UI.createListView({
    templates: {
        uncheck: plainTemplate,
    },
    defaultItemTemplate: "uncheck",
    separatorColor: "transparent",
});

var section = Ti.UI.createListSection();
listView.sections = [section];

var eventdata = [];
var sectionViews = [];
var eventList = [ '55355318442599bbd0eec70c', '553c3755657a50639e15e826',];

for (var i = 0; i < eventList.length; i++) {
    Cloud.Events.show({
        event_id: eventList[i]
    }, function(e) {
        if (e.success) {
            var event = e.events[0];
            var moment = require('alloy/moment');
			var day = moment(event.start_time, "YYYY-MM-DD:HH:mm:ssZZ");
			var fixedDate = day.format("MM-DD");
           
                    eventdata.push({

                        box: {},
                        title: {
                            text: event.name
                        },
                        details: {
                            text: event.details
                        },
                        date: {
                            text: fixedDate,
                        },
                        
                    });
                
                section.setItems(eventdata);
            };
    });
    eventList[i] = Ti.UI.createView();
    eventList[i].add(listView);
};

var scrollableView = Ti.UI.createScrollableView({
    views: eventList,
    showPagingControl: true,
});

var line = Ti.UI.createView();
var dateView = Ti.UI.createView();
sectionView = Ti.UI.createView();
sectionView.add(scrollableView);
dateView.add(sectionView);
$.win.add(dateView);
$.win.open();