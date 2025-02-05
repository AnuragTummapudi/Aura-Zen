document.addEventListener("DOMContentLoaded", () => {
    // Splash screen animation
    gsap.to(".splash-logo", {
        opacity: 1,
        scale: 1.2,
        duration: 1.5,
        ease: "power2.out"
    });

    // After 3 seconds, fade out the splash and show login page
    setTimeout(() => {
        gsap.to(".splash-screen", {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.querySelector(".splash-screen").style.display = "none";
                document.querySelector(".login-container").style.display = "block";
                
                // Fade in login container
                gsap.to(".login-container", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                });

                // Animate login elements
                gsap.from(".logo", {
                    opacity: 0,
                    scale: 0.5,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.5)"
                });

                gsap.from(".login-form", {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
    }, 3000);

    document.querySelector(".login-btn").addEventListener("click", (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('email').value;
        if (emailInput.includes('@')) {
            window.location.href = "dashboard.html";
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
