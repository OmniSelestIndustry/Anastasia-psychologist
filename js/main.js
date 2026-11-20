/*===== MENU SHOW & HIDDEN =====*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navOverlay = document.getElementById("nav-overlay");

function openMenu() {
    if (!navMenu || !navToggle) return; // Защита от ошибок, если элементов нет
    navMenu.classList.add("show");
    navOverlay.classList.add("show");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("show");
    navOverlay.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

if (navToggle) navToggle.addEventListener("click", openMenu);
if (navClose) navClose.addEventListener("click", closeMenu);
if (navOverlay) navOverlay.addEventListener("click", closeMenu);

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu && navMenu.classList.contains("show")) {
        closeMenu();
        if (navToggle) navToggle.focus();
    }
});

/*===== CLOSE MENU ON NAV LINK CLICK =====*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

/*====== SCROLL SECTIONS ACTIVE LINK ======*/
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const allNavLinks = document.querySelectorAll(".nav__list a");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            allNavLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    });
});

/*===== SERVICES ACCORDION TOGGLE =====*/
const toggles = document.querySelectorAll(".services__toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const parent = toggle.closest(".services__content");
        const isActive = parent.classList.contains("active-service");

        parent.classList.toggle("active-service");
        toggle.setAttribute("aria-expanded", isActive ? "false" : "true");
    });
});