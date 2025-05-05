// script.js

// Form Validation for Contact Page
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let errorMessage = document.getElementById('error-message');

  // Validation checks
  if (!name || !email || !message) {
    errorMessage.innerText = "All fields are required!";
    errorMessage.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    errorMessage.innerText = "Please enter a valid email address!";
    errorMessage.style.color = "red";
    return;
  }

  errorMessage.innerText = "Form submitted successfully!";
  errorMessage.style.color = "green";
  // Optionally, you can handle the form submission here (e.g., send to a server)
});

// Email validation function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Comments Section for Blog Posts
document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('comment-name').value;
  let comment = document.getElementById('comment-text').value;
  let errorMessage = document.getElementById('comment-error-message');
  let commentsList = document.getElementById('comments-list');

  if (!name || !comment) {
    errorMessage.innerText = "Name and comment are required!";
    errorMessage.style.color = "red";
    return;
  }

  // Create a new comment element
  let newComment = document.createElement('div');
  newComment.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;
  commentsList.appendChild(newComment);

  // Clear the form
  document.getElementById('comment-name').value = '';
  document.getElementById('comment-text').value = '';
  errorMessage.innerText = "";
});


