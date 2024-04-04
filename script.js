function showDetails(carId) {
    var detailsContent = document.getElementById('details-content');
    // Replace this with actual car details retrieval logic
    var carDetails = "Details of Car " + carId;
    detailsContent.innerHTML = carDetails;
    var carDetailsSection = document.getElementById('car-details');
    carDetailsSection.classList.add('active');
}

function hideDetails() {
    var carDetailsSection = document.getElementById('car-details');
    carDetailsSection.classList.remove('active');
}

// JavaScript for Back to Top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// JavaScript for handling search form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent the default form submission behavior
                    
    // Get the search query from the input field
    var searchQuery = document.getElementById("search-input").value.trim();
        
    // Perform search or any other action based on the search query
    // For example, you can redirect to a search results page or filter the car listings
                    
    // Here, we'll just log the search query to the console
    console.log("Search query:", searchQuery);
}

// Function to show popup notification with contact number
function showPopup(contactNumber) {
    // Set the contact number in the popup
    document.getElementById('contact-number').textContent = contactNumber;
    // Show the popup
    document.getElementById('popup').style.display = 'block';
    // Close the popup after 3 seconds
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
    }, 5000);
}

function openImage(src) {
    var enlargedImage = document.createElement('img');
    enlargedImage.src = src;
    enlargedImage.style.cursor = 'pointer';
    enlargedImage.style.maxWidth = '90%';
    enlargedImage.style.maxHeight = '90%';
    enlargedImage.style.margin = 'auto';
    enlargedImage.style.display = 'block';

    var popup = document.getElementById('.popup_image');
    popup.innerHTML = '';
    popup.appendChild(enlargedImage);
    popup.style.display = 'block';
}

var currentImageIndex = 0;
var images = [];

function openModal(imageUrl, index) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageUrl;
    currentImageIndex = index;
    images = document.querySelectorAll('.car-images img');
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    var newImageUrl = images[currentImageIndex].src;
    document.getElementById("modalImg").src = newImageUrl;
}

// Function to close the modal when clicking outside of the image frame
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    if (event.target == modal && event.target != modalImg) {
        closeModal();
    }
}

