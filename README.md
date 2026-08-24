# 📊 لوحة تحكم إدارية (Admin Dashboard)

لوحة تحكم إدارية متعددة الصفحات (Multi-Page Application) مبنية باستخدام **Vite** و **Handlebars** و **SCSS** و **Vanilla JavaScript**. تم تصميمها باللغة العربية (RTL) بهيكل منظم يعتمد على إعادة استخدام المكونات والتنسيق المعياري.

---

## 🚀 التقنيات المستخدمة (Tech Stack)

* **Build Tool & Bundler:** [Vite](https://vitejs.dev/) - لتجربة تطوير سريعة وتجميع أمثل للملفات.
* **HTML Templating:** [Handlebars (vite-plugin-handlebars)](https://handlebarsjs.com/) - لتقسيم الواجهة إلى مكونات قابلة لإعادة الاستخدام (Partials & Layouts).
* **Styles / CSS:**
  * [Sass (SCSS)](https://sass-lang.com/) بتنظيم معياري (BEM-like classes / Architecture).
  * [PostCSS Preset Env](https://preset-env.cssdb.org/) للتوافقية مع مختلف المتصفحات.
  * [Normalize.css](https://necolas.github.io/normalize.css/) لتوحيد الأنماط الأساسية.
* **JavaScript:** Vanilla JavaScript (ES Modules) بدون أطر عمل ثقيلة لتحقيق خفة وسرعة في الأداء.
* **Data Visualization:** [Chart.js](https://www.chartjs.org/) لتمثيل بيانات المبيعات برسم بياني تفاعلي.

---

## 🛠 المميزات والصفحات المنفذة (Implemented Features)

- **بنية متعددة الصفحات (Multi-Page Setup):** إعداد Vite Build لإنتاج صفحات متعددة بشكل مستقل:
  - الصفحة الرئيسية / الإحصائيات (`index.html`)
  - إدارة المنتجات وإضافة منتج (`products.html`, `add-product.html`)
  - إدارة المستخدمين وإضافة مستخدم (`users.html`, `add-user.html`)
  - إدارة الطلبات (`orders.html`)
- **نظام القوالب (Modular Partials):** عزل القائمة الجانبية (Sidebar)، الجداول، الترويسات، والتنقل داخل مجلد `src/partials` لتجنب تكرار الكود (DRY Principle).
- **تصميم واجهات مخصص (Custom SCSS):** تنظيم الأنماط داخل مجلدات مخصصة (`components`, `base`, `pages`, `utilities`) لسهولة الصيانة والتوسع.
- **تفاعلية الواجهة (DOM Interactions):**
  - رسم بياني مخصص للمبيعات باستخدام Chart.js مع ضبط المحاور بما يتناسب مع الواجهة.
  - إغلاق التنبيهات والبانرات مع تأثير حركي سلس (Smooth Collapse Transitions).
  - تفاعلية رفع الصور ومعاينتها في نموذج إضافة منتج.
  - دعم أصيل للغة العربية والاتجاه من اليمين لليسار (RTL).

---

## 📂 هيكل المشروع (Project Structure)

```text
├── src/
│   ├── partials/         # مكونات وقوالب Handlebars المشتركة (Sidebar, Layout, Tables)
│   ├── scripts/          # منطق الجافاسكربت الخاص بالصفحات (Chart, Upload, Events)
│   └── main.js           # نقطة الدخول الرئيسية لملفات الجافاسكربت
├── public/
│   ├── styles/           # ملفات SCSS مقسمة معمارياً (base, components, pages, config)
│   ├── images/           # الأصول والصور
│   └── fonts/            # الخطوط المحلية
├── index.html            # الصفحة الرئيسية (Dashboard)
├── products.html         # صفحة المنتجات
├── add-product.html      # صفحة إضافة منتج
├── users.html            # صفحة المستخدمين
├── add-user.html         # صفحة إضافة مستخدم
├── orders.html           # صفحة الطلبات
├── vite.config.js        # إعدادات Vite ومسارات الصفحات وقوالب Handlebars
└── package.json
