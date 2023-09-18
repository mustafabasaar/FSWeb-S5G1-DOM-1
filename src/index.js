const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const navLinks = document.querySelectorAll("header nav a");
const navTitles = Object.values(siteContent.nav);

navLinks.forEach((nav, i) => {
  nav.classList.add("italic");
  nav.textContent = navTitles[i];
  console.log(nav);
});

const headerImg = document.querySelector("header img");
headerImg.src = siteContent.images["logo-img"];
document
  .getElementById("cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);
document
  .getElementById("middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);
const ctaText = document.querySelector("section div h1");
ctaText.textContent = siteContent.cta["h1"];
const ctaButton = document.querySelector("section div button");
ctaButton.textContent = siteContent.cta["button"];

const mainText = document.querySelectorAll(".text-content h4");
const mainParagraph = document.querySelectorAll(".text-content p");
const main__content = Object.values(siteContent["ana-içerik"]);
mainText.forEach((m, i) => {
  m.textContent = main__content[i * 2];
});
mainParagraph.forEach((m, i) => {
  m.textContent = main__content[i * 2 + 1];
});
const communicate = document.querySelector(".contact h4");
communicate.textContent = siteContent.iletisim["iletişim-h4"];
const contactDetails = document.querySelectorAll(".contact p");
const contactValue = Object.values(siteContent["iletisim"]);
contactDetails.forEach((m, i) => {
  m.textContent = contactValue[i + 1];
});

const footerItems = document.querySelector("footer a");
footerItems.classList.add("bold");
footerItems.textContent = siteContent.footer["copyright"];
