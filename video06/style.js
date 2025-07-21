const downloadPopup = document.getElementById('download-popup');
const continueButton = document.getElementById('continue-download');
const cancelButton = document.getElementById('cancel-download');

// Function to display the pop-up window
function showPopup() {
    downloadPopup.style.display = 'block';
}

// Function to hide the pop-up window and continue the download
function continueDownload() {
    // Your code to continue the download
    downloadPopup.style.display = 'none';
}

// Function to hide the pop-up window and cancel the download
function cancelDownload() {
    // Your code to cancel the download
    downloadPopup.style.display = 'none';
}

// Event listeners for buttons
continueButton.addEventListener('click', continueDownload);
cancelButton.addEventListener('click', cancelDownload);

// Trigger the pop-up when a download is initiated
// Replace with your actual download initiation logic
showPopup();