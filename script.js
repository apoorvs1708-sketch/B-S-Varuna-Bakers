/* =====================================================
   B S VARUNA BAKERS
   MAIN JAVASCRIPT
===================================================== */


/* ================= SELECT ELEMENTS ================= */

const preloader = document.getElementById("preloader");
const header = document.getElementById("header");

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const backTop = document.getElementById("backTop");

const orderForm = document.getElementById("orderForm");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        preloader.classList.add("hide");

    }, 600);

});


/* ================= MOBILE MENU ================= */

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= HEADER SCROLL ================= */

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= GALLERY LIGHTBOX ================= */

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        if (!image) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* ================= CLOSE LIGHTBOX ================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener("click", closeLightbox);


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* ================= BACK TO TOP ================= */

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= ORDER FORM ================= */

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const product =
        document.getElementById("product").value;

    const message =
        document.getElementById("orderMessage").value.trim();


    if (!name || !phone || !product || !message) {

        showToast("Please fill all the fields.");

        return;

    }


    const whatsappText =
        "Hello B S Varuna Bakers!%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +

        "%0APhone: " +
        encodeURIComponent(phone) +

        "%0AProduct: " +
        encodeURIComponent(product) +

        "%0AMessage: " +
        encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/919369759803?text=" +
        whatsappText;


    showToast("Opening WhatsApp...");


    setTimeout(function () {

        window.open(whatsappURL, "_blank");

        orderForm.reset();

    }, 700);

});


/* ================= TOAST ================= */

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}