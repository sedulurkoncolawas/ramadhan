window.addEventListener("scroll", function () {
    const aboutSection = document.getElementById("about-section");
    const historySection = document.getElementById("history-section");

    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const historyPosition = historySection.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.3;

    // For About Section
    if (aboutPosition < screenPosition) {
        aboutSection.classList.add("active");
    } else {
        aboutSection.classList.remove("active");
    }

    // For History Section
    if (historyPosition < screenPosition) {
        historySection.classList.add("active");
    } else {
        historySection.classList.remove("active");
    }
});

function countdownToRamadhan() {
    const ramadhanDate = new Date("February 28, 2025 00:00:00").getTime();
    const lebaranDate = new Date("March 30, 2025 00:00:00").getTime();

    const updateCountdown = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = ramadhanDate - now;

        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Tampilkan hitungan mundur untuk Ramadhan
        document.getElementById("countdown").innerHTML =
            `${daysRemaining} Hari ${hoursRemaining} Jam ${minutesRemaining} Menit ${secondsRemaining} Detik Lagi.`;

        // Jika countdown ke Ramadhan selesai
        if (timeRemaining < 0) {
            clearInterval(updateCountdown);
            document.getElementById("countdown").innerHTML = "Ramadhan Telah Tiba...";

            // Putar lagu
            const audio = new Audio('https://h.top4top.io/m_3214mr0y70.mp4'); // Ganti dengan URL lagu yang kamu siapkan
            audio.play();

            // Tampilkan teks "Ramadhan Telah Tiba..." selama 10 detik
            setTimeout(function() {
                document.getElementById("countdown").innerHTML = ""; // Kosongkan teks setelah 10 detik
                document.getElementById("countdown").innerHTML = "Selamat Menunaikan Ibadah Puasa"; // Ganti teks
                countdownToLebaran(); // Panggil fungsi untuk hitung mundur ke Lebaran
            }, 10000); // 10 detik dalam milidetik
        }
    }, 1000); // Update setiap 1 detik
}

function countdownToLebaran() {
    const lebaranDate = new Date("March 30, 2025 00:00:00").getTime();

    const updateLebaranCountdown = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = lebaranDate - now;

        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Tampilkan hitungan mundur untuk Lebaran
        document.getElementById("countdown").innerHTML =
            `Lebaran dalam ${daysRemaining} Hari ${hoursRemaining} Jam ${minutesRemaining} Menit ${secondsRemaining} Detik Lagi.`;

        // Jika countdown ke Lebaran selesai
        if (timeRemaining < 0) {
            clearInterval(updateLebaranCountdown);
            document.getElementById("countdown").innerHTML = "Selamat Hari Raya Idul Fitri"; // Teks akhir
            document.getElementById("countdown").innerHTML = "Hari Raya Idul Fitri"; // Ganti teks
        }
    }, 1000); // Update setiap 1 detik
}

// Panggil fungsi countdown Ramadhan saat halaman dimuat
countdownToRamadhan();
