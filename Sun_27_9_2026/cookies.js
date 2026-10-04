// VARIABLES
const themeSelect = document.getElementById('theme-select');
const langSelect = document.getElementById('lang-select');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const greeting = document.getElementById('greeting');
const statusMsg = document.getElementById('status-msg');

// SET COOKIE
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// GET COOKIE
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for(let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
}

// DELETE COOKIE
function deleteCookie(name) {
    // Setting the expiration date to the past deletes the cookie
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// APPLY PREFERENCES
function applyPreferences(theme, lang) {
    // Apply Theme
    if (theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    themeSelect.value = theme || 'light';

    // Apply Language
    if (lang === 'ar') {
        greeting.textContent = 'مرحباً بك في مدير التفضيلات';
        document.body.dir = 'rtl';
    } else {
        greeting.textContent = 'Welcome to the Preferences Manager';
        document.body.dir = 'ltr';
    }
    langSelect.value = lang || 'en';
}

// LOAD PREFERENCES
function loadPreferences() {
    const savedTheme = getCookie("theme") || "light";
    const savedLang = getCookie("lang") || "en";
    
    applyPreferences(savedTheme, savedLang);
}

// SAVE BUTTON EVENT
saveBtn.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    const selectedLang = langSelect.value;
    
    setCookie("theme", selectedTheme, 7); // Save for 7 days
    setCookie("lang", selectedLang, 7);
    
    applyPreferences(selectedTheme, selectedLang);
    
    statusMsg.textContent = "Preferences saved successfully!";
    setTimeout(() => statusMsg.textContent = "", 2500);
});

// DELETE BUTTON EVENT
deleteBtn.addEventListener('click', () => {
    deleteCookie("theme");
    deleteCookie("lang");
    
    applyPreferences('light', 'en'); // Revert to defaults
    
    statusMsg.textContent = "Cookies deleted successfully!";
    setTimeout(() => statusMsg.textContent = "", 2500);
});

// START APP
loadPreferences();