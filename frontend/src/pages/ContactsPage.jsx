import SectionTitle from "../components/SectionTitle";

function ContactsPage() {
  return (
    <section>
      <SectionTitle
        title="Контакты"
        subtitle="Свяжитесь с компанией Артфлекс22 любым удобным способом."
      />

      <div className="grid contacts-grid">
        <div className="card">
          <h3>Контактная информация</h3>
          <p>Телефон: +7 (900) 123-45-67</p>
          <p>Email: info@artflex22.ru</p>
          <p>Адрес: г. Барнаул, ул. Промышленная, д. 10</p>
          <p>График работы: Пн–Пт, 09:00–18:00</p>
        </div>

        <div className="card">
          <h3>Карта</h3>
          <div className="map-placeholder">Здесь будет карта</div>
        </div>
      </div>
    </section>
  );
}

export default ContactsPage;
