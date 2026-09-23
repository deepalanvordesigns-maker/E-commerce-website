import "./BrandStory.css";

export default function BrandStory() {
  return (
    <section className="story">
      <div className="story-text">
        <h2>Every pair carries a story — of belief, comfort, and confidence.</h2>
        <p>Use #MyZenStockLegacy and you could be featured.</p>
        <button className="story-btn">Reading authentic voices</button>
      </div>

      <div className="story-img">
        <div className="imog">
          <img className="stor" src="/images/brand1.webp" alt="Brand story" />
        </div>
        <div className="imog">
          <img className="stor" src="/images/brand2.webp" alt="Brand story" />
        </div>
        <div className="imog">
          <img className="stor" src="/images/brand3.webp" alt="Brand story" />
        </div>
        <div className="imog">
          <img className="stor" src="/images/brand4.webp" alt="Brand story" />
        </div>
      </div>
    </section>
  );
}