function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
