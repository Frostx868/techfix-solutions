document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const address = document.getElementById("address").value.trim();
            const phone = document.getElementById("phone").value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name.length < 3) {
                alert("Please enter a valid name.");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return;
            }

            if (address.length < 5) {
                alert("Please enter a valid address.");
                return;
            }

            if (phone.length < 7) {
                alert("Please enter a valid phone number.");
                return;
            }

            alert("Form submitted successfully!");
        });

    }

});
