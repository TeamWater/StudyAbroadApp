//MArk and James
var Events = Alloy.Collections.instance("Events");

function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 

var Cloud = require("ti.cloud");
Cloud.debug = true;

var plainTemplate = {
    childTemplates: [ {
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
        }
    }, {
    	type: "Ti.UI.Label",
    	bindId: "date",
    	properties:{
    	height:"50dp",
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
    {
    	type: "Ti.UI.Button",
    	bindId: "mapBtn",
    	properties:{
    	
    	left: "0dp",
    	width: "60dp",
    	top: "77dp",
    	//right: "200dp", 
    	color: "black",
    	backgroundColor: "#e4e4e4",
    	separatorColor: "#253640",
    	borderRadius: "3dp",
    	font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
    	}
    	
    },
    
     ]
};

var listView = Ti.UI.createListView({
    templates: {
        uncheck: plainTemplate
    },
    defaultItemTemplate: "uncheck"
});
var section = Ti.UI.createListSection();
 	listView.sections = [ section ];

var data = [];
var sectionViews = [];
var eventList = [ '55355318442599bbd0eec70c' ];

for (var i = 0; i < eventList.length; i++) {
Cloud.Events.show({event_id: eventList[i] },function (e) {
	if (e.success) {
        var event = e.events[0];
        	data.push({
        	
            	box : {},
            	title: { text: event.name},
            	details: { text: event.details},
            	date: {text:event.start_time},
            	mapBtn:{title:"Map"},
            
            });
            
           }
           
     section.setItems(data);
           });
           eventList[i] = Ti.UI.createView();        
           eventList[i].add(listView);
           		}

var scrollableView = Ti.UI.createScrollableView({
  views:eventList,
  showPagingControl:true
});          
  
 sectionView = Ti.UI.createView();
 sectionView.add(scrollableView);
 $.dateView.add(sectionView);
$.win.open();
