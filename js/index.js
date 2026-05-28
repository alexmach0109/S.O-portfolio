    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Открытие бургер-меню
    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл фона
    });

    // Закрытие бургер-меню
    menuClose.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем скролл
    });

    // Плавный скролл к секции "Works" при клике в меню
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Если ссылка ведет на якорь #works на этой же странице
            if (href.includes('#about')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }
            if (href.includes('#skills')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
            }
            if (href.includes('#comments')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('comments').scrollIntoView({ behavior: 'smooth' });
            }
            if (href.includes('#works')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
            }
            if (href.includes('#bysite')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('bysite').scrollIntoView({ behavior: 'smooth' });
            }
            if (href.includes('#contact')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }

            // Проект
            if (href.includes('#project-main')) {
                e.preventDefault();
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                document.getElementById('project-main').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Кнопка Back to top
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });