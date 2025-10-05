document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isOpen = content.style.display === 'block';

            // Close all
            document.querySelectorAll('.faq-content').forEach(c => c.style.display = 'none');

            // Toggle current
            content.style.display = isOpen ? 'none' : 'block';
        });
    });
});
