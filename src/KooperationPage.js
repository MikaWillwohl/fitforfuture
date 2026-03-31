import React from "react";
const G="#1a3a2a",LIME="#c8f060",CREAM="#f5f0e8",WARM="#e8d8c0",MUTED="#6b6b5a";
const pageCss = `
  .inner-page{padding-top:4.5rem;min-height:100vh;background:${CREAM}}
  .ip-hero{background:${G};padding:5rem 8vw 4rem;position:relative;overflow:hidden}
  .ip-hero-deco{position:absolute;top:-80px;right:-80px;width:400px;height:400px;border-radius:50%;border:1px solid rgba(200,240,96,.08)}
  .ip-label{font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(200,240,96,.6);margin-bottom:1rem}
  .ip-h1{font-family:'Inter',sans-serif;font-size:clamp(2.5rem,5vw,5rem);color:${CREAM};line-height:1.08;letter-spacing:-.02em;margin-bottom:1.2rem;font-weight:800}
  .ip-h1 em{font-style:italic;color:${LIME}}
  .ip-lead{font-size:1.05rem;line-height:1.75;color:rgba(245,240,232,.65);max-width:55ch}
  .ip-body{padding:4rem 8vw}
  .ip-back{display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:600;color:rgba(245,240,232,.5);cursor:pointer;border:none;background:none;margin-bottom:2rem;letter-spacing:.04em;text-transform:uppercase}
  .ip-back:hover{color:${LIME}}
  .koop-card{background:#fff;border-radius:1.4rem;padding:2.5rem;margin-bottom:2rem;border:1px solid rgba(26,58,42,.08);display:grid;grid-template-columns:1fr 2fr;gap:3rem;align-items:start}
  .koop-logo-box{background:${G};border-radius:1rem;padding:2rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem}
  .koop-logo-icon{font-size:3rem}
  .koop-logo-name{font-size:.85rem;font-weight:700;color:${LIME};letter-spacing:.04em;text-align:center;line-height:1.3}
  .koop-badge{background:;border:none;border-radius:2rem;padding:.4rem 1rem;font-size:.82rem;font-weight:800;color:;margin-top:.5rem}
  .koop-link{display:inline-flex;align-items:center;gap:.4rem;background:${LIME};color:${G};padding:.5rem 1rem;border-radius:2rem;font-size:.8rem;font-weight:700;text-decoration:none;margin-top:1rem;transition:all .2s}
  .koop-link:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(200,240,96,.4)}
  .koop-title{font-size:1.4rem;font-weight:800;color:${G};margin-bottom:.5rem}
  .koop-role{font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7ab828;margin-bottom:1rem}
  .koop-text{font-size:.92rem;line-height:1.8;color:${MUTED};margin-bottom:1rem}
  .koop-text strong{color:${G}}
  .koop-facts{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.2rem}
  .koop-fact{background:rgba(26,58,42,.05);border-radius:.5rem;padding:.4rem .8rem;font-size:.78rem;font-weight:600;color:${G}}
  .person-card{background:${G};border-radius:1rem;padding:1.5rem;margin-top:1.5rem;display:flex;gap:1.2rem;align-items:flex-start}
  .person-avatar{background:${LIME};color:${G};width:2.8rem;height:2.8rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1rem;flex-shrink:0}
  .person-name{font-weight:700;color:${CREAM};font-size:.95rem}
  .person-role{font-size:.78rem;color:rgba(200,240,96,.6);margin-top:.2rem}
  .person-text{font-size:.82rem;color:rgba(245,240,232,.55);line-height:1.6;margin-top:.5rem}
  @media(max-width:820px){.koop-card{grid-template-columns:1fr}}
`;
export default function KooperationPage({ onBack }) {
  return (
    <div className="inner-page">
      <style>{pageCss}</style>
      <div className="ip-hero">
        <div className="ip-hero-deco" />
        <button className="ip-back" onClick={onBack}>← Zurück</button>
        <div className="ip-label">Unsere Partner</div>
        <h1 className="ip-h1">Kooperationen & <em>Schirmherrschaft</em></h1>
        <p className="ip-lead">FitForFuture funktioniert nicht allein. Starke Partner vor Ort machen es möglich, dass Schülerinnen und Schüler echte Chancen bekommen.</p>
      </div>
      <div className="ip-body">

        {/* EKS */}
        <div className="koop-card">
          <div className="koop-logo-box">
            <div className="koop-logo-icon">🏫</div>
            <div className="koop-logo-name">Erich-Kästner-Schule Bürstadt</div>
            <div className="koop-badge">Partnerschule</div>
            <a className="koop-link" href="https://erich-kaestner.buerstadt.schule.hessen.de" target="_blank" rel="noreferrer">Website besuchen ↗</a>
          </div>
          <div>
            <div className="koop-role">Unsere Partnerschule</div>
            <div className="koop-title">Erich-Kästner-Schule Bürstadt</div>
            <p className="koop-text">Die Erich-Kästner-Schule (EKS) ist die kooperative Gesamtschule in Bürstadt – mit Hauptschul-, Realschul- und Gymnasialzweig unter einem Dach und rund <strong>1.050 Schülerinnen und Schülern</strong>. Genau das richtige Umfeld für FitForFuture.</p>
            <p className="koop-text">Die EKS ermöglicht uns, zu Beginn jedes Schuljahres in die Klassen 8, 9 und 10 zu gehen, das Projekt vorzustellen und die Workshops zu koordinieren. Drei Stunden am Vormittag (9–12 Uhr) sowie am Mittag (12–15 Uhr) stellt die Schule uns und den Schülerinnen und Schülern zur Verfügung.</p>
            <p className="koop-text">Die Zusammenarbeit mit der EKS ist das Fundament unseres Projekts – ohne diese Partnerschaft wäre FitForFuture nicht möglich.</p>
            <div className="koop-facts">
              <span className="koop-fact">🎓 ~1.050 Schüler</span>
              <span className="koop-fact">📚 3 Schulzweige</span>
              <span className="koop-fact">📍 Wolfstraße, Bürstadt</span>
              <span className="koop-fact">📞 06206 / 8611</span>
            </div>
          </div>
        </div>

        {/* Bürgerstiftung */}
        <div className="koop-card">
          <div className="koop-logo-box">
            <div className="koop-logo-icon">🏛️</div>
            <div className="koop-logo-name">Bürgerstiftung Bürstadt</div>
            <div className="koop-badge">Schirmherrschaft</div>
            <a className="koop-link" href="https://www.buergerstiftung-buerstadt.de" target="_blank" rel="noreferrer">Website besuchen ↗</a>
          </div>
          <div>
            <div className="koop-role">Schirmherrschaft & aktive Unterstützung</div>
            <div className="koop-title">Bürgerstiftung Bürstadt</div>
            <p className="koop-text">Die Bürgerstiftung Bürstadt ist eine private Initiative, die sich dem Wohl der Gemeinde und ihrer Einwohner verpflichtet hat – unabhängig von Verwaltung und Politik. Sie fördert Projekte, die <strong>außerhalb staatlicher Pflichtaufgaben</strong> stehen: Kultur, Bildung, soziales Engagement.</p>
            <p className="koop-text">FitForFuture ist genau das Projekt, das die Bürgerstiftung aktiv unterstützt und begleitet. Nicht nur finanziell, sondern auch mit Netzwerk, Erfahrung und persönlichem Engagement. Ohne die Bürgerstiftung wäre FitForFuture nie entstanden.</p>
            <div className="koop-facts">
              <span className="koop-fact">📍 Kettelerstraße 53, Bürstadt</span>
              <span className="koop-fact">🌐 buergerstiftung-buerstadt.de</span>
            </div>
            <div className="person-card">
              <div className="person-avatar">RE</div>
              <div>
                <div className="person-name">Rüdiger Engert</div>
                <div className="person-role">Vorsitzender des Vorstandes · Bürgerstiftung Bürstadt</div>
                <p className="person-text">Rüdiger Engert ist Erster Vorsitzender der Bürgerstiftung Bürstadt und war federführend dabei, FitForFuture von Anfang an zu begleiten und zu ermöglichen. Als Unternehmer und engagierter Bürger bringt er Netzwerk, Erfahrung und echtes Herzblut in die Zusammenarbeit ein.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
