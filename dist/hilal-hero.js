import { css as g, svg as n, html as c, LitElement as x } from "lit";
import { property as b } from "lit/decorators.js";
const u = g`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`, h = {
  ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "رمضان كريم", orn: "lantern" },
  eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "عيدكم مبارك", orn: "star" },
  national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "اليوم الوطني", orn: "palm" },
  founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "يوم التأسيس", orn: "geo" },
  friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "الجمعة البيضاء", orn: "tag" }
}, $ = (a) => {
  var t;
  return h[String((Array.isArray(a) ? (t = a[0]) == null ? void 0 : t.value : a) ?? "ramadan")] ?? h.ramadan;
}, y = g`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`, f = (a, t, r, e) => n`<g transform="translate(${a} 0)"><g class="sway" style="animation-delay:${e}s"><line x1="0" y1="0" x2="0" y2="${t}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${t}) scale(${r})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`, d = (a, t, r, e) => n`<path class="tw" style="animation-delay:${e}s;transform-box:fill-box;transform-origin:center" d="M${a} ${t - r}L${a + r * 0.3} ${t - r * 0.3}L${a + r} ${t}L${a + r * 0.3} ${t + r * 0.3}L${a} ${t + r}L${a - r * 0.3} ${t + r * 0.3}L${a - r} ${t}L${a - r * 0.3} ${t - r * 0.3}Z" fill="currentColor"/>`;
function v(a) {
  const t = [[40, 300, 6, 0], [120, 230, 4, 0.6], [230, 330, 5, 1.2], [300, 250, 3, 0.3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([e, o, i, p]) => d(e, o, i, p)), r = a === "lantern" ? n`${f(70, 110, 2.1, 0)}${f(170, 210, 1.6, 0.8)}${f(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${t}` : a === "star" ? n`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${t}${d(250, 120, 10, 0.4)}${d(110, 160, 8, 1)}` : a === "palm" ? n`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((e) => n`<path transform="rotate(${e} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${t}` : a === "geo" ? n`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((e) => n`<rect x="${120 + e * 14}" y="${150 + e * 14}" width="${180 - e * 28}" height="${180 - e * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${t}` : n`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${t}`;
  return c`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${r}</svg>`;
}
const l = (a) => String(a && typeof a == "object" ? a[(document.documentElement.lang || "ar").slice(0, 2)] ?? a.ar ?? "" : a ?? "");
var w = Object.defineProperty, k = (a, t, r, e) => {
  for (var o = void 0, i = a.length - 1, p; i >= 0; i--)
    (p = a[i]) && (o = p(t, r, o) || o);
  return o && w(t, r, o), o;
};
const m = class m extends x {
  render() {
    const t = this.config ?? {}, r = $(t.occasion), e = l(t.title) || r.label, [o, ...i] = e.split(" ");
    return c`<div class="wrap"><section class="occ" style="--o-bg:${r.bg};--o-fg:${r.fg};--o-acc:${r.acc}">${t.image ? "" : v(r.orn)}
      ${t.image ? c`<img class="img" src=${t.image} alt="" />` : ""}
      <div class="in"><span class="eyebrow">✦ ${l(t.eyebrow) || r.label}</span><h1>${o} <em>${i.join(" ")}</em></h1>
        ${l(t.subtitle) ? c`<p>${l(t.subtitle)}</p>` : ""}${l(t.button) && t.link ? c`<a class="btn" href=${t.link}>${l(t.button)} ←</a>` : ""}</div></section></div>`;
  }
};
m.styles = [u, y, g`
    .occ { border-radius: 30px; min-height: clamp(380px, 56vh, 560px); display: grid; align-items: center; }
    .in { position: relative; z-index: 1; padding: clamp(28px, 6vw, 72px); max-width: 640px; }
    h1 { font-size: clamp(34px, 6vw, 72px); line-height: 1.15; margin: 8px 0 14px; font-weight: 800; }
    h1 em { font-style: normal; color: var(--o-acc); }
    p { opacity: .85; font-size: clamp(15px, 1.8vw, 19px); line-height: 1.8; margin: 0 0 26px; }
    .btn { background: var(--o-acc); color: #111; } .eyebrow { color: var(--o-acc); }
    .img { position: absolute; inset-inline-end: 6%; bottom: 0; height: 88%; max-width: 40%; object-fit: contain; filter: drop-shadow(0 30px 40px #0008); z-index: 1; }
    @media (max-width: 760px) { .img { display: none; } .orn { opacity: .35 !important; max-width: 90% !important; } }
  `];
let s = m;
k([
  b({ type: Object })
], s.prototype, "config");
typeof s < "u" && s.registerSallaComponent("salla-hilal-hero");
export {
  s as default
};
