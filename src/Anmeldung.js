import { useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);
const COMPANIES = ["Stadtmüller","ElektroBrenner","Rewe","Agrarmarkt Engert","Köbig","Furniture","Rechtsanwalt","BASF","Back- und Brauhaus Drayß","Autohaus Jakob und Morweiser","Autohaus Kohl","Reisebüro","Immowien","Versicherung","Persönlichkeitsworkshop","Finanzworkshop","Bewerbungscoaching","RhConstruction","Brillenschlange","Caritas","Mittendrin","Kita St. Peter","Sima Bau","Demokratieworkshop","GS Wärmesysteme","Bäcker Blüm","VR Bank","Sparkasse","KVHS Workshops"];
const SCHULARTEN = ["Hauptschule","Realschule","Gymnasium"];
const G="#1a3a2a",LIME="#c8f060",CREAM="#f5f0e8",MUTED="#6b6b5a";
export default function Anmeldung({ onSuccess }) {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [klasse, setKlasse] = useState("");
  const [schulart, setSchulart] = useState("");
  const [lehrer, setLehrer] = useState("");
  const [handy, setHandy] = useState("");
  const [selected, setSelected] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const toggle = useCallback((c) => setSelected(p => p.includes(c) ? p.filter(x=>x!==c) : p.length<5 ? [...p,c] : p), []);
  const submit = async () => {
    const e = {};
    if (!vorname.trim()) e.vorname="Pflichtfeld";
    if (!nachname.trim()) e.nachname="Pflichtfeld";
    if (!klasse.trim()) e.klasse="Pflichtfeld";
    if (!schulart) e.schulart="Bitte wählen";
    if (!handy.trim()) e.handy="Pflichtfeld";
    if (!selected.length) e.companies="Bitte wählen";
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    const {error} = await supabase.from("anmeldungen").insert([{vorname,nachname,klasse,schulart,lehrer,handy,companies:selected.join(", "),status:"neu"}]);
    setSubmitting(false);
    if (!error) onSuccess({vorname,nachname,klasse,schulart,companies:selected});
    else alert("Fehler. Bitte nochmal versuchen.");
  };
  const s = {field:{marginBottom:"1rem"},label:{display:"block",fontSize:".8rem",fontWeight:600,color:G,marginBottom:".4rem"},input:{width:"100%",padding:".65rem .9rem",border:`1.5px solid rgba(26,58,42,.15)`,borderRadius:".65rem",fontFamily:"'DM Sans',sans-serif",fontSize:".9rem",color:G,background:"#fff",outline:"none"},err:{fontSize:".75rem",color:"#c0392b",marginTop:".25rem"}};
  return (
    <div style={{background:CREAM,minHeight:"100vh",paddingTop:"4.5rem"}}>
      <div style={{maxWidth:680,margin:"0 auto",padding:"3rem 2rem 6rem"}}>
        <h1 style={{fontFamily:"'Instrument Serif',serif",fontSize:"2.4rem",color:G,marginBottom:".6rem"}}>Workshop-<em style={{fontStyle:"italic",color:"#7ab828"}}>Anmeldung</em></h1>
        <p style={{fontSize:".95rem",color:MUTED,lineHeight:1.65,marginBottom:"2.5rem"}}>Melde dich für Workshops an. Du kannst bis zu <strong>5 Unternehmen</strong> wählen.</p>
        <div style={{background:"#fff",borderRadius:"1.2rem",padding:"2rem",marginBottom:"1.2rem",border:"1px solid rgba(26,58,42,.08)"}}>
          <div style={{fontWeight:700,marginBottom:"1.4rem"}}>1. Persönliche Angaben</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
            <div style={s.field}><label style={s.label}>Vorname *</label><input style={{...s.input,borderColor:errors.vorname?"#c0392b":"rgba(26,58,42,.15)"}} value={vorname} onChange={e=>setVorname(e.target.value)} placeholder="Max" />{errors.vorname&&<div style={s.err}>{errors.vorname}</div>}</div>
            <div style={s.field}><label style={s.label}>Nachname *</label><input style={{...s.input,borderColor:errors.nachname?"#c0392b":"rgba(26,58,42,.15)"}} value={nachname} onChange={e=>setNachname(e.target.value)} placeholder="Mustermann" />{errors.nachname&&<div style={s.err}>{errors.nachname}</div>}</div>
            <div style={s.field}><label style={s.label}>Schulart *</label><select style={{...s.input,borderColor:errors.schulart?"#c0392b":"rgba(26,58,42,.15)"}} value={schulart} onChange={e=>setSchulart(e.target.value)}><option value="">Bitte wählen…</option>{SCHULARTEN.map(x=><option key={x}>{x}</option>)}</select>{errors.schulart&&<div style={s.err}>{errors.schulart}</div>}</div>
            <div style={s.field}><label style={s.label}>Klasse *</label><input style={{...s.input,borderColor:errors.klasse?"#c0392b":"rgba(26,58,42,.15)"}} value={klasse} onChange={e=>setKlasse(e.target.value)} placeholder="z.B. 9b" />{errors.klasse&&<div style={s.err}>{errors.klasse}</div>}</div>
            <div style={s.field}><label style={s.label}>Lehrkraft (optional)</label><input style={s.input} value={lehrer} onChange={e=>setLehrer(e.target.value)} placeholder="Frau Müller" /></div>
            <div style={s.field}><label style={s.label}>Handynummer *</label><input style={{...s.input,borderColor:errors.handy?"#c0392b":"rgba(26,58,42,.15)"}} value={handy} onChange={e=>setHandy(e.target.value)} placeholder="+49 176 …" />{errors.handy&&<div style={s.err}>{errors.handy}</div>}</div>
          </div>
        </div>
        <div style={{background:"#fff",borderRadius:"1.2rem",padding:"2rem",marginBottom:"1.2rem",border:"1px solid rgba(26,58,42,.08)"}}>
          <div style={{fontWeight:700,marginBottom:"1rem"}}>2. Wunsch-Unternehmen wählen</div>
          <div style={{fontSize:".78rem",color:MUTED,marginBottom:".7rem"}}>Ausgewählt: <strong>{selected.length}</strong> / 5 {errors.companies&&<span style={{color:"#c0392b"}}>{errors.companies}</span>}</div>
          {selected.length===5&&<div style={{background:"rgba(200,240,96,.15)",border:"1px solid rgba(122,184,40,.3)",borderRadius:".6rem",padding:".6rem .9rem",fontSize:".8rem",color:"#3b6d11",marginBottom:".7rem"}}>✓ Maximum erreicht</div>}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".6rem",maxHeight:360,overflowY:"auto"}}>
            {COMPANIES.map(c=>(
              <button key={c} onClick={()=>toggle(c)} style={{padding:".6rem .9rem",borderRadius:".65rem",fontSize:".82rem",fontWeight:selected.includes(c)?600:500,border:`1.5px solid ${selected.includes(c)?G:"rgba(26,58,42,.15)"}`,background:selected.includes(c)?G:"#fff",color:selected.includes(c)?LIME:MUTED,cursor:selected.length===5&&!selected.includes(c)?"not-allowed":"pointer",opacity:selected.length===5&&!selected.includes(c)?.4:1,textAlign:"left",display:"flex",alignItems:"center",gap:".5rem"}}>
                <span style={{width:"1rem",height:"1rem",borderRadius:"50%",border:`1.5px solid ${selected.includes(c)?LIME:"currentColor"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:".6rem",background:selected.includes(c)?LIME:"transparent",color:selected.includes(c)?G:"currentColor"}}>{selected.includes(c)?"✓":""}</span>{c}
              </button>
            ))}
          </div>
        </div>
        <button onClick={submit} disabled={submitting} style={{width:"100%",padding:"1rem",background:G,color:LIME,border:"none",borderRadius:".8rem",fontFamily:"'DM Sans',sans-serif",fontSize:"1rem",fontWeight:700,cursor:"pointer",marginTop:".5rem",opacity:submitting?.5:1}}>
          {submitting?"Wird gespeichert…":"Anmeldung absenden →"}
        </button>
      </div>
    </div>
  );
}
