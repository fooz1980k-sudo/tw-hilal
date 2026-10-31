import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { occ } from '../../shared/occasion';
import { txt } from '../../shared/salla';

/** Slim announcement ticker with occasion colours; the shopper can dismiss it for the session. */
export default class HilalTicker extends LitElement {
  @property({ type: Object }) config?: { occasion?: unknown; messages?: { text?: unknown; link?: string }[]; speed?: number; closable?: boolean };
  @state() private closed = false;
  static styles = [base, css`
    .t { position: relative; display: flex; align-items: center; color: var(--o-fg); background: var(--o-bg); overflow: hidden; height: 44px; font-size: 14px; font-weight: 700; }
    .vp { flex: 1; overflow: hidden; mask: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
    .tr { display: flex; width: max-content; animation: run var(--d) linear infinite; } .t:hover .tr { animation-play-state: paused; }
    :host-context([dir=ltr]) .tr { animation-direction: reverse; } @keyframes run { to { transform: translateX(50%); } }
    .m { padding: 0 28px; white-space: nowrap; display: inline-flex; gap: 28px; align-items: center; } .m::after { content: '✦'; color: var(--o-acc); }
    a { color: inherit; text-decoration: none; } a:hover { color: var(--o-acc); }
    .x { border: 0; background: none; color: inherit; font-size: 18px; cursor: pointer; padding: 0 14px; opacity: .7; }
  `];
  connectedCallback() { super.connectedCallback(); try { this.closed = sessionStorage.getItem('hilal-ticker') === '1'; } catch { /* */ } }
  private close() { this.closed = true; try { sessionStorage.setItem('hilal-ticker', '1'); } catch { /* */ } }
  render() {
    const c = this.config ?? {}; const o = occ(c.occasion); const ms = (c.messages ?? []).filter((m) => txt(m.text));
    if (this.closed || !ms.length) return html``;
    const row = (dup: boolean) => ms.map((m) => html`<span class="m" aria-hidden=${dup}>${m.link ? html`<a href=${m.link}>${txt(m.text)}</a>` : txt(m.text)}</span>`);
    const sets = Math.max(2, Math.ceil(6 / ms.length) * 2);
    return html`<div class="t" role="region" aria-label="إعلانات" style="--o-bg:${o.bg};--o-fg:${o.fg};--o-acc:${o.acc};--d:${Math.max(12, 70 - (c.speed ?? 30))}s">
      <div class="vp"><div class="tr">${Array.from({ length: sets }, (_, i) => row(i > 0))}</div></div>
      ${c.closable !== false ? html`<button class="x" aria-label="إغلاق" @click=${this.close}>×</button>` : ''}</div>`;
  }
}
