


import "./BestSelling.css";

const brands = [
  { name: "Nike", img: "/images/brands/nike.jpg" },
  { name: "Adidas", img: "/images/brands/adids.jpg" },
  { name: "Puma", img: "/images/brands/puma.jpg" },
  { name: "Reebok", img: "/images/brands/reebok.jpg" },
  { name: "Bata", img: "/images/brands/bata.jpg" },
  { name: "Skechers", img: "/images/brands/snakers.jpg" },
  { name: "Woodland", img: "/images/brands/woorld.jpg" },
  { name: "Crocs", img: "/images/brands/croses.jpg" },
  { name: "New Balance", img: "/images/brands/newbalance.jpg" },
  { name: "Red Chief", img: "/images/brands/red.jpg" },
];

export default function BestSelling() {
  return (
    <>
      <section className="section">
        <h2>Top Brands</h2>
      </section>

      <section className="product-brand">
        <div className="brand-list">
          {brands.map((b) => (
            <div className="brand-card" key={b.name}>
              <img src={b.img} alt={b.name} />
              <p>{b.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}