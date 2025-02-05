document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".title", {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        delay: 0.5
    });

    // Optional Glitch Effect
    setInterval(() => {
        gsap.to(".title", { x: Math.random() * 4 - 2, y: Math.random() * 4 - 2, duration: 0.05 });
        setTimeout(() => gsap.to(".title", { x: 0, y: 0, duration: 0.05 }), 50);
    }, 1000);
});
