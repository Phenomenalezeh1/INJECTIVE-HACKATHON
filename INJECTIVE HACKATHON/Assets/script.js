function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block"; // Show the dropdown
    } else {
        dropdown.style.display = "none"; // Hide the dropdown
    }
}



// script.js
function showLoading() {
    var loadingIcon = document.getElementById("loading");
    loadingIcon.style.display = "flex"; // Show loading icon

    // Optionally, you can add a small delay before navigating to allow the icon to be visible
    setTimeout(function() {
        window.location.href = "index.html"; // Navigate to the Home page
    }, 1000); // Adjust the delay as needed
}


const translations = {
    en: {
        title: "Injective Global Virtual Hackathon",
        description: "Build the future of web3 finance with injective.",
    },
    es: {
        title: "Hackathon Virtual Global de Injective",
        description: "Construye el futuro de las finanzas web3 con inyectiva.",
    }
};

function changeLanguage(lang) {
    if (lang === 'en') {
        document.title = translations.en.title;
        document.querySelector('.txt').innerText = translations.en.title;
        document.querySelector('.p').innerText = translations.en.description;
    } else if (lang === 'es') {
        document.title = translations.es.title;
        document.querySelector('.txt').innerText = translations.es.title;
        document.querySelector('.p').innerText = translations.es.description;
    }
}