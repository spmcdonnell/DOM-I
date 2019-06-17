const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png'
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png'
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content':
            'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content':
            'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content':
            'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content':
            'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content':
            'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street<br>Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io'
    },
    footer: {
        copyright: 'Copyright Great Idea! 2018'
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Nav
var nav = document.querySelector('nav');

nav.appendChild(document.createElement('a'));
nav.appendChild(document.createElement('a'));

nav.children[6].setAttribute('href', '#');
nav.children[7].setAttribute('href', '#');

var navItems = nav.querySelectorAll('a');

navItems.forEach((item, index) => {
    item.textContent = siteContent['nav'][`nav-item-${index + 1}`];
    item.style.color = 'green';
    console.log(index);
});

nav.children[6].textContent = 'Hello';
nav.children[7].textContent = 'World';

// CTA
document.getElementsByTagName('h1')[0].textContent = siteContent.cta.h1;
document.querySelector('button').textContent = siteContent.cta.button;
document.getElementById('cta-img').src = siteContent.cta['img-src'];

// Main Content
var topContent = document.querySelector('.top-content');
var bottomContent = document.querySelector('.bottom-content');

topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];

topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

bottomContent.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottomContent.children[0].children[1].textContent = siteContent['main-content']['services-content'];

bottomContent.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottomContent.children[1].children[1].textContent = siteContent['main-content']['product-content'];

bottomContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottomContent.children[2].children[1].textContent = siteContent['main-content']['vision-content'];

// Contact
var contactParagraphs = document.querySelector('.contact').querySelectorAll('p');

document.querySelector('.contact').querySelector('h4').textContent = siteContent.contact['contact-h4'];

contactParagraphs[0].innerHTML = siteContent.contact.address;
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

// Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;
