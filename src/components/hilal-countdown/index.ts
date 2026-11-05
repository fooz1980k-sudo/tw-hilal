import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { occ, occCss, ornament } from '../../shared/occasion';
import { localizedString } from '../../shared/salla';

/** Countdown to the occasion; when the day arrives it switches itself to the greeting. */
export default class HilalCountdown extends LitElement {
  @property({ type: Object }) config?: { occasion?: unknown; title?: unknown; date?: string; greeting?: unknown; button?: unknown; link?: string };
  @state() private left = 0;
  private timer?: number;
  static styles = [base, occCss, css`
    .occ { border-radius: 30px; padding: clamp(28px, 5vw, 60px); text-align: center; }
    .in { position: relative; z-index: 1; } .eyebrow { color: var(--o-acc); }
    .clock { display: flex; justify-content: center; gap: clamp(8px, 2vw, 18px); direction: ltr; margin: 26px 0; flex-wrap: wrap; }
    .u { width: clamp(72px, 14vw, 120px); aspect-ratio: 1; border-radius: 50%; display: grid; place-content: center; border: 1px solid color-mix(in srgb, var(--o-acc) 50%, transparent); background: #ffffff08; position: relative; }
    .u::before { content: ''; position: absolute; inset: 6px; border-radius: 50%; border: 1px dashed color-mix(in srgb, var(--o-acc) 35%, transparent); }
    .u b { font-size: clamp(26px, 5vw, 46px); line-height: 1; font-variant-numeric: tabular-nums; color: var(--o-acc); } .u span { font-size: 12px; opacity: .7; }
    .btn { background: var(--o-acc); color: #111; } h2.g { font-size: clamp(30px, 6vw, 60px); color: var(--o-acc); margin: 14px 0 24px; animation: glow 2.4s ease-in-out infinite; }
    @keyframes glow { 50% { text-shadow: 0 0 30px color-mix(in srgb, var(--o-acc) 60%, transparent); } }
    .orn { opacity: .25 !important; }
  `];
  connectedCallback() { super.connectedCallback(); this.tick(); this.timer = window.setInterval(() => this.tick(), 1000); }
  disconnectedCallback() { super.disconnectedCallback(); clearInterval(this.timer); }
  private tick() { const t = Date.parse(this.config?.date ?? ''); this.left = Number.isFinite(t) ? Math.max(0, Math.floor((t - Date.now()) / 1000)) : 0; }
  render() {
    const c = this.config ?? {}; const o = occ(c.occasion); const s = this.left; const p = (n: number) => String(n).padStart(2, '0');
    if (!c.date) return html`<div class="wrap"><p class="sub">حدد تاريخ المناسبة من إعدادات العنصر.</p></div>`;
    return html`<div class="wrap"><section class="occ" style="--o-bg:${o.bg};--o-fg:${o.fg};--o-acc:${o.acc}">${ornament(o.orn)}<div class="in">
      ${s ? html`<span class="eyebrow">⏳ العد التنازلي</span><h2 class="title">${localizedString(c.title) || 'باقي على ' + o.label}</h2>
          <div class="clock" role="timer">${[[Math.floor(s / 86400), 'يوم'], [Math.floor((s % 86400) / 3600), 'ساعة'], [Math.floor((s % 3600) / 60), 'دقيقة'], [s % 60, 'ثانية']].map(([v, l]) => html`<div class="u"><b>${p(v as number)}</b><span>${l}</span></div>`)}</div>`
        : html`<span class="eyebrow">✦</span><h2 class="g">${localizedString(c.greeting) || o.label}</h2>`}
      ${localizedString(c.button) && c.link ? html`<a class="btn" href=${c.link}>${localizedString(c.button)} ←</a>` : ''}</div></section></div>`;
  }
}
