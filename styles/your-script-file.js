document.addEventListener("DOMContentLoaded", function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                this.querySelector('.accordion-icon').textContent = '+';
            } else {
                accordionContent.style.display = 'block';
                this.querySelector('.accordion-icon').textContent = '-';
            }
        });
    });
});