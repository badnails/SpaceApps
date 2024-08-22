document.addEventListener("DOMContentLoaded", function() {
    var text = "Climatter";
    var container = document.getElementById("animated-text");
    var index = 0;
    var typingSpeed = 450;

    function type() {
        if (index < text.length) {
            container.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var heroSection = document.querySelector('.hero');
    var cards_section = document.querySelector('.cards-section');
    navbar.style.top = window.scrollY > heroSection.offsetHeight - 50 ? '0' : '-100px';
    var footer = document.querySelector(".footer");
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight) {
        footer.style.bottom = "0";
        cards_section.style.top="15%"; 
        footer.style.zIndex=3 // Slide the footer up into view
    } else {
        footer.style.bottom = "-200px";
        cards_section.style.top="22%"
        footer.style.zIndex=-1; // Keep the footer hidden
    }
};


