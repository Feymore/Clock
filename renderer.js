// Wait until the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    try {
        // Get the clock element by its ID
        const clockElement = document.getElementById('clock');

        if (!clockElement) {
            throw new Error("Clock element not found");
        }

        // Function to update the clock
        function updateClock() {
            try {
                // Get the current time
                const now = new Date();

                // Format the time in 12-hour format with AM/PM
                const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
                const timeString = now.toLocaleTimeString('en-US', options);

                // Update the text content of the clock element
                clockElement.textContent = timeString;
            } catch (error) {
                console.error("Error updating clock:", error);
            }
        }

        // Initialize the clock immediately
        updateClock();

        // Update the clock every second (1000 milliseconds)
        setInterval(() => {
            try {
                updateClock();
            } catch (error) {
                console.error("Error in setInterval execution:", error);
            }
        }, 1000);
        
    } catch (error) {
        console.error("Error initializing clock:", error);
    }
});
