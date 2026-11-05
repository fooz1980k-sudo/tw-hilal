import { css as m, svg as i, html as s, LitElement as b } from "lit";
import { property as y, state as $ } from "lit/decorators.js";
const v = m`
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
`, x = {
  ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "رمضان كريم", orn: "lantern" },
  eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "عيدكم مبارك", orn: "star" },
  national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "اليوم الوطني", orn: "palm" },
  founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "يوم التأسيس", orn: "geo" },
  friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "الجمعة البيضاء", orn: "tag" }
}, w = (r) => {
  var t;
  return x[String((Array.isArray(r) ? (t = r[0]) == null ? void 0 : t.value : r) ?? "ramadan")] ?? x.ramadan;
}, k = m`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`, f = (r, t, a, e) => i`<g transform="translate(${r} 0)"><g class="sway" style="animation-delay:${e}s"><line x1="0" y1="0" x2="0" y2="${t}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${t}) scale(${a})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`, d = (r, t, a, e) => i`<path class="tw" style="animation-delay:${e}s;transform-box:fill-box;transform-origin:center" d="M${r} ${t - a}L${r + a * 0.3} ${t - a * 0.3}L${r + a} ${t}L${r + a * 0.3} ${t + a * 0.3}L${r} ${t + a}L${r - a * 0.3} ${t + a * 0.3}L${r - a} ${t}L${r - a * 0.3} ${t - a * 0.3}Z" fill="currentColor"/>`;
function C(r) {
  const t = [[40, 300, 6, 0], [120, 230, 4, 0.6], [230, 330, 5, 1.2], [300, 250, 3, 0.3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([e, o, n, p]) => d(e, o, n, p)), a = r === "lantern" ? i`${f(70, 110, 2.1, 0)}${f(170, 210, 1.6, 0.8)}${f(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${t}` : r === "star" ? i`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${t}${d(250, 120, 10, 0.4)}${d(110, 160, 8, 1)}` : r === "palm" ? i`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((e) => i`<path transform="rotate(${e} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${t}` : r === "geo" ? i`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((e) => i`<rect x="${120 + e * 14}" y="${150 + e * 14}" width="${180 - e * 28}" height="${180 - e * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${t}` : i`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${t}`;
  return s`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${a}</svg>`;
}
const g = () => window.Salla;
function z(r) {
  var t, a;
  try {
    (a = (t = g()) == null ? void 0 : t.success) == null || a.call(t, r);
  } catch {
  }
}
const M = () => {
  var r, t, a, e, o;
  try {
    const n = ((t = (r = g()) == null ? void 0 : r.lang) == null ? void 0 : t.locale) ?? ((o = (e = (a = g()) == null ? void 0 : a.config) == null ? void 0 : e.get) == null ? void 0 : o.call(e, "user.language_code"));
    if (typeof n == "string" && n) return n.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, c = (r) => {
  if (r == null) return "";
  if (typeof r == "string") {
    const t = r.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return c(JSON.parse(t));
      } catch {
      }
    return r;
  }
  if (typeof r == "number" || typeof r == "boolean") return String(r);
  if (typeof r == "object") {
    const t = r, a = t[M()] ?? t.ar ?? t.en ?? Object.values(t).find((e) => typeof e == "string" && e);
    return typeof a == "string" ? a : "";
  }
  return "";
};
var L = Object.defineProperty, h = (r, t, a, e) => {
  for (var o = void 0, n = r.length - 1, p; n >= 0; n--)
    (p = r[n]) && (o = p(t, a, o) || o);
  return o && L(t, a, o), o;
};
const u = class u extends b {
  constructor() {
    super(...arguments), this.copied = !1;
  }
  async copy() {
    var a;
    const t = ((a = this.config) == null ? void 0 : a.coupon) ?? "";
    try {
      await navigator.clipboard.writeText(t);
    } catch {
    }
    this.copied = !0, z(`تم نسخ الكود ${t}`), setTimeout(() => this.copied = !1, 1800);
  }
  render() {
    const t = this.config ?? {}, a = w(t.occasion), e = c(t.message), o = `${c(t.title) || a.label} 🌙
${e}${t.coupon ? `
كود الهدية: ${t.coupon}` : ""}
${location.origin}`;
    return s`<div class="wrap"><div class="card occ" style="--o-bg:${a.bg};--o-fg:${a.fg};--o-acc:${a.acc}">${C(a.orn)}<div class="in">
      <span class="eyebrow" style="color:var(--o-acc)">✉️ بطاقة تهنئة</span><h2>${c(t.title) || a.label}</h2>${e ? s`<p>${e}</p>` : ""}
      ${t.coupon ? s`<button class="cp" @click=${this.copy}><span>${c(t.gift) || "هديتنا لك"}</span><code>${t.coupon}</code><small>${this.copied ? "تم النسخ ✓" : "اضغط للنسخ"}</small></button>` : ""}
      ${t.share !== !1 ? s`<div class="row"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(o)}">شاركها على واتساب</a></div>` : ""}
      ${c(t.sign) ? s`<div class="sg">— ${c(t.sign)}</div>` : ""}</div></div></div>`;
  }
};
u.styles = [v, k, m`
    .card { max-width: 820px; margin: 0 auto; border-radius: 30px; padding: clamp(30px, 6vw, 64px); text-align: center; box-shadow: 0 40px 80px -40px #0009; }
    .card::before { content: ''; position: absolute; inset: 14px; border-radius: 22px; border: 1px solid color-mix(in srgb, var(--o-acc) 40%, transparent); pointer-events: none; }
    .in { position: relative; z-index: 1; } h2 { font-size: clamp(30px, 5vw, 52px); margin: 6px 0 14px; color: var(--o-acc); }
    p { font-size: clamp(15px, 1.9vw, 19px); line-height: 2; opacity: .9; max-width: 52ch; margin: 0 auto 24px; white-space: pre-line; }
    .cp { all: unset; cursor: pointer; display: inline-flex; gap: 12px; align-items: center; padding: 14px 22px; border-radius: 18px; border: 1.5px dashed var(--o-acc); }
    .cp code { font-size: 24px; font-weight: 800; letter-spacing: .18em; direction: ltr; color: var(--o-acc); } .cp small { opacity: .7; }
    .row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 18px; } .wa { background: #25d366; color: #06301a; }
    .sg { margin-top: 22px; opacity: .7; font-style: italic; } .orn { opacity: .22 !important; }
  `];
let l = u;
h([
  y({ type: Object })
], l.prototype, "config");
h([
  $()
], l.prototype, "copied");
typeof l < "u" && l.registerSallaComponent("salla-hilal-greeting");
export {
  l as default
};
