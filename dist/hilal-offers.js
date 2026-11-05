import { css as b, html as l, LitElement as w } from "lit";
import { property as $, state as k } from "lit/decorators.js";
const z = b`
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
`, d = () => window.Salla, y = async () => {
  var t, a;
  try {
    await ((a = (t = d()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, x = (t, a) => (document.documentElement.lang || "ar").startsWith("en") ? a : t, c = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, e = Number(a);
  return Number.isFinite(e) ? e : 0;
};
function S(t) {
  var r, n, o, s, i, g;
  const a = c(t == null ? void 0 : t.sale_price) && c(t == null ? void 0 : t.sale_price) < c((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? c(t == null ? void 0 : t.sale_price) : c(t == null ? void 0 : t.price), e = Math.max(c(t == null ? void 0 : t.regular_price), c(t == null ? void 0 : t.price), a);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((r = t == null ? void 0 : t.image) == null ? void 0 : r.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (n = t == null ? void 0 : t.images) == null ? void 0 : n[0]) == null ? void 0 : o.url) ?? ""),
    price: a,
    regular: e,
    rating: c(((s = t == null ? void 0 : t.rating) == null ? void 0 : s.stars) ?? ((i = t == null ? void 0 : t.rating) == null ? void 0 : i.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: c((g = t == null ? void 0 : t.rating) == null ? void 0 : g.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : c(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const _ = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0);
async function j(t) {
  return await y(), (await Promise.all(_(t).map((e) => {
    var r, n, o, s;
    return (s = (o = (n = (r = d()) == null ? void 0 : r.product) == null ? void 0 : n.api) == null ? void 0 : o.getDetails) == null ? void 0 : s.call(o, e).then((i) => S(i == null ? void 0 : i.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const p = (t) => {
  var a, e;
  try {
    return ((e = (a = d()) == null ? void 0 : a.money) == null ? void 0 : e.call(a, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function C(t) {
  var a, e, r;
  await y();
  try {
    await ((r = (e = (a = d()) == null ? void 0 : a.cart) == null ? void 0 : e.addItem) == null ? void 0 : r.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function q(t) {
  var a, e;
  try {
    (e = (a = d()) == null ? void 0 : a.success) == null || e.call(a, t);
  } catch {
  }
}
const A = () => {
  var t, a, e, r, n;
  try {
    const o = ((a = (t = d()) == null ? void 0 : t.lang) == null ? void 0 : a.locale) ?? ((n = (r = (e = d()) == null ? void 0 : e.config) == null ? void 0 : r.get) == null ? void 0 : n.call(r, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, u = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const a = t.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return u(JSON.parse(a));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const a = t, e = a[A()] ?? a.ar ?? a.en ?? Object.values(a).find((r) => typeof r == "string" && r);
    return typeof e == "string" ? e : "";
  }
  return "";
}, N = b`
  .pc { display: flex; flex-direction: column; border-radius: 20px; overflow: hidden; background: #fff; color: #1b1408; border: 1px solid #0000000d; transition: transform .35s, box-shadow .35s; position: relative; }
  .pc:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px #0006; }
  .pc .ph { aspect-ratio: 1; overflow: hidden; background: #f3eee4; display: block; } .pc .ph img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s; }
  .pc:hover .ph img { transform: scale(1.07); }
  .pc .bd { padding: 14px 14px 16px; display: grid; gap: 6px; flex: 1; }
  .pc .nm { font-weight: 700; font-size: 15px; line-height: 1.5; color: inherit; text-decoration: none; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pc .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pc .pr b { color: var(--tf-accent); font-size: 17px; } .pc .pr s { opacity: .45; font-size: 13px; }
  .pc .add { margin-top: auto; justify-content: center; padding: 10px 16px; font-size: 14px; }
  .pc .add[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .pc .tag { position: absolute; top: 12px; inset-inline-start: 12px; z-index: 1; font-size: 12px; font-weight: 800; padding: 5px 10px; border-radius: 999px; background: var(--tf-accent); color: #fff; }
`, E = (t, a = "") => l`<article class="pc">${a ? l`<span class="tag">${a}</span>` : ""}
  <a class="ph" href=${t.url}><img src=${t.image} alt=${t.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${t.url}>${t.name}</a>
    <div class="pr"><b>${p(t.price)}</b>${t.regular > t.price ? l`<s>${p(t.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!t.available} @click=${async () => {
  await C(t.id), q("أُضيف للسلة ✓");
}}>${t.available ? "أضف للسلة" : "غير متوفر"}</button></div></article>`, h = {
  ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "رمضان كريم", orn: "lantern" },
  eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "عيدكم مبارك", orn: "star" },
  national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "اليوم الوطني", orn: "palm" },
  founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "يوم التأسيس", orn: "geo" },
  friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "الجمعة البيضاء", orn: "tag" }
}, O = (t) => {
  var a;
  return h[String((Array.isArray(t) ? (a = t[0]) == null ? void 0 : a.value : t) ?? "ramadan")] ?? h.ramadan;
}, P = b`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
var R = Object.defineProperty, v = (t, a, e, r) => {
  for (var n = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (n = s(a, e, n) || n);
  return n && R(a, e, n), n;
};
const m = class m extends w {
  constructor() {
    super(...arguments), this.list = null, this.seq = 0;
  }
  willUpdate(a) {
    var e;
    if (a.has("config")) {
      const r = ++this.seq;
      this.list = null, j((e = this.config) == null ? void 0 : e.products).then((n) => {
        r === this.seq && (this.list = n);
      });
    }
  }
  render() {
    const a = this.config ?? {}, e = O(a.occasion), r = this.list ?? [], n = (i) => i.regular > i.price ? (i.regular - i.price) / i.regular : 0, o = r.reduce((i, g) => n(g) > (i ? n(i) : 0) ? g : i, null), s = { lantern: "🏮", star: "🌙", palm: "🇸🇦", geo: "🏰", tag: "🏷️" }[e.orn];
    return l`<div class="wrap"><section class="occ" style="--o-bg:${e.bg};--o-fg:${e.fg};--o-acc:${e.acc}"><span class="lamp" aria-hidden="true">${s}</span>
      <div class="hd"><div><span class="eyebrow">✦ ${e.label}</span><h2 class="title">${u(a.title) || "عروض " + e.label}</h2>${u(a.subtitle) ? l`<p class="sub">${u(a.subtitle)}</p>` : ""}</div></div>
      <div class="grid">${this.list === null ? l`<div class="skel" style="height:320px"></div>` : r.map((i) => l`<div class=${i === o ? "best" : ""}>${E(i, i === o ? "أقوى عرض 🔥" : n(i) ? `خصم ${Math.round(n(i) * 100)}٪` : u(a.ribbon))}</div>`)}</div></section></div>`;
  }
};
m.styles = [z, N, P, b`
    .occ { border-radius: 30px; padding: clamp(24px, 4vw, 48px); }
    .eyebrow { color: var(--o-acc); } .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; position: relative; z-index: 1; }
    .pc .tag { background: var(--o-acc); color: #111; } .pc .btn { background: #111; } .best { outline: 2px solid var(--o-acc); outline-offset: 4px; border-radius: 22px; }
    .hd { display: flex; justify-content: space-between; align-items: end; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
    .lamp { position: absolute; top: 18px; inset-inline-end: 30px; font-size: 40px; animation: sw 5s ease-in-out infinite; transform-origin: top; } @keyframes sw { 50% { transform: rotate(6deg); } }
  `];
let f = m;
v([
  $({ type: Object })
], f.prototype, "config");
v([
  k()
], f.prototype, "list");
typeof f < "u" && f.registerSallaComponent("salla-hilal-offers");
export {
  f as default
};
