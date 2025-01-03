let navbar = document.getElementById('navbar');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let bannerText = document.getElementById('banner-text');
let sections = document.querySelectorAll('section');
let currentSectionIndex = 0;  // 当前显示的模块索引
let isAtTop = true;  // 是否在页面顶部

// 菜单切换函数
function toggleMenu() {
    navbar.classList.toggle('visible');
    if (navbar.classList.contains('visible')) {
        navbar.style.width = '100%';
        hamburgerMenu.style.display = 'none';
    } else {
        navbar.style.width = '0';
        navbar.style.opacity = '0';
        hamburgerMenu.style.display = 'flex';
    }
}

// 监听鼠标滚轮事件来切换页面
window.addEventListener('wheel', (event) => {
    if (isAtTop) {
        // 在页面顶部时，处理导航栏的展开和文本的消失
        if (event.deltaY > 0) {
            // 第一次滚动时，展开导航栏并隐藏 banner 文本
            bannerText.style.transform = 'translateY(-150%)';
            bannerText.style.opacity = '0';
            navbar.classList.add('visible');  // 显示导航栏
            hamburgerMenu.style.display = 'none'; // 隐藏汉堡菜单
            isAtTop = false;  // 滚动到其他区域
        }
    } else {
        // 页面滚动超过 banner 区域时，切换到下一个模块
        if (event.deltaY > 0) {
            goToNextSection();
        } else {
            goToPreviousSection();
        }
    }
});

// 切换到下一个模块
function goToNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex].classList.remove('visible');
        currentSectionIndex++;
        sections[currentSectionIndex].classList.add('visible');
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
}

// 切换到上一个模块
function goToPreviousSection() {
    if (currentSectionIndex > 0) {
        sections[currentSectionIndex].classList.remove('visible');
        currentSectionIndex--;
        sections[currentSectionIndex].classList.add('visible');
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
}

// 监听滚动事件，检查页面是否在顶部
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // 页面滚动到顶部时，恢复 banner 文本并隐藏导航栏
        isAtTop = true;
        bannerText.style.transform = 'translateY(0)';
        bannerText.style.opacity = '1';

        // 隐藏导航栏
        navbar.classList.remove('visible');
        hamburgerMenu.style.display = 'flex';
    }
});
