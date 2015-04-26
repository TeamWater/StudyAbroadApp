// Mark and Hues
var args = arguments[0] || {};

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
            top: "12dp"
        },
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
            top: "32dp",
            bottom: "10dp"
        }
    }, 
    
    {
    	type: "Ti.UI.Switch",
    	bindId: "check",
    	properties: {
    		style : "Ti.UI.Android.SWITCH_STYLE_CHECKBOX",
    		left: "-50dp",
    		height: "30dp",
    		width: "30dp",
    	}
    	
    },
    ]
};
var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:false,
});

var listView = Ti.UI.createListView({
    templates: {
        uncheck: plainTemplate
    },
    defaultItemTemplate: "uncheck"
});
var section = Ti.UI.createListSection();
 	listView.sections = [ section ];

dateView = Ti.UI.createListView();

var data = [];
var checkList = [];

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
           }
           
     section.setItems(data);
           });
           
           checkList[i] = Ti.UI.createView();        
           checkList[i].add(listView);
}
var scrollableView = Ti.UI.createScrollableView({
  views:checkList,
  showPagingControl:true
});            		
 sectionView = Ti.UI.createView();
 sectionView.add(scrollView);
 $.dateView.add(sectionView);          
$.dateView.add(listView);
$.win.open();