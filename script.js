document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const formData = new FormData(contactForm); // Collect form data

      const emailOptions = {
          Host: "smtp.elasticemail.com",
          Username: "highlymelanated.io@gmail.com",
          Password: " 5C1EF1309BCF6EDE2A75BEFD1CE110E8CF2D",
          To: "highlymelanated.io@gmail.com",
          From: formData.get("Email"), // Get the email from the form
          Subject: formData.get("Subject"),
          Body: formData.get("Message")
      };

      Email.send(emailOptions).then(function(message) {
          alert("Email sent successfully!"); // Display a success message
          contactForm.reset(); // Reset the form
      }).catch(function(error) {
          alert("Email sending failed."); // Display an error message
      });
  });
});
