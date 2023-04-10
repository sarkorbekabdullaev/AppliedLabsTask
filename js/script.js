const openBtn = document.querySelector(".navbar__button"),
    body = document.querySelector("body"),
    menuWrap = document.querySelector(".navbar__ul"),
    layer = document.querySelector(".black_layer");

openBtn.addEventListener("click", () => {
    menuWrap.classList.add("active");
    layer.style.display = "block";
    body.classList.add("hidden");
});

layer.addEventListener("click", () => {
    menuWrap.classList.remove("active");
    layer.style.display = "none";
    body.classList.remove('hidden');
});

const panelUl1 = document.querySelector('.footer__aboutlinks'),
    panelUl2 = document.querySelector('.footer__helplinks'),
    aboutBtn = document.querySelector('#dropdownAbout'),
    helpBtn = document.querySelector('#dropdownHelp'),
    aboutI = aboutBtn.querySelector('i'),
    helpI = helpBtn.querySelector('i')


aboutBtn.addEventListener('click', () => {
    panelUl1.classList.toggle('opened');
    if (aboutI.classList.contains('fa-plus')) {
        aboutI.classList.remove('fa-plus');
        aboutI.classList.add('fa-minus')
    } else {
        aboutI.classList.remove('fa-minus');
        aboutI.classList.add('fa-plus')
    }
})

helpBtn.addEventListener('click', () => {
    panelUl2.classList.toggle('on');
    if (helpI.classList.contains('fa-plus')) {
        helpI.classList.remove('fa-plus');
        helpI.classList.add('fa-minus')
    } else {
        helpI.classList.remove('fa-minus');
        helpI.classList.add('fa-plus')
    }
})


var swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,

    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

const images = document.querySelectorAll('img[data-src]');

const options = {
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.setAttribute('src', img.getAttribute('data-src'));
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(image => {
    observer.observe(image);
});