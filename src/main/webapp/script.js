function showZone(zone) {
    const zones = document.querySelectorAll('.hidden-zone');
    zones.forEach(sec => sec.style.display = 'none');
    document.getElementById(zone).style.display = 'block';
  }

 document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#pro-chronicles .image-realm img");
    let currentIndex = 0;

    // Function to change images
    function changeImage() {
        // Remove the 'active' class from all images
        images.forEach(image => {
            image.style.opacity = "0"; // Hide all images
        });

        // Show the current image
        images[currentIndex].style.opacity = "1";

        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last
    }

  
    setInterval(changeImage, 2000);
});



  
  // project 
  
  let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    })

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1])
    })
    
    
         document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inputbox");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting the default way

        // Retrieve form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("mail").value;
        const message = document.getElementById("msg").value;

        // Simple validation
        if (name && email && message) {
          
            responseMessage.textContent = "Thank you for reaching out, " + name + ".";
            responseMessage.style.color = "green";

            // Clear the form
            form.reset();
        } else {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "red";
        }
    });
});

        
 