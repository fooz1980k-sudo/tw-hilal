import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { occ, occCss, ornament } from '../../shared/occasion';
import { txt } from '../../shared/salla';

/** Occasion hero: one switch turns the store festive (Ramadan, Eid, National Day, Founding Day, White Friday) with animated ornaments. */
export default class HilalHero extends LitElement {
  @property({ type: Object }) config?: { occasion?: unknown; eyebrow?: unknown; title?: unknown; subtitle?: unknown; button?: unknown; link?: string; image?: string };
  static styles = [base, occCss, css`
    .occ { border-radius: 30px; min-height: clamp(380px, 56vh, 560px); display: grid; align-items: center; }
    .in { position: relative; z-index: 1; padding: clamp(28px, 6vw, 72px); max-width: 640px; }
    h1 { font-size: clamp(34px, 6vw, 72px); line-height: 1.15; margin: 8px 0 14px; font-weight: 800; }
    h1 em { font-style: normal; color: var(--o-acc); }
    p { opacity: .85; font-size: clamp(15px, 1.8vw, 19px); line-height: 1.8; margin: 0 0 26px; }
    .btn { background: var(--o-acc); color: #111; } .eyebrow { color: var(--o-acc); }
    .img { position: absolute; inset-inline-end: 6%; bottom: 0; height: 88%; max-width: 40%; object-fit: contain; filter: drop-shadow(0 30px 40px #0008); z-index: 1; }
    @media (max-width: 760px) { .img { display: none; } .orn { opacity: .35 !important; max-width: 90% !important; } }
  `];
  render() {
    const c = this.config ?? {}; const o = occ(c.occasion); const t = txt(c.title) || o.label; const [first, ...rest] = t.split(' ');
    return html`<div class="wrap"><section class="occ" style="--o-bg:${o.bg};--o-fg:${o.fg};--o-acc:${o.acc}">${c.image ? '' : ornament(o.orn)}
      ${c.image ? html`<img class="img" src=${c.image} alt="" />` : ''}
      <div class="in"><span class="eyebrow">✦ ${txt(c.eyebrow) || o.label}</span><h1>${first} <em>${rest.join(' ')}</em></h1>
        ${txt(c.subtitle) ? html`<p>${txt(c.subtitle)}</p>` : ''}${txt(c.button) && c.link ? html`<a class="btn" href=${c.link}>${txt(c.button)} ←</a>` : ''}</div></section></div>`;
  }
}
