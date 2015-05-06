//Ussarian, Christian, Mark

var Events = Alloy.Collections.instance("Events");

function openMenu() {
    var index = Alloy.createController("index").getView();
    index.open();
}

var Cloud = require("ti.cloud");
Cloud.debug = true;

if (OS_ANDROID) {

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
            bindId: "arrow",
            properties: {
                backgroundColor: "#e9e9e9",
                width: "10dp",
                height: "10dp",
                transform: Ti.UI.create2DMatrix({
                    rotate: 45
                }),
                top: "28dp",
                left: "70dp",
            }
        }, {

            type: "Ti.UI.Label",
            bindId: "dot",
            properties: {
                backgroundColor: "#1da587",
                width: "10dp",
                height: "10dp",
                top: "28dp",
                left: "52dp",
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
                left: "120dp",
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
        }, ]
    };


    var listView = Ti.UI.createListView({
        templates: {
            uncheck: plainTemplate,
        },
        defaultItemTemplate: "uncheck",
        separatorColor: "transparent",
    });

    var section = Ti.UI.createListSection();
    listView.sections = [section];

    var postdata = [];
    var sectionViews = [];

Cloud.Posts.query({
	where: {
        tags_array: 'During',}
               // order: "create_date",
            }, function(e) {
        for (var i = 0; i < e.posts.length; i++) {
                    var post = e.posts[i];
                    var moment = require('alloy/moment');
                    var day = moment(post.created_at, "YYYY-MM-DD:HH:mm:ssZZ");
                    var fixedDate = day.format("MM-DD");

                    postdata.push({

                        box: {},
                        arrow: {},

                        title: {
                            text: post.title
                        },
                        details: {
                            text: post.content
                        },
                        date: {
                            text: fixedDate,
                        },

                    });

                    section.setItems(postdata);
                }
               }
            ); 

    var line = Ti.UI.createView();
        var dateView = Ti.UI.createView(); 
        sectionView = Ti.UI.createView(); 
        sectionView.add(listView); 
        dateView.add(sectionView); 
        $.win.add(dateView); $.win.open();
    }


    if (OS_IOS) { 	
        var tableData = [];
            Cloud.Posts.query({
                where: {
        tags_array: 'During',}
               // order: "create_date",
            }, function(e) {
                if (e.success) {
        for (var i = 0; i < e.posts.length; i++) {
                    var post = e.posts[i];
                    var moment = require('alloy/moment');
                    var day = moment(post.created_at, "YYYY-MM-DD:HH:mm:ssZZ");
                    var fixedDate = day.format("MM-DD");
            
                    row = Ti.UI.createTableViewRow({
                        className: 'forumEvent',
                        selectedBackgroundColor: 'white',
                        rowIndex: i, 
                        
                    });

                    var box = Ti.UI.createLabel({
                        backgroundColor: "#e9e9e9",
                        width: Ti.UI.FILL,
                        top: 10,
                        
                        left: 10,
                        right: 10,
                        borderRadius: 5,

                    });
                    row.add(box);

                    var title = Ti.UI.createLabel({
                        text:post.title,
                        width: Ti.UI.FILL,
                        color: "#424242",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 21
                        },
                        left: 70,
                        top: 3,

                    });
                    row.add(title);

                    var details = Ti.UI.createLabel({
                        text: post.content,
                        
                        width: Ti.UI.FILL,
                        color: "#424242",
                        font: {
                            fontSize: 14
                        },
                        left: 70,
                        top:30,
                        horizontalWrap:true,

                    });
                    row.add(details);

                    var date = Ti.UI.createLabel({
                        text: fixedDate,
                        height: 50,
                        left: 6,
                        width: 60,
                        top: 5,
                        right: 200,
                        color: "424242",

                    });
                    row.add(date);
                    
                  tableData.push(row);     
                }
                
                 var tableView = Ti.UI.createTableView({
            backgroundColor: '#e9e9e9',
            data: tableData,
            headerTitle:"Agenda",
        });

        $.win.add(tableView);
        $.win.open();
            };
           }
        );
       
    }