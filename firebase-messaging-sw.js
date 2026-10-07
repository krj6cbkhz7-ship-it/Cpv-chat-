importScripts(
  "https://www.gstatic.com/firebasejs/12.5.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDOUfBgQbjhOy025v0CZ4CvwnYG6Y2wYBU",
  authDomain: "cpv-private-chat.firebaseapp.com",
  databaseURL: "https://cpv-private-chat-default-rtdb.firebaseio.com/",
  projectId: "cpv-private-chat",
  storageBucket: "cpv-private-chat.firebasestorage.app",
  messagingSenderId: "916226104692",
  appId: "1:916226104692:web:27be19c8a22df397bd6021"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
