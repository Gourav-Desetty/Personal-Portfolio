var typed = new Typed('#element', {
    strings: ["I'm a Software Engineer", ' A Web Developer', "An AI ML Engineer"],
    typeSpeed: 90,
});


const togglebtn = document.querySelector('.bars')
const togglebtnIcon = document.querySelector('.bars i')
const dropdownmenu = document.querySelector('.dropdown')

togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')

    togglebtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop the default form behavior

    const form = e.target;
    const formData = new FormData(form);
    const status = document.getElementById('form-status');

    // Optional: Show "Sending..." message
    status.style.color = 'blue';
    status.textContent = "Sending...";

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            status.style.color = 'green';
            status.textContent = "✅ Message sent successfully!";
            form.reset(); // Clear the form
        } else {
            status.style.color = 'red';
            status.textContent = "❌ Error: " + (result.message || "Failed to send message.");
        }
    } catch (error) {
        status.style.color = 'red';
        status.textContent = "❌ Network error. Please try again later.";
    }
});