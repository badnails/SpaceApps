var temperature;

// Temperature API
async function fetchData() {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=3e74485a322a482685d95749242208&q=Dhaka&days=1&aqi=no&alerts=no';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rec = data.current.temp_c;
        temperature = rec.toString();
    } catch (error) {
        console.error('Error fetching data:', error);
        temperature = 'N/A';
    }
}

// Function to type text
function typeText(container, text, callback) {
    var index = 0;
    var typingSpeed = 450;
    
    function type() {
        if (index < text.length) {
            container.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", async function() {
    var climatterText = "Climatter";
    var co2Text = "426";
    var ch4Text = "1929";
    var climatterContainer = document.getElementById("climatter-text");
    var co2Container = document.getElementById("co2");
    var ch4Container = document.getElementById("ch4");
    var tempContainer = document.getElementById('temp');

    // Type Climatter text first
    typeText(climatterContainer, climatterText);

    // Intersection Observer to detect footer visibility
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the footer is visible
    };

    async function handleFooterVisibility(entries) {
        entries.forEach(async entry => {
            if (entry.isIntersecting) {
                // Footer is in view, reset and start typing
                co2Container.innerHTML = "";
                ch4Container.innerHTML = "";
                tempContainer.innerHTML = "";

                await fetchData(); // API call
                
                typeText(co2Container, co2Text);
                typeText(ch4Container, ch4Text);
                typeText(tempContainer, temperature);
            }
        });
    }

    var footerObserver = new IntersectionObserver(handleFooterVisibility, observerOptions);
    var footer = document.querySelector('.footer');
    footerObserver.observe(footer);
});



//Scroll Handler

let isScrolling;

window.addEventListener('scroll', function() {
    // Throttle scroll events to improve performance
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        var navbar = document.querySelector('.navbar');
        var heroSection = document.querySelector('.hero');
        var cards_section = document.querySelector('.cards-section');
        var footer = document.querySelector(".footer");

        // Adjust navbar visibility based on scroll position
        navbar.style.top = window.scrollY > heroSection.offsetHeight - 50 ? '0' : '-100px';

        // Adjust footer visibility based on scroll position
        var scrollPosition = window.scrollY + window.innerHeight; // Calculate scroll position

        if (scrollPosition >= document.body.offsetHeight) {
            footer.style.bottom = "0";
            cards_section.style.top = "15%";
        } else {
            footer.style.bottom = "-1000px";
            cards_section.style.top = "22%";
        }
    },);
});