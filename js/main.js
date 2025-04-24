// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.fade-in)');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

// Инициализация всех функций
document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем все функции
    mobileMenu();
    filterProducts();
    heroParallax();
    
    // Запускаем анимацию при скролле
    window.addEventListener('scroll', animateOnScroll);
    // Проверяем видимые элементы сразу после загрузки
    animateOnScroll();

    // Скрываем прелоадер после загрузки страницы
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    }

    // Инициализируем анимации появления элементов
    initFadeAnimations();
});

// Мобильное меню
const mobileMenu = () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.nav');
    
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }
};

// Фильтрация продуктов
const filterProducts = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    // Добавляем анимацию появления
                    setTimeout(() => {
                        card.classList.add('active');
                    }, 100);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('active');
                }
            });
        });
    });
};

// Параллакс эффект для героя
const heroParallax = () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        });
    }
};

// Добавляем классы для анимации
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });
});

// Map initialization
function initMap() {
    // Coordinates for the bakery (replace with actual coordinates)
    const bakeryLocation = { lat: 55.7558, lng: 37.6173 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: bakeryLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            }
        ]
    });

    // Add marker for the bakery
    const marker = new google.maps.Marker({
        position: bakeryLocation,
        map: map,
        title: 'Наша пекарня'
    });
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const preloader = document.querySelector('.preloader');

    // Hide preloader when page loads
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Here you would typically send the data to your server
            console.log('Form submitted:', data);

            // Show success message
            alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
        });
    }

    // Mobile menu handling
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('nav--active');
        });
    }
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '+' + x[1] + ' (' + x[2] + ') ' + (x[3] ? x[3] + '-' + x[4] : x[3]);
    });
}

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Добавляем стили для анимации
    setTimeout(() => {
        notification.classList.add('notification--visible');
    }, 100);

    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('notification--visible');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Валидация формы
function validateForm() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.add('invalid');
                this.classList.remove('valid');
            }
        });
    });
}

// Инициализация валидации при загрузке страницы
document.addEventListener('DOMContentLoaded', validateForm);

// Анимации появления элементов при скролле
function initFadeAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// Эффект волны для кнопок
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn--primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const circle = document.createElement('div');
            circle.classList.add('ripple');
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            
            this.appendChild(circle);
            
            setTimeout(() => {
                circle.remove();
            }, 600);
        });
    });
});
