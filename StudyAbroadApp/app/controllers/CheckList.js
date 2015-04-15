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
            //height: "Titanium.UI.SIZE",
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
            top: "12dp"
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
            top: "32dp",
            bottom: "10dp"
        }
    }, {
    	type: "Ti.UI.Label",
    	bindId: "date",
    	left: "-10dp",
    	width: "30dp",
    	top: "20dp",
    	right: "200dp", 
    	color: "red",
    	backgroundColor: "green",
    	separatorColor: "#253640"
    	
    },
    
    {
    	type: "Ti.UI.Switch",
    	style : "Ti.UI.Android.SWITCH_STYLE_CHECKBOX",
    	bindId: "check",
    	left: "-50dp",
    	height: "30dp",
    	width: "30dp",
    	
    	
    },
    ]
};
var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
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
var checkList = ['552e99467eead2057e3ebe3e', '552e992d7eead2057e3ebd3d', '552e9912ac4547febd410f9b', '552e98f3ac4547febd410ad7', '552e98cd08c91ee918709a77', '552e989fac4547fec53df0fc',
				'552e983aac4547fec53de8df', '552d9ef954add893dd371ef0', '552d9ea17eead2057e384c45'];

for (var i = 0; i < checkList.length; i++) {
Cloud.Posts.show({post_id: checkList[i] },function (e) {
	if (e.success) {
        var post = e.posts[0];
        	data.push({
        		
        		//date: {text: post.start_time},
            	box : {},
            	title: { text: post.title},
            	details: { text: post.content},
            	check: {}
            
            });
           }
           
     section.setItems(data);
           });
           checkList[i] = Ti.UI.createView();        
<<<<<<< Updated upstream
           checkList[i].add(listView);
           		}
=======
<<<<<<< HEAD
     checkList[i].add(listView);
           		}

var scrollableView = Ti.UI.createScrollableView({
  views:checkList,
  showPagingControl:true
});          
  
 sectionView = Ti.UI.createView();
 sectionView.add(scrollableView);
$.dateView.add(sectionView);
$.win.open();
 
          
=======
           checkList[i].add(listView);
           		}
>>>>>>> Stashed changes
           		
 sectionView = Ti.UI.createView();
 sectionView.add(scrollView);
 $.dateView.add(sectionView);          
$.dateView.add(listView);
<<<<<<< Updated upstream
$.win.open();
=======
$.win.open();
>>>>>>> origin/master
>>>>>>> Stashed changes
