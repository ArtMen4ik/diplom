import SectionTitle from "../components/SectionTitle";
import { portfolioItems } from "../data/mockData";

function PortfolioPage() {
  return (
    <section>
      <SectionTitle
        title="Портфолио"
        subtitle="Примеры продукции, изготовленной компанией."
      />

      <div className="grid">
        {portfolioItems.map((item) => (
          <article className="card" key={item.id}>
            <div className="portfolio-placeholder"></div>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
