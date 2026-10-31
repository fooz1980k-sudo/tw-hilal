import { css as g, svg as n, html as c, LitElement as u } from "lit";
import { property as b, state as $ } from "lit/decorators.js";
const y = g`
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
`, m = {
  ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "رمضان كريم", orn: "lantern" },
  eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "عيدكم مبارك", orn: "star" },
  national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "اليوم الوطني", orn: "palm" },
  founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "يوم التأسيس", orn: "geo" },
  friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "الجمعة البيضاء", orn: "tag" }
}, v = (o) => {
  var t;
  return m[String((Array.isArray(o) ? (t = o[0]) == null ? void 0 : t.value : o) ?? "ramadan")] ?? m.ramadan;
}, w = g`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`, d = (o, t, a, r) => n`<g transform="translate(${o} 0)"><g class="sway" style="animation-delay:${r}s"><line x1="0" y1="0" x2="0" y2="${t}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${t}) scale(${a})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`, f = (o, t, a, r) => n`<path class="tw" style="animation-delay:${r}s;transform-box:fill-box;transform-origin:center" d="M${o} ${t - a}L${o + a * 0.3} ${t - a * 0.3}L${o + a} ${t}L${o + a * 0.3} ${t + a * 0.3}L${o} ${t + a}L${o - a * 0.3} ${t + a * 0.3}L${o - a} ${t}L${o - a * 0.3} ${t - a * 0.3}Z" fill="currentColor"/>`;
function k(o) {
  const t = [[40, 300, 6, 0], [120, 230, 4, 0.6], [230, 330, 5, 1.2], [300, 250, 3, 0.3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([r, e, l, p]) => f(r, e, l, p)), a = o === "lantern" ? n`${d(70, 110, 2.1, 0)}${d(170, 210, 1.6, 0.8)}${d(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${t}` : o === "star" ? n`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${t}${f(250, 120, 10, 0.4)}${f(110, 160, 8, 1)}` : o === "palm" ? n`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((r) => n`<path transform="rotate(${r} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${t}` : o === "geo" ? n`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((r) => n`<rect x="${120 + r * 14}" y="${150 + r * 14}" width="${180 - r * 28}" height="${180 - r * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${t}` : n`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${t}`;
  return c`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${a}</svg>`;
}
const C = () => window.Salla;
function z(o) {
  var t, a;
  try {
    (a = (t = C()) == null ? void 0 : t.success) == null || a.call(t, o);
  } catch {
  }
}
const i = (o) => String(o && typeof o == "object" ? o[(document.documentElement.lang || "ar").slice(0, 2)] ?? o.ar ?? "" : o ?? "");
var M = Object.defineProperty, h = (o, t, a, r) => {
  for (var e = void 0, l = o.length - 1, p; l >= 0; l--)
    (p = o[l]) && (e = p(t, a, e) || e);
  return e && M(t, a, e), e;
};
const x = class x extends u {
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
    const t = this.config ?? {}, a = v(t.occasion), r = i(t.message), e = `${i(t.title) || a.label} 🌙
${r}${t.coupon ? `
كود الهدية: ${t.coupon}` : ""}
${location.origin}`;
    return c`<div class="wrap"><div class="card occ" style="--o-bg:${a.bg};--o-fg:${a.fg};--o-acc:${a.acc}">${k(a.orn)}<div class="in">
      <span class="eyebrow" style="color:var(--o-acc)">✉️ بطاقة تهنئة</span><h2>${i(t.title) || a.label}</h2>${r ? c`<p>${r}</p>` : ""}
      ${t.coupon ? c`<button class="cp" @click=${this.copy}><span>${i(t.gift) || "هديتنا لك"}</span><code>${t.coupon}</code><small>${this.copied ? "تم النسخ ✓" : "اضغط للنسخ"}</small></button>` : ""}
      ${t.share !== !1 ? c`<div class="row"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(e)}">شاركها على واتساب</a></div>` : ""}
      ${i(t.sign) ? c`<div class="sg">— ${i(t.sign)}</div>` : ""}</div></div></div>`;
  }
};
x.styles = [y, w, g`
    .card { max-width: 820px; margin: 0 auto; border-radius: 30px; padding: clamp(30px, 6vw, 64px); text-align: center; box-shadow: 0 40px 80px -40px #0009; }
    .card::before { content: ''; position: absolute; inset: 14px; border-radius: 22px; border: 1px solid color-mix(in srgb, var(--o-acc) 40%, transparent); pointer-events: none; }
    .in { position: relative; z-index: 1; } h2 { font-size: clamp(30px, 5vw, 52px); margin: 6px 0 14px; color: var(--o-acc); }
    p { font-size: clamp(15px, 1.9vw, 19px); line-height: 2; opacity: .9; max-width: 52ch; margin: 0 auto 24px; white-space: pre-line; }
    .cp { all: unset; cursor: pointer; display: inline-flex; gap: 12px; align-items: center; padding: 14px 22px; border-radius: 18px; border: 1.5px dashed var(--o-acc); }
    .cp code { font-size: 24px; font-weight: 800; letter-spacing: .18em; direction: ltr; color: var(--o-acc); } .cp small { opacity: .7; }
    .row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 18px; } .wa { background: #25d366; color: #06301a; }
    .sg { margin-top: 22px; opacity: .7; font-style: italic; } .orn { opacity: .22 !important; }
  `];
let s = x;
h([
  b({ type: Object })
], s.prototype, "config");
h([
  $()
], s.prototype, "copied");
typeof s < "u" && s.registerSallaComponent("salla-hilal-greeting");
export {
  s as default
};
