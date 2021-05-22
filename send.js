// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
  authDomain: "test-form-d3492.firebaseapp.com",
  databaseURL: "https://test-form-d3492.firebaseio.com",
  projectId: "test-form-d3492",
  storageBucket: "test-form-d3492.appspot.com",
  messagingSenderId: "222398070278",
  appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
};


// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  document.querySelector(".contact-form").reset();

  sendEmail(name, email, message);
}

function sendEmail (name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'vereenigingsolar4home@gmail.com',
    Password: "hssqiccevyqrmkdr",
    To: 'vereenigingsolar4home@gmail.com',
    From: 'vereenigingsolar4home@gmail.com',
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

  }).then ((message) => alert("mail is sent"))
}
