$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function() {
    // Intercept form submission
    $("form").submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Serialize form data
        var formData = $(this).serialize();

        // Send AJAX POST request
        $.ajax({
            type: "POST",
            url: "process_form.php", // Replace with your backend script URL
            data: formData,
            success: function(response) {
                // Display success message or handle response
                alert("Form submitted successfully!");
                // Example: Clear form fields
                $("form")[0].reset();
            },
            error: function(xhr, status, error) {
                // Display error message or handle error
                alert("Error submitting form: " + error);
            }
        });
    });
});

$(document).ready(function() {
    // Collapse navbar on click (mobile)
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});
