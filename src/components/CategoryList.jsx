import "./CategoryList.css";

const categories = [
    { name: " MEN SHOES", img: "/images/men.jpg" },
    { name: "WOMEN SHOES", img: "/images/women.jpg" },
    { name: " KIDS SHOES", img: "/images/kids.jpg" },
    { name: " SPORTS SHOES", img: "/images/sport.jpg" },
       { name: "CLOGS SHOES", img: "/images/cloges.jpg" },
        { name: "FORMAL SHOES ", img: "/images/formal.jpg" },
          { name: "SEMI FORMAL SHOES ", img: "/images/semi.jpg" },
            { name: "LOAFERS SHOES", img: "/images/lofer.jpg" },
              { name: "HI-NECK SHOES ", img: "/images/hi.jpg" },
];

export default function CategoryList() {
    return (
        <section className="categories">
            {categories.map((c) => (
                <div className="cat-card" key={c.name}>
                    <img src={c.img} alt={c.name} />
                    <p>{c.name}</p>
                </div>
            ))}
        </section>
    );
}