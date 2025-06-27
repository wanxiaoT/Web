// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 卡片悬停效果
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'var(--shadow)';
    });
});

// 滚动动画
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// 移动端菜单切换
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<span></span><span></span><span></span>';
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

// 特别鸣谢模态窗口
const thanksBtn = document.querySelector('.thanks-btn');
const modal = document.getElementById('thanksModal');
const closeModal = document.querySelector('.close-modal');

thanksBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    document.body.style.overflow = 'auto';
});

// 点击模态背景关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    }
});