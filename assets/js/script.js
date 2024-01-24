// document.addEventListener("DOMContentLoaded", function () {
//     const accordionItem = document.querySelectorAll(".accordion-item");

//     accordionItem.forEach((item) => {
//         const header = document.querySelector(".accordion-header");

//         header.addEventListener("click", function () {
//             const content = item.querySelector(".accordion-content");

//             if (content.style.display === "none") {
//                 content.style.display = "block";
//             } else {
//                 content.style.display = "none";
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const accordion = document.querySelector(".accordion");

//     accordion.addEventListener("click", function (event) {
//         const header = event.target.closest(".accordion-header");

//         if (header) {
//             const item = header.closest(".accordion-item");
//             const isOpen = item.classList.contains("active");

//             // Menutup semua accordion yang terbuka sebelumnya
//             const allAccordionItems = accordion.querySelectorAll(".accordion-item");
//             allAccordionItems.forEach((otherItem) => {
//                 if (otherItem !== item && otherItem.classList.contains("active")) {
//                     otherItem.classList.remove("active");
//                     otherItem.querySelector(".accordion-content").style.display = "none";
//                 }
//             });

//             // Toggle kelas dan tampilkan/sembunyikan konten pada accordion saat ini
//             item.classList.toggle("active", !isOpen);
//             const content = item.querySelector(".accordion-content");
//             content.style.display = !isOpen ? "block" : "none";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.querySelector(".accordion");

    accordion.addEventListener("click", function (event) {
        const header = event.target.closest(".accordion-header");

        if (header) {
            const item = header.closest(".accordion-item");
            const isOpen = item.classList.contains("active");

            // Menutup semua accordion yang terbuka sebelumnya
            const allAccordionItems = accordion.querySelectorAll(".accordion-item");
            allAccordionItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".accordion-content").style.display = "none";
                    otherItem.querySelector(".accordion-icon").src = "assets/images/icon-plus.svg";
                }
            });

            // Toggle kelas dan tampilkan/sembunyikan konten pada accordion saat ini
            item.classList.toggle("active", !isOpen);
            const content = item.querySelector(".accordion-content");
            content.style.display = !isOpen ? "block" : "none";

            // Ubah gambar pada accordion saat ini
            const icon = item.querySelector(".accordion-icon");
            icon.src = isOpen ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
        }
    });
});
