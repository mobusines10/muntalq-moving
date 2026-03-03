export default function Map() {
  return (
    <div className="map-container">
      <h3>📍 موقعنا </h3>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000.000000000002!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2z2KfZhNiz2YYg2YTYp9mE2Lkg2YfYp9mE2KfZhNmC2KfYsdin2Kkg2KfZhNiz2YYg2YTYp9mE2Lkg2KfZhNmC2Lkg2YbYiNio!5e0!3m2!1sar!2seg!4v0000000000000"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}