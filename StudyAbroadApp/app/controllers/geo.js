var args = arguments[0] || {};

exports.getLatLong = function(callback){
    Ti.Geolocation.getCurrentPosition(function(e) {
        if (e.success) {
            Ti.API.info("Cords latitude" + e.coords.latitude);
            Ti.API.info("Cords longitude" + e.coords.longitude);
            callback(e.coords.latitude, e.coords.longitude);
        } else {
            alert("Unable to fetch cords");
        }
    });
};