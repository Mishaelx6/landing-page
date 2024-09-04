const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});