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
//                     otherItem.querySelector(".accordion-icon").src = "assets/images/icon-plus.svg";
//                 }
//             });

//             // Toggle kelas dan tampilkan/sembunyikan konten pada accordion saat ini
//             item.classList.toggle("active", !isOpen);
//             const content = item.querySelector(".accordion-content");
//             content.style.display = !isOpen ? "block" : "none";

//             // Ubah gambar pada accordion saat ini
//             const icon = item.querySelector(".accordion-icon");
//             icon.src = isOpen ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.querySelector(".accordion");

    // Mengambil referensi dari semua item accordion
    const allAccordionItems = accordion.querySelectorAll(".accordion-item");

    // Membuka accordion pertama
    const firstAccordionItem = allAccordionItems[0];
    firstAccordionItem.classList.add("active");
    const firstAccordionContent = firstAccordionItem.querySelector(".accordion-content");
    firstAccordionContent.style.display = "block";
    const firstAccordionIcon = firstAccordionItem.querySelector(".accordion-icon");
    firstAccordionIcon.src = "assets/images/icon-minus.svg";

    // Menambahkan event listener pada accordion
    accordion.addEventListener("click", function (event) {
        const header = event.target.closest(".accordion-header");

        if (header) {
            const item = header.closest(".accordion-item");
            const isOpen = item.classList.contains("active");

            // Menutup semua accordion yang terbuka sebelumnya
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
