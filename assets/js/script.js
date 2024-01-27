//  -----USE CSS----- \\
// document.addEventListener("DOMContentLoaded", function () {
//     const accordion = document.querySelector(".accordion");
//     const allAccordionItems = accordion.querySelectorAll(".accordion-item");

//     accordion.addEventListener("click", function (event) {
//         const header = event.target.closest(".accordion-header");

//         if (header) {
//             const item = header.closest(".accordion-item");

//             // Menutup semua accordion yang terbuka sebelumnya
//             allAccordionItems.forEach((otherItem) => {
//                 if (otherItem !== item && otherItem.classList.contains("active")) {
//                     otherItem.classList.remove("active");
//                 }
//             });

//             // Menambahkan atau menghapus kelas "active" pada accordion-item yang diklik
//             item.classList.toggle("active");
//         }
//     });
// });

//----- USE JS ONLY ----- \\
// Menunggu hingga seluruh dokumen HTML selesai dimuat sebelum menjalankan kode JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Mengambil referensi dari elemen dengan kelas "accordion"
    const accordion = document.querySelector(".accordion");

    // Mengambil referensi dari semua elemen dengan kelas "accordion-item" di dalam elemen "accordion"
    const allAccordionItems = accordion.querySelectorAll(".accordion-item");

    // Membuka accordion pertama secara otomatis
    const firstAccordionItem = allAccordionItems[0];
    firstAccordionItem.classList.add("active"); // Menambahkan kelas "active" pada elemen pertama
    const firstAccordionContent = firstAccordionItem.querySelector(".accordion-content");
    firstAccordionContent.style.display = "block"; // Menampilkan konten pada elemen pertama
    const firstAccordionIcon = firstAccordionItem.querySelector(".accordion-icon");
    firstAccordionIcon.src = "assets/images/icon-minus.svg"; // Mengganti gambar ikon pada elemen pertama

    // Menambahkan event listener untuk menanggapi klik pada elemen "accordion"
    accordion.addEventListener("click", function (event) {
        // Mengambil referensi dari elemen yang merupakan ancestor dari target dengan kelas "accordion-header"
        const header = event.target.closest(".accordion-header");

        if (header) {
            // Mengambil referensi dari elemen "accordion-item" terdekat yang mengandung elemen "header"
            const item = header.closest(".accordion-item");
            const isOpen = item.classList.contains("active");

            // Menutup semua elemen "accordion-item" yang terbuka sebelumnya
            allAccordionItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active"); // Menghapus kelas "active" dari elemen lain
                    otherItem.querySelector(".accordion-content").style.display = "none"; // Menyembunyikan konten dari elemen lain
                    otherItem.querySelector(".accordion-icon").src = "assets/images/icon-plus.svg"; // Mengganti gambar ikon dari elemen lain
                }
            });

            // Mengganti status kelas dan menampilkan/menyembunyikan konten pada elemen "accordion-item" yang diklik
            item.classList.toggle("active", !isOpen);
            const content = item.querySelector(".accordion-content");
            content.style.display = !isOpen ? "block" : "none";

            // Mengganti gambar ikon pada elemen "accordion-item" yang diklik
            const icon = item.querySelector(".accordion-icon");
            icon.src = isOpen ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
        }
    });
});
