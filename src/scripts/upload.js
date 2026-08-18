// دالة تنفيذ فورية
(function () {
    // تحديد جميع عناصر رفع الصور في الصفحة
    const uploaders = document.querySelectorAll('.js-upload');

    // التكرار على كل عنصر لتحديد متغيّراته وإضافة الأحداث الخاصة به
    Array.from(uploaders, (uploader) => {
        // استخراج عناصر المكون (حقل الملفات، عنصر المعاينة، زر الحذف) باستخدام الفاصلة للتعريف بنفس const
        const upload = uploader.querySelector('.js-upload-value'),
            placeholder = uploader.querySelector('.js-upload-placeholder'),
            remove = uploader.querySelector('.js-upload-remove');

        // عند اختيار/تغيير ملف في حقل الرفع
        upload.addEventListener('change', function (event) {
            const img = this.files[0]; // التقاط الملف الأول المحدد
            let reader = new FileReader(); // كائن لقراءة محتوى الملفات من جهاز المستخدم

            // قراءة الملف وتحويله إلى صيغة Base64 Data URL لعرضه كـ src للصورة
            reader.readAsDataURL(img);

            // عند الانتهاء من قراءة الملف
            reader.onloadend = () => {
                uploader.classList.add('has-image'); // إضافة كلاس لإظهار زر الحذف وتنسيقات الصورة
                placeholder.src = reader.result;    // تعيين مسار الصورة المقروءة في عنصر المعاينة
            }
        });

        // عند النقر على زر حذف الصورة
        remove.addEventListener('click', () => {
            upload.value = null;                   // تفريغ حقل الملف
            uploader.classList.remove('has-image'); // إزالة الكلاس لإعادة التصميم لوضعه الأصلي
            placeholder.src = '';                  // تفريغ مصدر الصورة
        })
    });

})();