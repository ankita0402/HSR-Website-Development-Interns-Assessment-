// Select the call-to-action button
const ctaBtn = document.querySelector('.btn');

// Add an event listener to the button
ctaBtn.addEventListener('click', function() {
	// Redirect the user to the contact page when the button is clicked
	window.location.href = 'contact.html';
});

// Select all the service boxes
const serviceBoxes = document.querySelectorAll('.service-box');

// Loop through each service box and add an event listener to each one
serviceBoxes.forEach(function(serviceBox) {
	serviceBox.addEventListener('click', function() {
		// Get the URL of the linked page from the data-href attribute
		const href = serviceBox.dataset.href;

		// Redirect the user to the linked page when the service box is clicked
		window.location.href = href;
	});
});

// Select the portfolio images
const portfolioImgs = document.querySelectorAll('.portfolio-img');

// Loop through each portfolio image and add an event listener to each one
portfolioImgs.forEach(function(portfolioImg) {
	portfolioImg.addEventListener('click', function() {
		// Get the URL of the linked page from the data-href attribute
		const href = portfolioImg.dataset.href;

		// Redirect the user to the linked page when the image is clicked
		window.location.href = href;
	});
});

/* Back-to-top button functionality */
var backToTopButton = document.querySelector(".back-to-top a");

window.addEventListener("scroll", function() {
	if (window.pageYOffset > 300) {
		backToTopButton.classList.add("show");
	} else {
		backToTopButton.classList.remove("show");
	}
});

backToTopButton.addEventListener("click", function() {
	window.scrollTo(0, 0);
});   


// Select the form and submit button
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

// Add an event listener to the form submit event
form.addEventListener('submit', function(event) {
	// Prevent the form from submitting
	event.preventDefault();

	// Get the form fields
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const message = document.getElementById('message').value;

	// Validate the form fields
	if (name === '' || email === '' || phone === '' || message === '') {
		alert('Please fill in all fields.');
	} else {
		// Submit the form
		form.submit();
	}
});