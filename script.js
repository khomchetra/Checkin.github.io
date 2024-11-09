document.getElementById("checkinForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get values from form fields
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    let isValid = true;

    // Reset error messages and input borders
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    username.style.border = "";
    password.style.border = "";

    // Check if fields are empty
    if (!username.value) {
      document.getElementById("usernameError").innerText = "Username is required.";
      username.style.border = "2px solid red";
      isValid = false;
    }

    if (!password.value) {
      document.getElementById("passwordError").innerText = "Password is required.";
      password.style.border = "2px solid red";
      isValid = false;
    }

    // If all fields are valid, proceed with check-in
    if (isValid) {
      const message = `Welcome, ${username.value}. You have successfully checked in.`;
      const speech = new SpeechSynthesisUtterance(message);
      speech.lang = "en-US";
      window.speechSynthesis.speak(speech);

      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Check-In Successful",
          text: `Welcome, ${username.value}! You have successfully checked in.`,
          confirmButtonText: "OK",
          customClass: {
            popup: "swal-responsive",
          },
        }).then(() => {
          document.getElementById("checkinForm").reset(); // Reset the form after successful check-in
        });
      }, 500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Check-In Failed",
        text: "Please fill in both username and password.",
        confirmButtonText: "Try Again",
        customClass: {
          popup: "swal-responsive",
        },
      });
    }
  });