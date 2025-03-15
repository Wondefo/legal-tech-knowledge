document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单功能
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动类
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));
            
            // 添加活动类到当前选择的链接和对应部分
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active-section');
        });
    });
    
    // 卡片悬停动画增强
    const cards = document.querySelectorAll('.card, .strategy-card, .resource-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
    
    // 添加滚动动画
    function revealOnScroll() {
        const elements = document.querySelectorAll('.knowledge-level, .timeline-item, .strategy-card, .resource-category');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(elementTop < windowHeight - 100) {
                element.classList.add('visible');
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始设置
    const elementsToAnimate = document.querySelectorAll('.knowledge-level, .timeline-item, .strategy-card, .resource-category');
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 滚动监听
    window.addEventListener('scroll', revealOnScroll);
    
    // 初始加载时执行一次
    revealOnScroll();
    
    // 让第一个部分默认显示
    document.querySelector('section').classList.add('active-section');
    
    // 书籍标签切换功能
    const bookTabs = document.querySelectorAll('.book-tab');
    const bookContents = document.querySelectorAll('.book-content');
    
    bookTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有活动类
            bookTabs.forEach(t => t.classList.remove('active'));
            bookContents.forEach(c => c.classList.remove('active'));
            
            // 添加活动类到当前选择的标签和内容
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            document.getElementById(`${category}-books`).classList.add('active');
        });
    });
    
    // 添加书籍项的动画效果
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}); 