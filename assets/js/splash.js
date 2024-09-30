let shuffledFiles = [];
let currentFileIndex = 0;
let fileInterval;

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function typeWriter(text, element, delay) {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else {
      // Fade out the welcome message after typing is complete
      setTimeout(() => {
        element.classList.add("fade-out"); // Add fade-out class
        // Show the main content after fade-out
        setTimeout(() => {
          document.getElementById("welcome-message").classList.add("hidden");
          window.location.href = "/home";
        }, 1000); // Wait for fade-out to finish
      }, 1000); // Optional delay before fading out
    }
  }
  type();
}

// Function to update the displayed file name every 50 milliseconds
function showRandomFiles() {
  const loadingFile = document.getElementById("loading-file");
  
  fileInterval = setInterval(() => {
    // Update the displayed file name
    loadingFile.innerText = `Loaded ${shuffledFiles[currentFileIndex]}`;
    
    // Move to the next file index
    currentFileIndex++;
    
    // If we reach the end of the array, reset the index
    if (currentFileIndex >= shuffledFiles.length) {
      currentFileIndex = 0;
    }
  }, 50); // Update file name every 50ms
}

// Fetch the file names from the JSON file
fetch('/assets/data/files.json')
  .then(response => response.json())
  .then(data => {
    shuffledFiles = shuffleArray(data.files); // Shuffle the files from the JSON

    // Start showing file names as soon as the loading starts
    showRandomFiles(); 

    // Wait for the loading bar animation to finish, then reveal the main content
    setTimeout(() => {
      // Fade out the splash screen
      document.getElementById("splash").style.opacity = 0;
      clearInterval(fileInterval); // Stop showing files when loading ends

      setTimeout(() => {
        // After the fade-out animation
        document.getElementById("splash").classList.add("hidden");

        // Show the welcome message
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.classList.remove("hidden");

        // Start typing effect for the welcome text
        const welcomeTextElement = document.getElementById("welcome-text");
        const welcomeText = "Welcome, Stranger.";
        typeWriter(welcomeText, welcomeTextElement, 200); // Adjust speed here

        // Re-enable scrolling by removing the overflow: hidden from body
        document.body.style.overflow = "auto";
      }, 1000); // wait for the splash screen fade-out effect
    }, 20000); // duration of the loading bar animation
  })
  .catch(error => {
    console.error('Error loading file names:', error);
  });
