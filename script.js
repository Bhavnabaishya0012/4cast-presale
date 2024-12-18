// Form submission and validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission by default

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation for empty fields
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    // If all validation passes, show success message
    alert('Message sent successfully!');

    // Optionally, you can clear the form after submission
    document.getElementById('contactForm').reset();
});

// Countdown Timer Script
function countdown() {
    const endDate = new Date("Dec 31, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(countdown, 1000);

// Token calculation (optional, if you're doing token calculations)
document.getElementById("eth").addEventListener("input", function() {
    const ethValue = parseFloat(this.value);
    const rate = 1000; // Example rate: 1000 $4Cast per 1 ETH
    const tokenValue = ethValue * rate;
    document.getElementById("4Cast").value = tokenValue.toFixed(2);
});

// Show the button when the user scrolls down
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function redirectToNewPage() {
    window.location.href = "https://your-new-page.com"; // Replace with your desired page URL
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle function for mobile dropdown menu
function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const isVisible = mobileMenu.getAttribute("aria-hidden") === "false";
    mobileMenu.setAttribute("aria-hidden", isVisible ? "true" : "false");
    mobileMenu.style.display = isVisible ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
    // Select FAQ button and modal elements
    const faqButton = document.querySelector('a[href="#faq"]'); // FAQ link in the nav
    const faqModal = document.getElementById("faq-modal"); // Modal overlay
    const closeModal = document.getElementById("close-faq"); // Close button (×)

    // Check if elements exist
    if (faqButton && faqModal && closeModal) {
        console.log("FAQ Modal script loaded successfully!"); // Debugging log

        // Show modal when FAQ button is clicked
        faqButton.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            faqModal.style.display = "block"; // Show modal
        });

        // Close modal when close button is clicked
        closeModal.addEventListener("click", () => {
            faqModal.style.display = "none"; // Hide modal
        });

        // Close modal when clicking outside the modal content
        window.addEventListener("click", (e) => {
            if (e.target === faqModal) {
                faqModal.style.display = "none"; // Hide modal
            }
        });
    } else {
        console.error("FAQ modal elements not found. Check your HTML IDs and selectors.");
    }
});