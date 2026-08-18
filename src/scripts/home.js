// 1. استيراد مكتبة Chart.js مع حزمة المكونات التلقائية
import Chart from 'chart.js/auto';

(function () {

    const closeBanners = document.querySelectorAll('.c-banner__close');
    closeBanners.forEach(closeBanner => {
        closeBanner.addEventListener('click', event => {
            const banner = event.target.parentNode;
            banner.classList.add('collapse');

            banner.addEventListener('transitionend', function (event) {
                if (event.target === this) {
                    this.remove();
                }

            })
        })
    })

})();



// 2. الحصول على عنصر Canvas المخصص لرسم المخطط البياني
const ctx = document.getElementById('example-chart');

// 3. إنشاء كائن الرسم البياني وتحديد الإعدادات والبيانات
const chart = new Chart(ctx, {
    type: 'line', // نوع الرسم البياني: خطي
    data: {
        // التسميات التوضيحية للمحور السيني (أشهر السنة)
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'ماي', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        datasets: [{
            label: 'مبيعات الشهر',
            data: [432, 533, 1200, 644, 362, 1240, 1630, 235, 422, 543, 123, 333], // قيم المبيعات
            borderColor: '#2541b2',     // لون خط الرسم البياني
            backgroundColor: 'transparent', // خلفية شفافة تحت الخط
            lineTension: 0.2,           // نسبة انحناء الخط (نعومة المنحنى)
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false, // إخفاء مربع دلالة الألوان (Legend)
            }
        },
        scales: {
            y: {
                display: false // إخفاء المحور الرأسي (Y)
            },
            x: {
                position: 'top' // نقل المحور الأفقي (X) لأعلى الرسم البياني
            }
        }
    }
});

// 4. تحديد عنصر التنقل/الزر من الـ DOM
const navigation = document.querySelector('.c-table__navigation');

// 5. دالة مساعدة لتوليد مصفوفة أرقام عشوائية عينة لتحديث البيانات
const randomArray = (myLenght, max) => Array.from({ length: myLenght }, () => Math.round(Math.random() * max));

// 6. الاستماع لحدث النقر لتحديث بيانات الرسم البياني وإعادة رسمه
navigation.addEventListener('click', () => {
    chart.data.datasets[0].data = randomArray(12, 1200); // إسناد البيانات العشوائية الجديدة
    chart.update(); // إعادة تفعيل ورسم المخطط بالبيانات الجديدة
});

// استخدام IIFE لتغليف الكود ومنع تلوث النطاق العام (Global Scope)
(function () {
    // جلب جميع عناصر مكونات التبويبات الموجودة في الصفحة
    const tabs = document.querySelectorAll('.js-tabs');

    // التكرار على كل مكون تبويب بشكل مستقل
    Array.from(tabs, (tab) => {
        const tabsLinks = tab.querySelectorAll('.js-tab-link'); // عناوين/روابط التبويبات
        let currentActiveTab = tab.querySelector('.js-tab-link.is-active'); // التبويب النشط حالياً

        // دالة تبديل حالة التبويب ومحتواه المرتبط به (تفعيل / إلغاء تفعيل)
        const toggleTab = (toggleTabLink = currentActiveTab) => {
            currentActiveTab = toggleTabLink;
            toggleTabLink.classList.toggle('is-active'); // إعطاء/إزالة كلاس النشاط للرابط

            // جلب معرف التبويب من data-index وتحديد منطقة المحتوى المقابلة له
            const toggleTabData = toggleTabLink.dataset.index;
            const toggleTabArea = tab.querySelector(`.js-tab-area[data-index="${toggleTabData}"]`);
            toggleTabArea.classList.toggle('is-active'); // إعطاء/إزالة كلاس النشاط للمحتوى
        };

        // إذا لم يكن هناك تبويب نشط عند التحميل، يتم تفعيل التبويب الأول افتراضياً
        if (!currentActiveTab) {
            toggleTab(tabsLinks[0]);
        }

        // إضافة مستمع حدث النقر (Click) لكل رابط تبويب
        tabsLinks.forEach(tabsLink => {
            tabsLink.addEventListener('click', function (event) {
                // إذا كان التبويب المنقور هو النشط حالياً، تجاهل الحدث
                if (currentActiveTab === this) {
                    return;
                }

                // إغلاق/إلغاء تفعيل التبويب النشط حالياً
                if (currentActiveTab) {
                    toggleTab();
                }

                // تفعيل التبويب الجديد الذي تم النقر عليه
                toggleTab(this);
            })
        })
    });
})();