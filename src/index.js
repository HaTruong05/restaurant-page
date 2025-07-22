import "./styles.css";
import { renderHomePage } from "./homepage.js";
import { renderAboutPage } from "./about.js";
import { renderMenuPage } from "./menu.js";

const contentSection = document.getElementById('content');
const homepageNav = document.getElementById('homeNav');
const menuNav = document.getElementById('menuNav');
const aboutNav = document.getElementById('aboutNav');
let activeNav = homepageNav;

const tabMap = new Map([
  [homepageNav, renderHomePage],
  [menuNav, renderMenuPage],
  [aboutNav, renderAboutPage],
]);

// renderHomePage();

tabMap.forEach((render, button) => {
    button.addEventListener('click', (e) => {
        contentSection.innerHTML = '';

        activeNav.classList.remove('active');
        activeNav = e.target;
        activeNav.classList.add('active');

        render();
    })
})
