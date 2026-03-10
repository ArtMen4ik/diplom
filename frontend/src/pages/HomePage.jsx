import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

function HomePage() {
  return (
    <section>
      <SectionTitle
        title="Современные решения для флексографической печати"
        subtitle="Компания Артфлекс22 предлагает услуги печати упаковки, этикеток и полиграфической продукции для бизнеса."
      />

      <div className="hero-box">
        <div className="card">
          <h3>Качественная печать</h3>
          <p>Современное оборудование и контроль качества на каждом этапе.</p>
        </div>
        <div className="card">
          <h3>Индивидуальный подход</h3>
          <p>Подбор решений под задачи конкретного клиента.</p>
        </div>
        <div className="card">
          <h3>Быстрая обратная связь</h3>
          <p>Оперативная обработка заявок через сайт.</p>
        </div>
      </div>

      <div className="actions">
        <Link className="button" to="/services">
          Посмотреть услуги
        </Link>
        <Link className="button button--secondary" to="/request">
          Оставить заявку
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
