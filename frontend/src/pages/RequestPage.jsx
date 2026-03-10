import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { applicationService } from "../services/api";

function RequestPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    productType: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await applicationService.sendApplication(form);
    alert("Заявка отправлена (демо-режим)");
  };

  return (
    <section>
      <SectionTitle
        title="Оформление заявки"
        subtitle="Заполните форму для предварительного расчёта заказа."
      />

      <form className="form card" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Название компании"
          value={form.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Контактное лицо"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productType"
          placeholder="Тип продукции"
          value={form.productType}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Комментарий к заказу"
          value={form.comment}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Отправить заявку
        </button>
      </form>
    </section>
  );
}

export default RequestPage;
