const translations = {

    de: {
        start: "Start",
        aktuell: "Aktuell",
        shop: "Shop",
        archiv: "Archiv",
        kontakt: "Kontakt",

        crew: "PARTY CREW & EQUIPMENT VERLEIH",

        headline: {
            normal: "Wir machen die",
            highlight: "Party!"
        },

        description: "Egal ob du Equipment suchst oder Ausschau nach einer Party hältst – bei uns wirst du fündig!",

        events: "Zu den Veranstaltungen",
        equipment: "Equipment leihen"
    },

    en: {
        start: "Home",
        aktuell: "Events",
        shop: "Shop",
        archiv: "Archive",
        kontakt: "Contact",

        crew: "PARTY CREW & EQUIPMENT RENTAL",

        headline: {
            normal: "We make the",
            highlight: "party!"
        },

        description: "Whether you're looking for equipment or searching for a party – you've come to the right place!",

        events: "Upcoming Events",
        equipment: "Rent Equipment"
    }

};

function setLanguage(lang) {

    if (!translations[lang]) return;

    // Sprache im HTML setzen
    document.documentElement.lang = lang;

    // Alle Übersetzungen anwenden
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;
        const translation = translations[lang][key];

        if (translation === undefined) return;

        // Sonderbehandlung für die Headline
        if (key === "headline") {

            element.innerHTML = `
                ${translation.normal}
                <span class="gradient-text">${translation.highlight}</span>
            `;

        } else {

            element.textContent = translation;

        }

    });

    // Aktive Flagge hervorheben
    document.querySelectorAll("[data-lang]").forEach(button => {

        const isActive = button.dataset.lang === lang;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);

    });

    // Sprache speichern
    localStorage.setItem("dj3-language", lang);

}


// Beim Laden der Seite gespeicherte Sprache verwenden
document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("dj3-language") || "de";

    setLanguage(savedLanguage);

    document.querySelectorAll("[data-lang]").forEach(button => {

        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });

    });

});