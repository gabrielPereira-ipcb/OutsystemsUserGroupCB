document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');
    const html = document.documentElement;

    function updateThemeUI() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        themeLabel.textContent = isDark ? 'Modo Escuro' : 'Modo Claro';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI();
    });

    // Inicializa o ícone e texto corretos ao carregar
    updateThemeUI();
});