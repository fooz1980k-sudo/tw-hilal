import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { card, cardCss } from '../../shared/card';
import { occ, occCss } from '../../shared/occasion';
import { Prod, products, txt } from '../../shared/salla';

/** Occasion offers: chosen products in a festive frame, with the best deal auto-highlighted. */
export default class HilalOffers extends LitElement {
  @property({ type: Object }) config?: { occasion?: unknown; title?: unknown; subtitle?: unknown; products?: unknown; ribbon?: unknown };
  @state() private list: Prod[] | null = null;
  private seq = 0;
  static styles = [base, cardCss, occCss, css`
    .occ { border-radius: 30px; padding: clamp(24px, 4vw, 48px); }
    .eyebrow { color: var(--o-acc); } .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; position: relative; z-index: 1; }
    .pc .tag { background: var(--o-acc); color: #111; } .pc .btn { background: #111; } .best { outline: 2px solid var(--o-acc); outline-offset: 4px; border-radius: 22px; }
    .hd { display: flex; justify-content: space-between; align-items: end; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
    .lamp { position: absolute; top: 18px; inset-inline-end: 30px; font-size: 40px; animation: sw 5s ease-in-out infinite; transform-origin: top; } @keyframes sw { 50% { transform: rotate(6deg); } }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) { const n = ++this.seq; this.list = null; products(this.config?.products).then((l) => { if (n === this.seq) this.list = l; }); } }
  render() {
    const c = this.config ?? {}; const o = occ(c.occasion); const list = this.list ?? [];
    const pct = (p: Prod) => (p.regular > p.price ? (p.regular - p.price) / p.regular : 0); const best = list.reduce<Prod | null>((b, p) => (pct(p) > (b ? pct(b) : 0) ? p : b), null);
    const lamp = { lantern: '🏮', star: '🌙', palm: '🇸🇦', geo: '🏰', tag: '🏷️' }[o.orn];
    return html`<div class="wrap"><section class="occ" style="--o-bg:${o.bg};--o-fg:${o.fg};--o-acc:${o.acc}"><span class="lamp" aria-hidden="true">${lamp}</span>
      <div class="hd"><div><span class="eyebrow">✦ ${o.label}</span><h2 class="title">${txt(c.title) || 'عروض ' + o.label}</h2>${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}</div></div>
      <div class="grid">${this.list === null ? html`<div class="skel" style="height:320px"></div>` : list.map((p) => html`<div class=${p === best ? 'best' : ''}>${card(p, p === best ? 'أقوى عرض 🔥' : pct(p) ? `خصم ${Math.round(pct(p) * 100)}٪` : txt(c.ribbon))}</div>`)}</div></section></div>`;
  }
}
