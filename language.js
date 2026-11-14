const translations = {
    de: {
        start: "Start",
        aktuell: "Aktuell",
        shop: "Shop",
        archiv: "Archiv",
        kontakt: "Kontakt",

        headline: "Wir machen die Party!",
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

        headline: "We make the party!",
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

        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
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