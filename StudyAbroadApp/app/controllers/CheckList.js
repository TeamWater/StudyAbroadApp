// Mark and Hues
var args = arguments[0] || {};

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
                left: "10dp",
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
                left: "65dp",
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
                left: "65dp",
                top: "50dp",
                bottom: "50dp",
                
            },
        },  
        
        {
    	type: "Ti.UI.Switch",
    	bindId: "check",
    	properties: {
    		borderColor: "#e9e9e9",
    		style : Titanium.UI.Android.SWITCH_STYLE_CHECKBOX ,
            left: "25dp",
            top: "45dp",
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
            top: "25dp",
        },
    }, 
    
     {
    	type: "Ti.UI.Switch",
    	bindId: "check",
    	properties: {
            left: "5dp",
            top: "5dp",
    	}
    	
    },
    ]};
} 

var listView = Ti.UI.createListView({
    templates: {
        uncheck: plainTemplate
    },
    separatorColor: "transparent",
    defaultItemTemplate: "uncheck"
});
var section = Ti.UI.createListSection();
 	listView.sections = [ section ];

dateView = Ti.UI.createListView();

var data = [];
var checkList = ['5537ec78657a500a270e8e99'];

for (var i = 0; i < checkList.length; i++) {
Cloud.Posts.show({post_id: checkList[i] },function (e) {
	if (e.success) {
        var post = e.posts[0];
        	data.push({
        	
            	box : {},
            	title: { text: post.title},
            	details: { text: post.content},
            	check: {}
            
            });       
                section.setItems(data);
            };
  	});
    checkList[i] = Ti.UI.createView();
    checkList[i].add(listView);
};

var scrollableView = Ti.UI.createScrollableView({
    views: checkList,
    showPagingControl: true,
    horizontalWrap: false
});

var dateView = Ti.UI.createView();
sectionView = Ti.UI.createView();
sectionView.add(scrollableView);
dateView.add(sectionView);
$.win.add(dateView);
$.win.open();