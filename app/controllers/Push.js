


function makeNote(){
	
	Cloud.Users.query(function (e) {
    if (e.success) {
        for (var i = 0; i < e.users.length; i++) {
            var user = e.users[i];
            var text = $.pushText.getvalue(); 
Cloud.PushNotifications.notify({
    channel: 'news_alerts',
    payload: text,
    to_ids:user.id
}, function (e) {
    if (e.success) {
        alert('Success');
 	   } else {
 	       alert('Error:\n' +
          	  ((e.error && e.message) || JSON.stringify(e)));
 	   }
	});
         }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
	
	
