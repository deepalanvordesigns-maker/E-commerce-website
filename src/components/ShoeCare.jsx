import "./ShoeCare.css";

const steps = [
  { icon: "🧽", text: "Remove dust or mild dirt using a dry cloth" },
  { icon: "💧", text: "Remove excess dirt using a mild wet cloth" },
  { icon: "🧴", text: "If the shoes get wet, wipe them with a dry cloth" },
  { icon: "🌬️", text: "Always air-dry the shoes" },
];

const donts = [
  { icon: "🚫", text: "Machine Wash or Tumble Dry" },
  { icon: "🧪", text: "Use harsh detergents" },
  { icon: "✨", text: "Use polish or shiner" },
  { icon: "🪮", text: "Don't scrub using harsh/rough object" },
];

export default function ShoeCare() {
  return (
    <section className="sc-wrap">
      <div className="sc-card">
        <h2>Shoe care &amp; info</h2>
        <p className="sc-sub">Embrace our 4-step routine to keep your shoes looking their best.</p>

        <div className="sc-steps">
          {steps.map((s, i) => (
            <div className="sc-step" key={i}>
              <div className="sc-icon">{s.icon}</div>
              <p>
                <strong>{i + 1}.</strong> {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="sc-donts">
          {donts.map((d, i) => (
            <div className="sc-dont" key={i}>
              <span className="sc-dont-icon">{d.icon}</span>
              <div>
                <span className="sc-dont-label">DON'T</span>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}