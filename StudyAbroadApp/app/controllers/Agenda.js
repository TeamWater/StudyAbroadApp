//Mark and James
var Events = Alloy.Collections.instance("Events");

function openMenu() {
    var index = Alloy.createController("index").getView();
    index.open();
}

var Cloud = require("ti.cloud");
Cloud.debug = true;

<<<<<<< Updated upstream

if(OS_ANDROID) {
	
var plainTemplate = {
    childTemplates: [{
        type: "Ti.UI.Label",
        bindId: "box",
        properties: {
            backgroundColor: "#e4e4e4",
            width: "260dp",
            top: "10dp",
            bottom: "10dp",
            left: "75dp",
            borderRadius: "5dp",
            separatorColor: "#424242"
        },
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
        },
        separatorColor: "#253640",
    },
     {
        type: "Ti.UI.Label",
        bindId: "details",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
=======
var plainTemplate = {
    childTemplates: [{
            type: "Ti.UI.Label",
            bindId: "box",
            properties: {
                backgroundColor: "#e4e4e4",
                width: "260dp",
                top: "10dp",
                bottom: "10dp",
                left: "75dp",
                borderRadius: "5dp",
                separatorColor: "#253640"
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
            },
            separatorColor: "#253640"
        }, {
            type: "Ti.UI.Label",
            bindId: "details",
            properties: {
                color: "gray",
                font: {
                    fontFamily: "Arial",
                    fontSize: "14dp"
                },
                left: "100dp",
                top: "50dp"
>>>>>>> Stashed changes
            },
        }, {
            type: "Ti.UI.Label",
            bindId: "date",
            properties: {
                height: "50dp",
                left: "0dp",
                width: "60dp",
                top: "10dp",
                right: "200dp",
                color: "red",
                borderRadius: "3dp",
                backgroundColor: "#e4e4e4",
                separatorColor: "#253640"
            }
        }, {
            type: "Ti.UI.Button",
            bindId: "mapBtn",
            titleid: "hello",
            properties: {
                height: "50dp",
                left: "0dp",
                width: "60dp",
                top: "10dp",
                right: "200dp",
                color: "red",
                borderRadius: "3dp",
                backgroundColor: "#e4e4e4",
                separatorColor: "#253640"
            }
        },
<<<<<<< Updated upstream
    }, {
        type: "Ti.UI.Label",
        bindId: "date",
        properties: {
            height: "50dp",
            left: "0dp",
            width: "60dp",
            top: "10dp",
            right: "200dp",
            color: "red",
            borderRadius: "3dp",
            backgroundColor: "#e4e4e4",
            separatorColor: "#424242"
        },
    }, ]
=======

    ]
>>>>>>> Stashed changes
};

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
            separatorColor: "transparent"
        },
    }, 
    
    {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            color: "#424242",
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            left: "20dp",
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
            left: "20dp",
            top: "20dp"
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
            color: "red",
        },
    }, 
    ]};
}


var listView = Ti.UI.createListView({
    templates: {
        uncheck: plainTemplate,
    },
    defaultItemTemplate: "uncheck",
});

var section = Ti.UI.createListSection();
listView.sections = [section];

var eventdata = [];
var sectionViews = [];
var eventList = ['55355318442599bbd0eec70c'];

for (var i = 0; i < eventList.length; i++) {
    Cloud.Events.show({
<<<<<<< Updated upstream
        event_id: eventList[i]
    }, function(e) {
        if (e.success) {
            var event = e.events[0];
                    eventdata.push({

                        box: {},
                        title: {
                            text: event.name
                        },
                        details: {
                            text: event.details
                        },
                        date: {
                            text: event.start_time
                        },
                        
                    });
                
                section.setItems(eventdata);
            };
    });
    eventList[i] = Ti.UI.createView();
    eventList[i].add(listView);
};
=======
            event_id: eventList[i]
        }, function(e) {
            if (e.success) {
                var event = e.events[0];
                            
                        eventdata.push({

                            box: {},
                            title: {
                                text: event.name
                            },
                            details: {
                                text: event.details
                            },
                            date: {
                                text: event.start_time
                            },
                            mapBtn: {
                                title: "Map",
                               

                            }
                        });
                        section.setItems(eventdata);    
       		 };
       
		});
		eventList[i] = Ti.UI.createView();
			eventList[i].add(listView);
    };


>>>>>>> Stashed changes

var scrollableView = Ti.UI.createScrollableView({
    views: eventList,
    showPagingControl: true
});

var dateView = Ti.UI.createView();
sectionView = Ti.UI.createView();
sectionView.add(scrollableView);
dateView.add(sectionView);
$.win.add(dateView);
$.win.open();