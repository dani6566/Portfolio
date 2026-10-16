
        // 1. Typing Animation
        const typingText = document.querySelector(".typing-text");
        const roles = [
            "Full-Stack Developer",
            "AI-Powered Product Builder",
            "Thoughtful Problem Solver"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        // 2. Scroll Reveal Animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        // Back to Top Button
        let mybutton = document.getElementById("btn-back-to-top");
        window.onscroll = function () {
            scrollFunction();
            reveal();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        mybutton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Initialize
        window.addEventListener("scroll", reveal);
        document.addEventListener("DOMContentLoaded", () => {
            type();
            reveal();
            document.getElementById("copyrightYear").textContent = new Date().getFullYear();

            document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
                link.addEventListener("click", () => {
                    const navbar = document.getElementById("navbarNav");
                    if (navbar.classList.contains("show")) {
                        bootstrap.Collapse.getOrCreateInstance(navbar).hide();
                    }
                });
            });
        });
