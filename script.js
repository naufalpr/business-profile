document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Thank you for reaching out! We will contact you soon.');
        });
    }
});
