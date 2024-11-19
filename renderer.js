// Wait until the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    // Get the clock element by its ID
    const clockElement = document.getElementById('clock');
  
    // Function to update the clock
    function updateClock() {
      // Get the current time
      const now = new Date();
  
      // Format the time as a readable string
      const timeString = now.toLocaleTimeString();
  
      // Update the text content of the clock element
      clockElement.textContent = timeString;
    }
  
    // Initialize the clock immediately
    updateClock();
  
    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);
  });
  