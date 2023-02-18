
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  doc,
  collection,
  addDoc,
  getFirestore,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6FDF1ej0q5r6plUNP5clgWY3d_u6j5v8",
    authDomain: "database-72236.firebaseapp.com",
    projectId: "database-72236",
    storageBucket: "database-72236.appspot.com",
    messagingSenderId: "795572450000",
    appId: "1:795572450000:web:1e01e08b055b0c40fe64d5",
    measurementId: "G-W5VTNW033Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getFirestore(app);

try {
  const docRef = await addDoc(collection(database, "Souvenir"), {

  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const update = async () => {
 
  await updateDoc(doc(database, "Souvenir", "0Sxvy79rMsaYYCimCSCb"), {
    name: "Diamond Ring 1",
    price: 125,
  });
};

update();
