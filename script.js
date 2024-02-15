const languages = [
    "English(UK)",
    "বাংলা",
    "অসমীয়া",
    "हिन्दी",
    "नेपाली",
    "Bahasa Indonesia",
    "العربية",
    "中文(简体)",
    "Bahasa Melayu",
    " Español",
    "Português (Brasil)",
    `<i class="fa-solid fa-plus plus"></i>`,
];

const services = [
    "Sign Up ",
    "Log in ",
    "Messenger ",
    "Facebook Lite ",
    "Video ",
    "Places",
    "Games",
    "MarketPlace",
    "Meta Play",
    "Meta store",
    "Meta Quest",
    "Imagine with Meta Ai",
    "Instagram",
    "Threads",
    "Fundraisers",
    "Services",
    "Voting Information center",
    "Privacy Policy",
    "Privet center",
    "Group",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Cookies",
    "AdChoices " + ` <i class="fa-solid fa-play"></i>`,
    "Terms",
    "Help",
    "Contact uploading and non-users",
];

const sectionOne = document.getElementById("section-1");
const sectionTwo = document.getElementById("section-2");

sectionOne.innerHTML = languages.map((item) => `<li> ${item} </li>`).join("");
sectionTwo.innerHTML = services.map((item) => `<li> ${item} </li>`).join("");
