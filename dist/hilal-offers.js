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
`, g = () => window.Salla, y = async () => {
  var a, t;
  try {
    await ((t = (a = g()) == null ? void 0 : a.onReady) == null ? void 0 : t.call(a));
  } catch {
  }
}, x = (a, t) => (document.documentElement.lang || "ar").startsWith("en") ? t : a, c = (a) => {
  const t = typeof a == "object" && a ? a.amount : a, e = Number(t);
  return Number.isFinite(e) ? e : 0;
};
function S(a) {
  var n, r, o, s, i, f;
  const t = c(a == null ? void 0 : a.sale_price) && c(a == null ? void 0 : a.sale_price) < c((a == null ? void 0 : a.regular_price) ?? (a == null ? void 0 : a.price)) ? c(a == null ? void 0 : a.sale_price) : c(a == null ? void 0 : a.price), e = Math.max(c(a == null ? void 0 : a.regular_price), c(a == null ? void 0 : a.price), t);
  return {
    id: Number(a == null ? void 0 : a.id),
    name: String((a == null ? void 0 : a.name) ?? ""),
    url: String((a == null ? void 0 : a.url) ?? "#"),
    image: String(((n = a == null ? void 0 : a.image) == null ? void 0 : n.url) ?? (a == null ? void 0 : a.main_image) ?? (a == null ? void 0 : a.thumbnail) ?? ((o = (r = a == null ? void 0 : a.images) == null ? void 0 : r[0]) == null ? void 0 : o.url) ?? ""),
    price: t,
    regular: e,
    rating: c(((s = a == null ? void 0 : a.rating) == null ? void 0 : s.stars) ?? ((i = a == null ? void 0 : a.rating) == null ? void 0 : i.rate) ?? (a == null ? void 0 : a.rating)),
    ratingCount: c((f = a == null ? void 0 : a.rating) == null ? void 0 : f.count),
    qty: (a == null ? void 0 : a.quantity) == null || a != null && a.unlimited_quantity ? null : c(a == null ? void 0 : a.quantity),
    available: (a == null ? void 0 : a.is_available) !== !1 && (a == null ? void 0 : a.status) !== "out"
  };
}
const _ = (a) => (Array.isArray(a) ? a : []).map((t) => Number(typeof t == "object" && t ? t.value : t)).filter((t) => Number.isFinite(t) && t > 0);
async function C(a) {
  return await y(), (await Promise.all(_(a).map((e) => {
    var n, r, o, s;
    return (s = (o = (r = (n = g()) == null ? void 0 : n.product) == null ? void 0 : r.api) == null ? void 0 : o.getDetails) == null ? void 0 : s.call(o, e).then((i) => S(i == null ? void 0 : i.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const p = (a) => {
  var t, e;
  try {
    return ((e = (t = g()) == null ? void 0 : t.money) == null ? void 0 : e.call(t, a)) ?? `${a} ${x("ر.س", "SAR")}`;
  } catch {
    return `${a} ${x("ر.س", "SAR")}`;
  }
};
async function j(a) {
  var t, e, n;
  await y();
  try {
    await ((n = (e = (t = g()) == null ? void 0 : t.cart) == null ? void 0 : e.addItem) == null ? void 0 : n.call(e, { id: a, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${a}`;
  }
}
function q(a) {
  var t, e;
  try {
    (e = (t = g()) == null ? void 0 : t.success) == null || e.call(t, a);
  } catch {
  }
}
const u = (a) => String(a && typeof a == "object" ? a[(document.documentElement.lang || "ar").slice(0, 2)] ?? a.ar ?? "" : a ?? ""), A = b`
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
`, N = (a, t = "") => l`<article class="pc">${t ? l`<span class="tag">${t}</span>` : ""}
  <a class="ph" href=${a.url}><img src=${a.image} alt=${a.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${a.url}>${a.name}</a>
    <div class="pr"><b>${p(a.price)}</b>${a.regular > a.price ? l`<s>${p(a.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!a.available} @click=${async () => {
  await j(a.id), q("أُضيف للسلة ✓");
}}>${a.available ? "أضف للسلة" : "غير متوفر"}</button></div></article>`, h = {
  ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "رمضان كريم", orn: "lantern" },
  eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "عيدكم مبارك", orn: "star" },
  national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "اليوم الوطني", orn: "palm" },
  founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "يوم التأسيس", orn: "geo" },
  friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "الجمعة البيضاء", orn: "tag" }
}, E = (a) => {
  var t;
  return h[String((Array.isArray(a) ? (t = a[0]) == null ? void 0 : t.value : a) ?? "ramadan")] ?? h.ramadan;
}, P = b`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
var R = Object.defineProperty, v = (a, t, e, n) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(t, e, r) || r);
  return r && R(t, e, r), r;
};
const m = class m extends w {
  constructor() {
    super(...arguments), this.list = null, this.seq = 0;
  }
  willUpdate(t) {
    var e;
    if (t.has("config")) {
      const n = ++this.seq;
      this.list = null, C((e = this.config) == null ? void 0 : e.products).then((r) => {
        n === this.seq && (this.list = r);
      });
    }
  }
  render() {
    const t = this.config ?? {}, e = E(t.occasion), n = this.list ?? [], r = (i) => i.regular > i.price ? (i.regular - i.price) / i.regular : 0, o = n.reduce((i, f) => r(f) > (i ? r(i) : 0) ? f : i, null), s = { lantern: "🏮", star: "🌙", palm: "🇸🇦", geo: "🏰", tag: "🏷️" }[e.orn];
    return l`<div class="wrap"><section class="occ" style="--o-bg:${e.bg};--o-fg:${e.fg};--o-acc:${e.acc}"><span class="lamp" aria-hidden="true">${s}</span>
      <div class="hd"><div><span class="eyebrow">✦ ${e.label}</span><h2 class="title">${u(t.title) || "عروض " + e.label}</h2>${u(t.subtitle) ? l`<p class="sub">${u(t.subtitle)}</p>` : ""}</div></div>
      <div class="grid">${this.list === null ? l`<div class="skel" style="height:320px"></div>` : n.map((i) => l`<div class=${i === o ? "best" : ""}>${N(i, i === o ? "أقوى عرض 🔥" : r(i) ? `خصم ${Math.round(r(i) * 100)}٪` : u(t.ribbon))}</div>`)}</div></section></div>`;
  }
};
m.styles = [z, A, P, b`
    .occ { border-radius: 30px; padding: clamp(24px, 4vw, 48px); }
    .eyebrow { color: var(--o-acc); } .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; position: relative; z-index: 1; }
    .pc .tag { background: var(--o-acc); color: #111; } .pc .btn { background: #111; } .best { outline: 2px solid var(--o-acc); outline-offset: 4px; border-radius: 22px; }
    .hd { display: flex; justify-content: space-between; align-items: end; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
    .lamp { position: absolute; top: 18px; inset-inline-end: 30px; font-size: 40px; animation: sw 5s ease-in-out infinite; transform-origin: top; } @keyframes sw { 50% { transform: rotate(6deg); } }
  `];
let d = m;
v([
  $({ type: Object })
], d.prototype, "config");
v([
  k()
], d.prototype, "list");
typeof d < "u" && d.registerSallaComponent("salla-hilal-offers");
export {
  d as default
};
