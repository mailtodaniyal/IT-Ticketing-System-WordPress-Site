        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Testimonial slider
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;

        function showSlide(n) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + testimonials.length) % testimonials.length;
            testimonials[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-rotate testimonials
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);

        // Form floating labels
        document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentNode.querySelector('label').classList.add('active');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentNode.querySelector('label').classList.remove('active');
                }
            });
            
            // Initialize labels for pre-filled fields
            if (input.value !== '') {
                input.parentNode.querySelector('label').classList.add('active');
            }
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.step, .plan-card, .priority-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animated elements
        document.querySelectorAll('.step, .plan-card, .priority-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
