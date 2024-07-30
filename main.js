(function ($) {
    "use strict";
    new WOW().init();

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


/*contact form validation*/
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const subjectInput = document.getElementById("subject");

    form.addEventListener("submit", function(event) {
        let valid = true;

        // Name validation
        if (!validateNotEmpty(nameInput.value)) {
            showError(nameInput, "Name must contain at least one word.");
            valid = false;
        } else {
            clearError(nameInput);
        }

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            valid = false;
        } else {
            clearError(emailInput);
        }

        // Message validation
        if (!validateNotEmpty(messageInput.value)) {
            showError(messageInput, "Message must contain at least one word.");
            valid = false;
        } else {
            clearError(messageInput);
        }

        // Subject validation
        if (!validateNotEmpty(subjectInput.value)) {
            showError(subjectInput, "Subject must contain at least one word.");
            valid = false;
        } else {
            clearError(subjectInput);
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent form submission for demonstration
            clearFormFields();
            showSuccessModal();
        }
    });

    function validateNotEmpty(value) {
        return value.trim().length > 0;
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        clearError(input); // Ensure no duplicate error messages
        const errorElement = document.createElement("div");
        errorElement.className = "error-message text-danger";
        errorElement.innerText = message;
        formGroup.appendChild(errorElement);
        input.classList.add("is-invalid");
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector(".error-message");
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        input.classList.remove("is-invalid");
    }

    function clearFormFields() {
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        subjectInput.value = '';
    }

    function showSuccessModal() {
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        setTimeout(() => {
            successModal.hide();
        }, 5000);
    }
});

function toggleContent(event) {
    event.preventDefault(); // Prevent the default link behavior
    const moreContent = document.getElementById('more-content');
    const button = event.target;

    if (moreContent.classList.contains('d-none')) {
      moreContent.classList.remove('d-none');
      button.textContent = 'Read Less'; // Change button text
    } else {
      moreContent.classList.add('d-none');
      button.textContent = 'Read More'; // Change button text back
    }
  }

