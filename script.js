// chat.js
window.addEventListener('DOMContentLoaded', function() {
    let menuPlaceholder = document.getElementById('menu-placeholder');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/menu/menu.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            menuPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();

    // Загрузка страницы "О нас"
    let xhrAbout = new XMLHttpRequest();
    xhrAbout.open('GET', '/about/about.html', true);
    xhrAbout.onreadystatechange = function() {
        if (xhrAbout.readyState === 4 && xhrAbout.status === 200) {
            let aboutContainer = document.getElementById('about');
            aboutContainer.innerHTML = xhrAbout.responseText;
        }
    };
    xhrAbout.send();

    // Загрузка страницы "Услуги"
    let xhrServices = new XMLHttpRequest();
    xhrServices.open('GET', '/services/services.html', true);
    xhrServices.onreadystatechange = function() {
        if (xhrServices.readyState === 4 && xhrServices.status === 200) {
            let servicesContainer = document.getElementById('services');
            servicesContainer.innerHTML = xhrServices.responseText;
        }
    };
    xhrServices.send();

    // Загрузка страницы "Контакты"
    let xhrContact = new XMLHttpRequest();
    xhrContact.open('GET', '/contact/contact.html', true);
    xhrContact.onreadystatechange = function() {
        if (xhrContact.readyState === 4 && xhrContact.status === 200) {
            let contactContainer = document.getElementById('contact');
            contactContainer.innerHTML = xhrContact.responseText;
        }
    };
    xhrContact.send();

    let xhrChat = new XMLHttpRequest();
    xhrChat.open('GET', '/chat/chat.html', true);
    xhrChat.onreadystatechange = function() {
        if (xhrChat.readyState === 4 && xhrChat.status === 200) {
            let chatPlaceholder = document.getElementById('chat-placeholder');
            chatPlaceholder.innerHTML = xhrChat.responseText;
        }
    };
    xhrChat.send();
});


