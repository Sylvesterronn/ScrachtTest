// randomImage.js

// Function to pick a random image and set it to the <img> in the div#scratch
function getRandomImage() {
    
    // Array of available images
    const images = ["winner.jpg", "loser.jpg"];
    
    // Choose a random image from the array
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    chosenImage.crossorigin = "anonymous";    

    // Get the <img> element inside the #scratch div
    const imgElement = document.querySelector("#scratch img");
    imgElement.crossorigin = "anonymous";

    // Update the src of the image element to the chosen image
    imgElement.src = './images/' + chosenImage;

    console.log("Random Image Selected:", chosenImage);
}

// Call the function to set a random image when the page loads
window.onload = getRandomImage;

