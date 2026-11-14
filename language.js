const translations = {

    de: {
        // Navigation
        start: "Start",
        aktuell: "Aktuell",
        shop: "Shop",
        archiv: "Archiv",
        kontakt: "Kontakt",
        zurück: "Zurück",

        // Hauptseite
        crew: "PARTY CREW & EQUIPMENT VERLEIH",

        headline: {
            normal: "Wir machen die",
            highlight: "Party!"
        },

        description: "Egal ob du Equipment suchst oder Ausschau nach einer Party hältst – bei uns wirst du fündig!",

        events: "Zu den Veranstaltungen",
        equipment: "Equipment leihen",

        // Eventseite
        headline2: "Aktuelles",
        description2: "Anstehende Veranstaltungen und News.",

        // Shopseite
        headline3: "Verleih",
        description3: "Equipment, was wir gerade zum Verleih anbieten.",
        headline4: "Verkauf",
        description4: "Altes Equipment, was wir gerade zum Verkauf anbieten.",
        infos: "Mehr Infos",
        anzeige: "Zur Anzeige",

        //Archiv
        headline5: "Unsere Story & vergangene Events",

        // Kontakt
        headline6: "Kontakt",
        teljulius: "Telefonisch: +49 1517 0668813",
        teljakob: "Telefonisch: +49 170 2648619",
        mailjakob: "E-Mail: staiger.jt@gmail.com",
        mailjalmari: "E-Mail:jalmari-naturespirit@web.de",
        support: "Unterstützen Sie unser Projekt",
        support2: "Ihre Unterstützung hilft uns, unser Equipment zu verbessern.",
        support3: "Vorlage für den Betreff: Spende für DJ3-Events.",
        sale: "Flohmarkt",
        sale2: "So finden sie uns auf Kleinanzeigen. Hier bieten wir altes Equipment zum Verkauf an.",
        about: "Über uns",
        about2: "Zu dritt haben wir uns auf die Organisation von Partys und Events spezialisiert und bieten auch Equipment zum Verleih an. Unser Hauptsitz ist in Hitzacker. Unsere Events finden meist im nahen Umkreis statt."
    },

    en: {
        // Navigation
        start: "Home",
        aktuell: "Events",
        shop: "Shop",
        archiv: "Archive",
        kontakt: "Contact",
        zurück: "Back",

        // Hauptseite
        crew: "PARTY CREW & EQUIPMENT RENTAL",

        headline: {
            normal: "We make the",
            highlight: "party!"
        },

        description: "Whether you're looking for equipment or searching for a party – you've come to the right place!",

        events: "Upcoming Events",
        equipment: "Rent Equipment",

        // Eventseite
        headline2: "Upcoming",
        description2: "Upcoming events and news.",

        // Shopseite
        headline3: "Rental",
        description3: "Equipment that we currently offer for rent.",
        headline4: "Sale",
        description4: "Old equipment that we currently offer for sale.",
        infos: "More Information",
        anzeige: "View Listing",

        //Archiv
        headline5: "Our Story & Past Events",

        // Kontakt
        headline6: "Contact",
        teljulius: "Phone: +49 1517 0668813",
        teljakob: "Phone: +49 170 2648619",
        mailjakob: "Email: staiger.jt@gmail.com",
        mailjalmari: "Email: jalmari-naturespirit@web.de",
        support: "Support Our Project",
        support2: "Your support helps us improve our equipment.",
        support3: "Template for the subject: Donation for DJ3-Events.",
        sale: "Flea Market",
        sale2: "Find us on 'kleinanzeigen'. We offer old equipment for sale.",
        about: "About Us",
        about2: "We are three people specialized in organizing parties and events, and we also offer equipment for rent. Our main office is in Hitzacker. Most of our events take place in the nearby area."
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