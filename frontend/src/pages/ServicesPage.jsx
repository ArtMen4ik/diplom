import SectionTitle from "../components/SectionTitle";
import { services } from "../data/mockData";

function ServicesPage() {
  return (
    <section>
      <SectionTitle
        title="Услуги"
        subtitle="Основные направления деятельности компании Артфлекс22."
      />

      <div className="grid">
        {services.map((service) => (
          <article className="card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
