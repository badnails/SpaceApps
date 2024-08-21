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
    navbar.style.top = window.scrollY > heroSection.offsetHeight - 50 ? '0' : '-100px';
};
