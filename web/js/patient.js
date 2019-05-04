
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBje_8i495uHrmJE3e95mLEsvh9hdgFF_Y",
            authDomain: "cancerapp-79383.firebaseapp.com",
            databaseURL: "https://cancerapp-79383.firebaseio.com",
            projectId: "cancerapp-79383",
            storageBucket: "cancerapp-79383.appspot.com",
            messagingSenderId: "644286998392"
        };
        firebase.initializeApp(config);
        const db = firebase.firestore();
        db.settings(
            { 
                timestampsInSnapshots: true
            }
        ); 


