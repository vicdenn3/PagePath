document.querySelector('a[href="#intro"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#intro');
    // Учитываем высоту липкого меню (60px), чтобы заголовок не заехал под него
    const offset = 60;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});