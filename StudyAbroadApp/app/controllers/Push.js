


function makeNote(){
	var text = $.pushText.getvalue(); 
Cloud.PushNotifications.notify({
    channel: 'news_alerts',
    payload: text
}, function (e) {
    if (e.success) {
        alert('Success');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}
