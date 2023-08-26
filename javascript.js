// Get the elements from the DOM
const square1 = document.getElementById("square-1");
const square2 = document.getElementById("square-2");
const square3 = document.getElementById("square-3");
const spotifyLogo = document.getElementById("spotify-logo");
const emailLogo = document.getElementById("email-logo");

// Define an array of photos to fill the wallpaper squares
const photos = [
  "photo-1.jpg",
  "photo-2.jpg",
  "photo-3.jpg",
];

// Define a variable to keep track of the current photo index
let photoIndex = -1;

// Define a function to change the photo of a wallpaper square
function changePhoto(square) {
  
  // Increment the photo index by one
  photoIndex++;

  // If the photo index is equal to the length of the photos array, reset it to zero
  if (photoIndex === photos.length) {
    photoIndex = 0;
  }

  // Get the photo from the photos array using the photo index
  const photo = photos[photoIndex];

  // Set the background image of the square element to the photo
  square.style.backgroundImage = `url(${photo})`;
}

// Define a function to open the Spotify link in a new tab
function openSpotify() {

   // Define the Spotify link
   const spotifyLink = "https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv";

   // Open the Spotify link in a new tab
   window.open(spotifyLink, "_blank");
}

// Define a function to copy the email address to the clipboard
function copyEmail() {

   // Define the email address
   const emailAddress = "vaesagenda@gmail.com";

   // Create a temporary input element
   const input = document.createElement("input");

   // Append the input element to the body element
   document.body.appendChild(input);

   // Set the value of the input element to the email address
   input.value = emailAddress;

   // Select the input element
   input.select();

   // Copy the input value to the clipboard
   document.execCommand("copy");

   // Remove the input element from the body element
   document.body.removeChild(input);

   // Alert the user that the email address has been copied
   alert("El correo electrónico ha sido copiado al portapapeles.");
}

// Add event listeners to detect when the user clicks on each element
square1.addEventListener("click", function() {
  
    // Call the changePhoto function with square1 as an argument
    changePhoto(square1);
});

square2.addEventListener("click", function() {

    // Call the changePhoto function with square2 as an argument
    changePhoto(square2);
});

square3.addEventListener("click", function() {

    // Call the changePhoto function with square3 as an argument
    changePhoto(square3);
});

spotifyLogo.addEventListener("click", function() {

    // Call the openSpotify function 
    openSpotify();
});

emailLogo.addEventListener("click", function() {

    // Call the copyEmail function 
    copyEmail();
});