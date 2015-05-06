//James
var args = arguments[0] || {};

function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 
   
 
function OpenPush() {
	var Push = Alloy.createController("Push").getView();
	Push.open();
	
}


