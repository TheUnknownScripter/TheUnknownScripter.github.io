document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.closest('.dropdown');
            dropdown.classList.toggle('active');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownButtons.forEach(button => {
                const dropdown = button.closest('.dropdown');
                if (dropdown.classList.contains('active') && !event.target.closest('.dropdown')) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });

    const buttons = document.querySelectorAll('.DefaultButton');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (this.classList.contains('disabled')) return;

            const x = e.pageX - this.getBoundingClientRect().left;
            const y = e.pageY - this.getBoundingClientRect().top;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});