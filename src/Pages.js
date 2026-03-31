import React from "react";

const G="#1a3a2a",LIME="#c8f060",CREAM="#f5f0e8",WARM="#e8d8c0",MUTED="#6b6b5a";

const pageCss = `
  .inner-page{padding-top:4.5rem;min-height:100vh;background:${CREAM}}
  .ip-hero{background:${G};padding:5rem 8vw 4rem;position:relative;overflow:hidden}
  .ip-hero-deco{position:absolute;top:-80px;right:-80px;width:400px;height:400px;border-radius:50%;border:1px solid rgba(200,240,96,.08)}
  .ip-label{font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(200,240,96,.6);margin-bottom:1rem}
  .ip-h1{font-family:'Inter',sans-serif;font-size:clamp(2.5rem,5vw,5rem);color:${CREAM};line-height:1.08;letter-spacing:-.02em;margin-bottom:1.2rem}
  .ip-h1 em{font-style:italic;color:${LIME}}
  .ip-lead{font-size:1.05rem;line-height:1.75;color:rgba(245,240,232,.65);max-width:55ch}
  .ip-body{padding:4rem 8vw}
  .ip-section{margin-bottom:4rem}
  .ip-section-title{font-family:'Inter',sans-serif;font-size:1.8rem;color:${G};margin-bottom:1rem;line-height:1.2}
  .ip-section-title em{font-style:italic;color:#7ab828}
  .ip-text{font-size:.95rem;line-height:1.8;color:${MUTED};margin-bottom:1rem}
  .ip-text strong{color:${G}}
  .ip-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin:1.5rem 0}
  .ip-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin:1.5rem 0}
  .ip-card{background:#fff;border-radius:1.2rem;padding:1.8rem;border:1px solid rgba(26,58,42,.07)}
  .ip-card.dark{background:${G}}
  .ip-card.lime{background:${LIME}}
  .ip-card-icon{font-size:2rem;margin-bottom:.8rem}
  .ip-card-title{font-weight:700;font-size:.95rem;color:${G};margin-bottom:.5rem}
  .ip-card.dark .ip-card-title{color:${LIME}}
  .ip-card.lime .ip-card-title{color:${G}}
  .ip-card-text{font-size:.85rem;line-height:1.65;color:${MUTED}}
  .ip-card.dark .ip-card-text{color:rgba(245,240,232,.6)}
  .ip-photo-row{display:grid;grid-template-columns:1.4fr 1fr;gap:1rem;margin:2rem 0}
  .ip-photo-row img{width:100%;object-fit:cover;border-radius:1.2rem}
  .ip-photo-row img:first-child{height:320px}
  .ip-photo-row img:last-child{height:320px}
  .ip-steps{display:flex;flex-direction:column;gap:.7rem;margin:1.5rem 0}
  .ip-step{display:flex;align-items:flex-start;gap:1rem;background:#fff;border-radius:.8rem;padding:1.1rem 1.3rem;border:1px solid rgba(26,58,42,.07)}
  .ip-step-num{background:${G};color:${LIME};width:1.8rem;height:1.8rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;flex-shrink:0;margin-top:.1rem}
  .ip-step-title{font-weight:700;font-size:.9rem;color:${G};margin-bottom:.2rem}
  .ip-step-text{font-size:.82rem;color:${MUTED};line-height:1.5}
  .ip-quote{background:${G};border-radius:1.2rem;padding:2.5rem;margin:2rem 0}
  .ip-quote-text{font-family:'Inter',sans-serif;font-size:1.6rem;color:${CREAM};font-style:italic;line-height:1.4;margin-bottom:.8rem}
  .ip-quote-attr{font-size:.78rem;color:rgba(245,240,232,.4);letter-spacing:.06em;text-transform:uppercase}
  .ip-highlight-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2rem 0}
  .ip-hl{background:#fff;border-radius:1rem;padding:1.5rem;text-align:center;border:1px solid rgba(26,58,42,.07)}
  .ip-hl-n{font-family:'Inter',sans-serif;font-size:3rem;color:${G};line-height:1}
  .ip-hl-l{font-size:.78rem;color:${MUTED};margin-top:.3rem}
  .ip-back{display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:600;color:rgba(245,240,232,.5);cursor:pointer;border:none;background:none;margin-bottom:2rem;letter-spacing:.04em;text-transform:uppercase}
  .ip-back:hover{color:${LIME}}
  .ip-cta{background:${LIME};color:${G};padding:1rem 2.2rem;border-radius:2rem;font-family:'DM Sans',sans-serif;font-size:1rem;font-weight:700;border:none;cursor:pointer;transition:all .2s;margin-top:1rem}
  .ip-cta:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(200,240,96,.3)}
  @media(max-width:820px){
    .ip-grid-2,.ip-grid-3,.ip-photo-row,.ip-highlight-row{grid-template-columns:1fr}
    .ip-photo-row img:first-child,.ip-photo-row img:last-child{height:220px}
  }
`;

export function WorkshopPage({ onBack, onAnmeldung }) {
  return (
    <div className="inner-page">
      <style>{pageCss}</style>
      <div className="ip-hero">
        <div className="ip-hero-deco" />
        <button className="ip-back" onClick={onBack}>← Zurück</button>
        <div className="ip-label">Unser Kernprogramm</div>
        <h1 className="ip-h1">Unternehmens-<em>Workshops</em></h1>
        <p className="ip-lead">Kein Vortrag, keine Besichtigung – echte Praxis. Wir bringen Schülerinnen und Schüler direkt in die Betriebe und lassen sie selbst erleben, was ein Beruf bedeutet.</p>
      </div>
      <div className="ip-body">
        <div className="ip-highlight-row">
          <div className="ip-hl"><div className="ip-hl-n">18</div><div className="ip-hl-l">Workshops im ersten Zyklus 2025</div></div>
          <div className="ip-hl"><div className="ip-hl-n">280+</div><div className="ip-hl-l">Schülerinnen & Schüler erreicht</div></div>
          <div className="ip-hl"><div className="ip-hl-n">30+</div><div className="ip-hl-l">Partnerunternehmen in Bürstadt</div></div>
        </div>

        <div className="ip-section">
          <h2 className="ip-section-title">Warum <em>kein Berufstag</em> wie jeder andere</h2>
          <p className="ip-text">Jobmessen und Infotage haben einen Platz – aber sie reichen nicht. Schülerinnen und Schüler sitzen, hören zu und vergessen. Was bleibt, ist das Gefühl: <strong>Das war nicht für mich relevant.</strong></p>
          <p className="ip-text">FitForFuture macht das anders. Kleine Gruppen von 5–8 Schülern gehen direkt in die Betriebe – nicht als Zuschauer, sondern als Teilnehmer. Sie packen mit an, reden mit Azubis auf Augenhöhe und erleben, wie ein Arbeitstag wirklich aussieht.</p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"1rem",margin:"2rem 0"}}><img src="/STEFF.png" alt="Workshop" style={{width:"100%",height:"200px",objectFit:"contain",borderRadius:".8rem",background:"#f5f0e8"}} /><img src="/SPA.png" alt="Workshop" style={{width:"100%",height:"200px",objectFit:"contain",borderRadius:".8rem",background:"#f5f0e8"}} /><img src="/VR.png" alt="VR" style={{width:"100%",height:"200px",objectFit:"contain",borderRadius:".8rem",background:"#f5f0e8"}} /><img src="/lederer.png" alt="Lederer" style={{width:"100%",height:"200px",objectFit:"contain",borderRadius:".8rem",background:"#f5f0e8"}} /></div>

        <div className="ip-section">
          <h2 className="ip-section-title">So läuft ein <em>Workshoptag</em> ab</h2>
          <div className="ip-steps">
            {[
              ["Klassenvorstellung","Wir stellen FitForFuture zu Beginn des Schuljahres in jeder 8., 9. und 10. Klasse vor – persönlich und auf Augenhöhe."],
              ["Anmeldung","Schülerinnen und Schüler tragen sich für bis zu 5 Wunschunternehmen ein. So können sie verschiedene Berufsfelder kennenlernen."],
              ["Abholung","Ein FFF-Teammitglied holt die Gruppe an der Schule ab und begleitet sie den gesamten Tag."],
              ["Praxis im Unternehmen","Kein Vortrag – echtes Ausprobieren. Praktische Tätigkeiten, Gespräche mit Azubis und Einblick in den Arbeitsalltag."],
              ["Rückkehr & Feedback","Nach dem Workshop bringen wir die Gruppe zurück. Anschließend füllen alle eine kurze digitale Umfrage aus."],
            ].map(([t,d],i)=>(
              <div className="ip-step" key={i}>
                <div className="ip-step-num">{i+1}</div>
                <div><div className="ip-step-title">{t}</div><div className="ip-step-text">{d}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="ip-grid-2">
          <div className="ip-card dark">
            <div className="ip-card-icon">🏭</div>
            <div className="ip-card-title">Für Schülerinnen & Schüler</div>
            <div className="ip-card-text">Echte Einblicke in Berufe – nicht aus dem Buch, sondern aus erster Hand. Viele haben durch einen Workshop erst gemerkt, welcher Beruf wirklich zu ihnen passt.</div>
          </div>
          <div className="ip-card dark">
            <div className="ip-card-icon">🤝</div>
            <div className="ip-card-title">Für Unternehmen</div>
            <div className="ip-card-text">Lokale Betriebe die händeringend nach Azubis suchen, bekommen direkte Kontakte zu motivierten Jugendlichen – bevor die Bewerbungsphase überhaupt beginnt.</div>
          </div>
        </div>

        <div className="ip-quote">
          <p className="ip-quote-text">„Ohne das praktische Erleben ist es schwer herauszufinden, ob der jeweilige Beruf zu einem passt."</p>
          <p className="ip-quote-attr">— FitForFuture</p>
        </div>

        <button className="ip-cta" onClick={onAnmeldung}>Jetzt Workshop-Platz sichern →</button>
      </div>
    </div>
  );
}

export function BeyondSchoolPage({ onBack }) {
  return (
    <div className="inner-page">
      <style>{pageCss}</style>
      <div className="ip-hero">
        <div className="ip-hero-deco" />
        <button className="ip-back" onClick={onBack}>← Zurück</button>
        <div className="ip-label">Ergänzende Bildung</div>
        <h1 className="ip-h1">Beyond-<em>School</em></h1>
        <p className="ip-lead">Das Schulsystem deckt nicht alles ab. Wir füllen die Lücken – mit Workshops zu Themen, die fürs Leben wirklich wichtig sind.</p>
      </div>
      <div className="ip-body">
        <div className="ip-section">
          <h2 className="ip-section-title">Was die Schule <em>nicht lehrt</em></h2>
          <p className="ip-text">Steuern, Bewerbungen, persönliche Stärken, politische Teilhabe – das alles braucht man im Leben. Aber im Lehrplan taucht es kaum auf. FitForFuture schließt diese Lücke mit konkreten, praxisnahen Workshops.</p>
        </div>

        <div className="ip-grid-3">
          {[
            ["💰","Finanzworkshop","Wie funktioniert ein Konto? Was sind Steuern? Was ist Altersvorsorge? Wir erklären das auf verständliche Weise – bevor die erste Gehaltsabrechnung kommt."],
            ["🧠","Persönlichkeitsworkshop","Eigene Stärken erkennen, Schwächen einschätzen und ein Bewusstsein für die eigene Wirkung entwickeln. Grundlage für jeden erfolgreichen Lebensweg."],
            ["🏛️","Demokratieworkshop","Politik ist keine Zuschauersportart. Wir besuchen z.B. den Landtag in Wiesbaden und erleben, wie Demokratie wirklich funktioniert."],
            ["📝","Bewerbungsworkshop","Anschreiben, Lebenslauf, Vorstellungsgespräch – wir üben das alles durch, damit kein Schüler unvorbereitet in seine erste Bewerbung startet."],
            ["👔","Style-Workshop","Erster Eindruck, Kleidung, Auftreten – wie man sich in beruflichen Situationen sicher und authentisch präsentiert."],
          ].map(([ic,t,d])=>(
            <div className="ip-card" key={t}>
              <div className="ip-card-icon">{ic}</div>
              <div className="ip-card-title">{t}</div>
              <div className="ip-card-text">{d}</div>
            </div>
          ))}
        </div>

        <div className="ip-quote">
          <p className="ip-quote-text">„Unser Ziel ist eine ganzheitliche Bildung, die ein erweitertes Bewusstsein für das Leben schafft."</p>
          <p className="ip-quote-attr">— FitForFuture</p>
        </div>
      </div>
    </div>
  );
}

export function MentoringPage({ onBack }) {
  return (
    <div className="inner-page">
      <style>{pageCss}</style>
      <div className="ip-hero">
        <div className="ip-hero-deco" />
        <button className="ip-back" onClick={onBack}>← Zurück</button>
        <div className="ip-label">Persönliche Begleitung</div>
        <h1 className="ip-h1">Mentoring-<em>Programm</em></h1>
        <p className="ip-lead">Mehr als Wissensweitergabe – ein echter Perspektivwechsel auf Augenhöhe. Mentoren aus unserem Netzwerk begleiten Schülerinnen und Schüler individuell über einen längeren Zeitraum.</p>
      </div>
      <div className="ip-body">
        <div className="ip-section">
          <h2 className="ip-section-title">Warum <em>Mentoring?</em></h2>
          <p className="ip-text">Nach unseren Workshops haben wir immer wieder Anfragen bekommen: <strong>„Kannst du mir beim Bewerbungsschreiben helfen?"</strong> Diese Frage hat uns gezeigt, wie groß der Bedarf ist – besonders bei Jugendlichen, die aus dem Elternhaus nicht die bestmögliche Unterstützung erfahren.</p>
          <p className="ip-text">Ein Mentor ist kein Lehrer und kein Elternteil. Er ist jemand der den eigenen Weg schon gegangen ist – und ehrlich, offen und auf Augenhöhe darüber reden kann.</p>
        </div>

        <div className="ip-grid-2">
          <div className="ip-card">
            <div className="ip-card-icon">🎯</div>
            <div className="ip-card-title">Für Mentees</div>
            <div className="ip-card-text">Individuelle Begleitung bei Berufs- und Studienwahl, Bewerbungen, Selbstorganisation und persönlichen Fragen. Jemand der zuhört – und hilft.</div>
          </div>
          <div className="ip-card">
            <div className="ip-card-icon">💡</div>
            <div className="ip-card-title">Für Mentoren</div>
            <div className="ip-card-text">Neue Einblicke, frische Impulse und das gute Gefühl, jemanden auf seinem Weg zu begleiten. Aus Erfahrung wird Inspiration.</div>
          </div>
        </div>

        <div className="ip-section">
          <h2 className="ip-section-title">Was <em>Mentoring</em> bedeutet</h2>
          <div className="ip-steps">
            {[
              ["Persönliche Treffen","Mentor und Mentee treffen sich regelmäßig – selbstständig, flexibel und auf Augenhöhe."],
              ["Einblicke in echte Lebensläufe","Mentoren teilen ihren eigenen Werdegang – ehrlich, ungeschönt und inspirierend."],
              ["Konkrete Unterstützung","Hilfe bei Bewerbungen, Studienauswahl, Vorbereitung auf Vorstellungsgespräche."],
              ["Persönliche Themen","Motivation, Selbstorganisation, Unsicherheiten – alles was bewegt, darf besprochen werden."],
            ].map(([t,d],i)=>(
              <div className="ip-step" key={i}>
                <div className="ip-step-num">{i+1}</div>
                <div><div className="ip-step-title">{t}</div><div className="ip-step-text">{d}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="ip-quote">
          <p className="ip-quote-text">„Du wirst gesehen. Du wirst begleitet. Du bist wichtig."</p>
          <p className="ip-quote-attr">— FitForFuture Mentoring</p>
        </div>

        <div className="ip-grid-3" style={{marginTop:"2rem"}}>
          {[["🤝","Verbindet Generationen","Junge und Erfahrene lernen voneinander – ein echter Austausch."],["🚪","Öffnet Türen","Netzwerke, die sonst nicht zugänglich wären."],["🌱","Lässt wachsen","Potenziale die sonst verborgen geblieben wären, kommen ans Licht."]].map(([ic,t,d])=>(
            <div className="ip-card" key={t}>
              <div className="ip-card-icon">{ic}</div>
              <div className="ip-card-title">{t}</div>
              <div className="ip-card-text">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
