// _neu_generated_code__dont_modify_directly_
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

const open = indexedDB.open('neutrinos_firebase_db', 1);

const config = {};
open.onupgradeneeded = function () {
    const db = open.result;
    db.createObjectStore('neutrinos_firebase_db_store');
};

open.onsuccess = function () {
    const db = open.result;
    const tx = db.transaction('neutrinos_firebase_db_store', 'readwrite');
    const store = tx.objectStore('neutrinos_firebase_db_store');
    config.messagingSenderId = store.get('firebaseSenderId');

    const request = store.get('firebaseSenderId');

    request.onsuccess = function () {
        firebase.initializeApp({
            messagingSenderId: request.result
        });

        const messaging = firebase.messaging();

        messaging.setBackgroundMessageHandler((payload) => {
            if (payload && payload.notification) {
                const notificationObj = payload.notification;
                const options = {
                    body: notificationObj.body,
                    icon: notificationObj.icon
                };
                return self.registration.showNotification(notificationObj.title, options);
            }
            return self.registration.showNotification('Empty', {});
        });
        tx.oncomplete = function () {
            db.close();
        };
    };
};
