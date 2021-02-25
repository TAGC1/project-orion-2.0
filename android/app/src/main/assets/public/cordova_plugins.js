
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-calendar.Calendar",
          "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
          "pluginId": "cordova-plugin-calendar",
        "clobbers": [
          "Calendar"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
          "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
          "pluginId": "cordova-plugin-firebase-analytics",
        "merges": [
          "cordova.plugins.firebase.analytics"
        ]
        },
      {
          "id": "cordova-plugin-firebase-authentication.FirebaseAuthentication",
          "file": "plugins/cordova-plugin-firebase-authentication/www/FirebaseAuthentication.js",
          "pluginId": "cordova-plugin-firebase-authentication",
        "merges": [
          "cordova.plugins.firebase.auth"
        ]
        },
      {
          "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
          "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
          "pluginId": "cordova-plugin-firebase-messaging",
        "merges": [
          "cordova.plugins.firebase.messaging"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-androidx": "3.0.0",
      "cordova-plugin-calendar": "5.1.5",
      "cordova-plugin-firebase-analytics": "5.0.0",
      "cordova-plugin-firebase-authentication": "3.3.1",
      "cordova-plugin-firebase-messaging": "5.0.0",
      "cordova-support-android-plugin": "1.0.2",
      "cordova-support-google-services": "1.4.1",
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-statusbar": "2.4.3",
      "cordova-plugin-whitelist": "1.3.4"
    };
    // BOTTOM OF METADATA
    });
    