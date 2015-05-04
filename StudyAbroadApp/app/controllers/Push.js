
APSServiceManager.getInstance().enable(getApplicationContext(), 'APS_APP_KEY');
Map<String, Object> data = new HashMap<String, Object>();
data.put("type", "android");
data.put("channel", "friend_request");
data.put("device_token", "4e7a297ccc173bec93a2b81");

try {
    APSPushNotifications.subscribeToken(data, new APSResponseHandler() {

        @Override
        public void onResponse(final APSResponse e) {

            if (e.getSuccess()) {
                Log.i("APSPushNotifications", "Subscribed!");
            } else {
                Log.e("APSPushNotifications", "ERROR: " + e.getErrorMessage());
            }
        }

        @Override
        public void onException(final APSCloudException e) {
            Log.e("APSPushNotifications", "Exception throw: " + e.toString());
        }
    });
} catch (APSCloudException e) {
    Log.e("APSPushNotifications", "Exception thrown: " + e.toString());
}

if(OS_ANDROID){
	
}

if(OS_IOS){
var Cloud = require('ti.cloud');
var trace = Ti.API.info;
var user_device_token = Ti.App.Properties.getString("device_token", null);

 var win = Titanium.UI.createWindow({
    title: 'TestPush iOS App',
    backgroundColor: '#fff'
});
win.open();

function init() {
    buildUI();
}
setTimeout(init, 500);

function buildUI() {
        var register_local_push = Ti.UI.createButton({
            width: 200,
            height: 30,
            top: 30,
            title: "REGISTER LOCAL PUSH"
        });
        
  
        var register_server_push_btn = Ti.UI.createButton({
            width: 200,
            height: 30,
            top: 150,
            title: "REGISTER SERVER PUSH"
        });
        win.add(register_server_push_btn);
        register_server_push_btn.addEventListener('click', subscribeToServerPush);
    } //REGISTER USER ON CLOUD


function getDeviceToken() {
        trace("REGISTERING LOCAL PUSH");
        Titanium.Network.registerForPushNotifications({
            types: [
                Titanium.Network.NOTIFICATION_TYPE_BADGE,
                Titanium.Network.NOTIFICATION_TYPE_ALERT,
                Titanium.Network.NOTIFICATION_TYPE_SOUND
            ],
            success: function(e) {
                user_device_token = e.deviceToken;
                Ti.App.Properties.setString("device_token", user_device_token);
                alert("Device token received " + user_device_token);
            },
            error: function(e) {
                alert("Error during registration: " + e.error);
            },
            callback: function(e) {
                // called when a push notification is received.
                alert("Received a push notification\n\nPayload:\n\n" + JSON.stringify(e.data));
            }
        });

    }
    //REGISTER SERVER PUSH
function subscribeToServerPush() {
    Cloud.PushNotifications.subscribe({
        channel: 'push_test',
        type: 'ios',
        device_token: user_device_token
    }, function(e) {
        if (e.success) {
            alert('Success' + ((e.error && e.message) || JSON.stringify(e)));
        } else {
            alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
}