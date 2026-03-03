import saudi from "../images/saudi.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={saudi} alt="Saudi Flag" className="flag-large" />
        <div>
          <h1>🚚 شركة المنطلق لنقل العفش داخل وخارج الرياض</h1>
          <p> أفضل شركة نقل أثاث داخل وخارج الرياض وجميع أنحاء المملكة بأسعار ممتازة وخدمة سريعة واحترافية. للتواصل 966566946256+</p>
        </div>
      </div>
    </header>
  );
}