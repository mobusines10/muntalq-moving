import React from "react";
import { FaTruck, FaBoxes, FaTools, FaPlusCircle } from "react-icons/fa";

export default function Services() {
  return (
    <div className="services-section">
      <h2 className="services-title">
        خدماتنا <span className="services-subtitle">/ Our Services</span>
      </h2>
      <div className="services-container">

        {/* النقل */}
        <div className="service-card transport">
          <h3><FaTruck style={{ marginLeft: "8px" }} /> النقل</h3>
          <p>
            نقدم خدمة نقل الأثاث والممتلكات بأعلى درجات الأمان والاحترافية.
            نقوم بتغليف الأثاث بعناية لضمان حمايته أثناء النقل، ونغطي جميع مراحل النقل
            من منازل العملاء إلى المكاتب أو أي وجهة داخل وخارج الرياض، وجميع أنحاء المملكة.
            فريقنا مدرب على التعامل مع كل أنواع الأثاث والمقتنيات الكبيرة والصغيرة.
          </p>
        </div>

        {/* التغليف */}
        <div className="service-card packaging">
          <h3><FaBoxes style={{ marginLeft: "8px" }} /> التغليف</h3>
          <p>
            نوفر تغليف احترافي لجميع أنواع الأثاث والأجهزة والمقتنيات الحساسة.
            نستخدم مواد تغليف عالية الجودة لتجنب أي خدوش أو تلف أثناء النقل،
            ونقدم خيارات متعددة حسب طبيعة كل قطعة، لضمان وصولها بحالة ممتازة
            إلى موقعها الجديد.
          </p>
        </div>

        {/* التركيب */}
        <div className="service-card installation">
          <h3><FaTools style={{ marginLeft: "8px" }} /> التركيب</h3>
          <p>
            نقدم خدمات تركيب الأثاث والمعدات بعد النقل سواء كان داخل المنزل أو المكتب.
            فريقنا متخصص في تركيب جميع أنواع الأثاث بشكل سريع ودقيق،
            مع التأكد من تثبيت كل قطعة بطريقة آمنة ومحترفة لتوفير راحة كاملة للعملاء.
          </p>
        </div>

        {/* خدمات إضافية */}
        <div className="service-card others">
          <h3><FaPlusCircle style={{ marginLeft: "8px" }} /> خدمات إضافية</h3>
          <p>
            نوفر خدمات دعم إضافية حسب طلب العميل، مثل تفكيك الأثاث قبل النقل،
            ترتيب الأثاث بعد التركيب، والتخزين المؤقت عند الحاجة.
            نحرص على تقديم تجربة متكاملة تجعل نقل الأثاث سهلاً ومرنًا لكل عملائنا.
          </p>
        </div>

      </div>
    </div>
  );
}