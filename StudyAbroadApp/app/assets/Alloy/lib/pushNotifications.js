//Obtain Android Token Device Token
// Require the module
var Cloud = require('ti.cloud');
var deviceToken = null;
 
// Initialize the module
CloudPush.retrieveDeviceToken({
    success: deviceTokenSuccess,
    error: deviceTokenError
});
// Enable push notifications for this device
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
}
function deviceTokenError(e) {
    alert('Failed to register for push notifications! ' + e.error);
}
 
// Process incoming push notifications
CloudPush.addEventListener('callback', function (evt) {
    alert("Notification received: " + evt.payload);
});

var deviceToken = null;
// Check if the device is running iOS 8 or later
if (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
 
 // Wait for user settings to be registered before registering for push notifications
    Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {
 
 // Remove event listener once registered for push notifications
        Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush); 
 
        Ti.Network.registerForPushNotifications({
            success: deviceTokenSuccess,
            error: deviceTokenError,
            callback: receivePush
        });
    });
 
 // Register notification types to use
    Ti.App.iOS.registerUserNotificationSettings({
	    types: [
            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
        ]
    });
}
 
// For iOS 7 and earlier
else {
    Ti.Network.registerForPushNotifications({
 // Specifies which notifications to receive
        types: [
            Ti.Network.NOTIFICATION_TYPE_BADGE,
            Ti.Network.NOTIFICATION_TYPE_ALERT,
            Ti.Network.NOTIFICATION_TYPE_SOUND
        ],
        success: deviceTokenSuccess,
        error: deviceTokenError,
        callback: receivePush
    });
}
// Process incoming push notifications
function receivePush(e) {
    alert('Received push: ' + JSON.stringify(e));
}
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
}
function deviceTokenError(e) {
    alert('Failed to register for push notifications! ' + e.error);
}
//get a device token
var deviceToken;
// Require the Cloud module
var Cloud = require("ti.cloud");
function subscribeToChannel () {
 // Subscribes the device to the 'news_alerts' channel
 // Specify the push type as either 'android' for Android or 'ios' for iOS
    Cloud.PushNotifications.subscribeToken({
        device_token: deviceToken,
        channel: 'news_alerts',
        type: Ti.Platform.name == 'android' ? 'android' : 'ios'
    }, function (e) {
 if (e.success) {
            alert('Subscribed');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
function unsubscribeToChannel () {
 // Unsubscribes the device from the 'test' channel
    Cloud.PushNotifications.unsubscribeToken({
        device_token: deviceToken,
        channel: 'news_alerts',
    }, function (e) {
 if (e.success) {
            alert('Unsubscribed');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
 
var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    layout:'vertical',
    exitOnClose: true
});

var subscribe = Ti.UI.createButton({title:'Subscribe'});
subscribe.addEventListener('click', subscribeToChannel);
win.add(subscribe);

var unsubscribe = Ti.UI.createButton({title:'Unsubscribe'});
unsubscribe.addEventListener('click', unsubscribeToChannel);
win.add(unsubscribe);
 
win.open();

// you need to get the device token
// You also need an ACS user account.
// Require in the Cloud module
var Cloud = require("ti.cloud");
 
function loginUser(){
 // Log in to ACS
    Cloud.Users.login({
        login: 'waldo',
        password: 'password'
    }, function (e) {
 if (e.success) {
            alert('Login successful');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
function subscribeToChannel(){
 // Subscribe the user and device to the 'test' channel
 // Specify the push type as either 'android' for Android or 'ios' for iOS
 // Check if logged in:
    Cloud.PushNotifications.subscribe({
        channel: 'test',
        device_token: deviceToken,
        type: Ti.Platform.name == 'android' ? 'android' : 'ios'
    }, function (e) {
 if (e.success) {
            alert('Subscribed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
function unsubscribeToChannel () {
 // Unsubscribes the user and device from the 'test' channel
    Cloud.PushNotifications.unsubscribe({
        channel: 'test',
        device_token: deviceToken
    }, function (e) {
 if (e.success) {
            alert('Unsubscribed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
 
var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    layout:'vertical',
    exitOnClose: true
});
var subscribe = Ti.UI.createButton({title:'Subscribe'});
subscribe.addEventListener('click', subscribeToChannel);
win.add(subscribe);
var unsubscribe = Ti.UI.createButton({title:'Unsubscribe'});
unsubscribe.addEventListener('click', unsubscribeToChannel);
win.add(unsubscribe);
 
win.open();
loginUser();
