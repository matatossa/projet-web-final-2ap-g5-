document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Send the form data to the server (you can replace this with your own logic)
    sendFormData(name, email, message);
    
    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  
  function sendFormData(name, email, message) {
    // You can implement your own logic here to send the form data to the server
    // For example, you can use AJAX or fetch API to make a POST request to a server-side script
    // In this example, we'll just log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  }
  