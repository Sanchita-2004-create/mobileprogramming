import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqiDDvFIlqaKW1I62MMeU0KHlIjlFRJvM",
  authDomain: "mobile-programming-b7aea.firebaseapp.com",
  projectId: "mobile-programming-b7aea",
  storageBucket: "mobile-programming-b7aea.firebasestorage.app",
  messagingSenderId: "358670115939",
  appId: "1:358670115939:web:fc50e905f3c9d106624456"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function submitForm() {
  const fname   = document.getElementById("fname").value.trim();
  const lname   = document.getElementById("lname").value.trim();
  const email   = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const status  = document.getElementById("status");

  if (!fname || !lname || !email || !subject || !message) {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    return;
  }

  const contactsRef = ref(db, "contacts");
  get(contactsRef).then((snapshot) => {
    let nextId = 1;
    if (snapshot.exists()) {
      nextId = Object.keys(snapshot.val()).length + 1;
    }

    return set(ref(db, "contacts/" + nextId), {
      firstname: fname,
      lastname: lname,
      email: email,
      subject: subject,
      message: message,
      timestamp: new Date().toISOString()
    }).then(() => {
      status.style.color = "green";
      status.textContent = "Message sent successfully! (ID: " + nextId + ")";
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    });

  }).catch((error) => {
    status.style.color = "red";
    status.textContent = "Error: " + error.message;
  });
}

window.submitForm = submitForm;