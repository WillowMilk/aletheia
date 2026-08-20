const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙 Dark Mode';
}

themeToggle.addEventListener('click', () => {
    // Toggle class for legacy support
    body.classList.toggle('light-mode');
    
    // Toggle the data-theme attribute for CSS variables
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
});
