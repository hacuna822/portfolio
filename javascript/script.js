const image = document.getElementById('main-image');

// Transition blue line when hovering
image.addEventListener('mouseover', () => {
    image.style.outline = '5px solid blue';
});

// Removes the outline for when user is no longer hovering
image.addEventListener('mouseout', () => {
    image.style.outline = 'none';
});




//Blue outline when user hovers over tutoring image

const imageTutoring = document.getElementById('tutoring-image');

imageTutoring.addEventListener('mouseover', () => {
    imageTutoring.style.outline = '5px solid white';
});

imageTutoring.addEventListener('mouseout', () => {
    imageTutoring.style.outline = 'none';
});

//Same for the basketball image
const imageBasketball = document.getElementById('basketball-image');
imageBasketball.addEventListener('mouseover',() => {
    imageBasketball.style.outline = '5px solid blue';
});

imageBasketball.addEventListener('mouseout', () => {
    imageBasketball.style.outline = 'none';
});





//Java Script for the form 

// Get the form element
const contactForm = document.getElementById("contactForm");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    //Getting form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    
    //Test to make sure all fields were filled out
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    
    // Validate email format
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTest.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Prepare the data as JSON
    const formData = {
        name: name,
        email: email,
        message: message
    };

    
    // Will use fetch to send data to the backend
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify(formData)  // Convert form data to JSON
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent, I will reach out to you as soon as possible!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
});


