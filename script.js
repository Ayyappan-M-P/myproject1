document.getElementById("login-button").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform your authentication logic here (e.g., check credentials against a database)

    // For demonstration purposes, let's assume successful login
    if (email === "mpayyappan@gmail.com" && password === "ayyappan") {
        // Change the photo to an "M"
        document.getElementById("Profile Image").innerHTML = "M";
        alert("Login Successfully");
        
        // Disable the form fields
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("login-button").disabled = true;
    } else {
        alert("Invalid Password or Email. Please try again.");
    }
});
