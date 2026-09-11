document.addEventListener("DOMContentLoaded", () => {
    // إضافة فئة Fade-In لعرض الصفحة بسلاسة عند التحميل
    document.body.classList.add("fade-in");

    // إضافة تأثير الخروج التدريجي لكل الروابط التي تنقل داخل الموقع
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            // تأكد أن الرابط خارجي أو مجرد هاش #
            if (targetUrl && !targetUrl.startsWith("#") && !targetUrl.startsWith("javascript")) {
                e.preventDefault();
                document.body.classList.remove("fade-in");

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400); // إعطاء مهلة 400ms لإتمام حركة الاختفاء
            }
        });
    });
});
