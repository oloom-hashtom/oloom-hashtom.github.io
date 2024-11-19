document.getElementById('download-btn').addEventListener('click', () => {
    const groupSelect = document.getElementById('group-select');
    const selectedGroup = groupSelect.value;

    // لیست گروه‌های معتبر
    const validGroups = ['class801', 'class802', 'class803', 'class804'];

    // بررسی انتخاب گروه معتبر
    if (!validGroups.includes(selectedGroup)) {
        alert('کلاس نامعتبر است! لطفاً یک کلاس معتبر انتخاب کنید.');
        return;
    }

    // بارگذاری آمار دانلود از localStorage یا ایجاد یک شیء جدید اگر وجود نداشته باشد
    const stats = JSON.parse(localStorage.getItem('downloadStats')) || {
        class801: 0,
        class802: 0,
        class803: 0,
        class804: 0,
    };

    // افزایش شمارش دانلود برای گروه انتخاب شده
    stats[selectedGroup] += 1;

    // ذخیره آمار جدید در localStorage
    localStorage.setItem('downloadStats', JSON.stringify(stats));

    // دانلود فایل PDF
    const link = document.createElement('a');
    link.href = 'file.pdf'; // مسیر فایل PDF
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
