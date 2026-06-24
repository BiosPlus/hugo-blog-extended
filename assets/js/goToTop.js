window.addEventListener('load', () => {
    const gttButton = document.getElementById("totop");
    if (!gttButton) return;

    let isTicking = false;

    // Throttle scroll events with requestAnimationFrame and mark as passive
    // to improve scroll performance and avoid blocking the main thread.
    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                if (
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    gttButton.style.visibility = "visible";
                    gttButton.style.opacity = "1";
                } else {
                    gttButton.style.visibility = "hidden";
                    gttButton.style.opacity = "0";
                }
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });
});
