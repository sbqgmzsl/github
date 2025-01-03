// 用于控制右侧区域图片切换
function changeImage(imageId) {
    // 隐藏所有图片
    const images = document.querySelectorAll('.right-img');
    images.forEach(img => img.classList.remove('active'));

    // 显示选中的图片
    const selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('active');
}

// 更新时钟
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// 每秒更新时钟
setInterval(updateClock, 1000);

// 初次加载时，确保时钟显示
updateClock();
