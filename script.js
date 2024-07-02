document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        document.getElementById('utc-time').textContent = now.toUTCString();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        document.getElementById('current-day').textContent = days[now.getUTCDay()];
    }

    // Initial call to display time immediately on page load
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
});
