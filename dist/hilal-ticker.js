import { css as d, LitElement as m, html as c } from "lit";
import { property as b, state as h } from "lit/decorators.js";
const u = d`
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
`, g = {
  ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "رمضان كريم", orn: "lantern" },
  eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "عيدكم مبارك", orn: "star" },
  national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "اليوم الوطني", orn: "palm" },
  founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "يوم التأسيس", orn: "geo" },
  friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "الجمعة البيضاء", orn: "tag" }
}, v = (a) => {
  var t;
  return g[String((Array.isArray(a) ? (t = a[0]) == null ? void 0 : t.value : a) ?? "ramadan")] ?? g.ramadan;
};
d`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
const f = (a) => String(a && typeof a == "object" ? a[(document.documentElement.lang || "ar").slice(0, 2)] ?? a.ar ?? "" : a ?? "");
var y = Object.defineProperty, x = (a, t, n, l) => {
  for (var e = void 0, s = a.length - 1, r; s >= 0; s--)
    (r = a[s]) && (e = r(t, n, e) || e);
  return e && y(t, n, e), e;
};
const p = class p extends m {
  constructor() {
    super(...arguments), this.closed = !1;
  }
  connectedCallback() {
    super.connectedCallback();
    try {
      this.closed = sessionStorage.getItem("hilal-ticker") === "1";
    } catch {
    }
  }
  close() {
    this.closed = !0;
    try {
      sessionStorage.setItem("hilal-ticker", "1");
    } catch {
    }
  }
  render() {
    const t = this.config ?? {}, n = v(t.occasion), l = (t.messages ?? []).filter((r) => f(r.text));
    if (this.closed || !l.length) return c``;
    const e = (r) => l.map((o) => c`<span class="m" aria-hidden=${r}>${o.link ? c`<a href=${o.link}>${f(o.text)}</a>` : f(o.text)}</span>`), s = Math.max(2, Math.ceil(6 / l.length) * 2);
    return c`<div class="t" role="region" aria-label="إعلانات" style="--o-bg:${n.bg};--o-fg:${n.fg};--o-acc:${n.acc};--d:${Math.max(12, 70 - (t.speed ?? 30))}s">
      <div class="vp"><div class="tr">${Array.from({ length: s }, (r, o) => e(o > 0))}</div></div>
      ${t.closable !== !1 ? c`<button class="x" aria-label="إغلاق" @click=${this.close}>×</button>` : ""}</div>`;
  }
};
p.styles = [u, d`
    .t { position: relative; display: flex; align-items: center; color: var(--o-fg); background: var(--o-bg); overflow: hidden; height: 44px; font-size: 14px; font-weight: 700; }
    .vp { flex: 1; overflow: hidden; mask: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
    .tr { display: flex; width: max-content; animation: run var(--d) linear infinite; } .t:hover .tr { animation-play-state: paused; }
    :host-context([dir=ltr]) .tr { animation-direction: reverse; } @keyframes run { to { transform: translateX(50%); } }
    .m { padding: 0 28px; white-space: nowrap; display: inline-flex; gap: 28px; align-items: center; } .m::after { content: '✦'; color: var(--o-acc); }
    a { color: inherit; text-decoration: none; } a:hover { color: var(--o-acc); }
    .x { border: 0; background: none; color: inherit; font-size: 18px; cursor: pointer; padding: 0 14px; opacity: .7; }
  `];
let i = p;
x([
  b({ type: Object })
], i.prototype, "config");
x([
  h()
], i.prototype, "closed");
typeof i < "u" && i.registerSallaComponent("salla-hilal-ticker");
export {
  i as default
};
