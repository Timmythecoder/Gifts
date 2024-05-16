function redeemCode() {
    var inputCode = document.getElementById("inputCode").value;
    // You can implement code verification logic here
    if (inputCode === "THSU8329HH") {
      document.getElementById("message").innerHTML = "Code redeemed successfully! (FINALCODEABI9E9)";
    } else {
      document.getElementById("message").innerHTML = "Invalid code!";
    }
  }
  
  function sendToDiscord() {
    var finalCode = document.getElementById("inputFinalCode").value;
    // You can implement code verification logic here
    // Send finalCode to your Discord server using a webhook
    var url = "https://discord.com/api/webhooks/1237357696785584158/M5xlovvX48M7rfQRUKhaETiTjzoimDdTGPn0pKy6XA_hRpQvDWQQ8GS7AhdQhe7x-R7L";
    var data = {
      content: "Final Code: " + finalCode
    };
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("message").innerHTML = "Message sent to Discord Database. (my server)";
      } else {
        document.getElementById("message").innerHTML = "Error sending message to Discord!";
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML = "Error sending message to Discord!";
    });
  }
  