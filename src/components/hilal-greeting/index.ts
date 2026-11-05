import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { occ, occCss, ornament } from '../../shared/occasion';
import { toast, localizedString } from '../../shared/salla';

/** Greeting card with an occasion gift code: copy in one tap or share to WhatsApp (brings friends to the store). */
export default class HilalGreeting extends LitElement {
  @property({ type: Object }) config?: { occasion?: unknown; title?: unknown; message?: unknown; coupon?: string; gift?: unknown; share?: boolean; sign?: unknown };
  @state() private copied = false;
  static styles = [base, occCss, css`
    .card { max-width: 820px; margin: 0 auto; border-radius: 30px; padding: clamp(30px, 6vw, 64px); text-align: center; box-shadow: 0 40px 80px -40px #0009; }
    .card::before { content: ''; position: absolute; inset: 14px; border-radius: 22px; border: 1px solid color-mix(in srgb, var(--o-acc) 40%, transparent); pointer-events: none; }
    .in { position: relative; z-index: 1; } h2 { font-size: clamp(30px, 5vw, 52px); margin: 6px 0 14px; color: var(--o-acc); }
    p { font-size: clamp(15px, 1.9vw, 19px); line-height: 2; opacity: .9; max-width: 52ch; margin: 0 auto 24px; white-space: pre-line; }
    .cp { all: unset; cursor: pointer; display: inline-flex; gap: 12px; align-items: center; padding: 14px 22px; border-radius: 18px; border: 1.5px dashed var(--o-acc); }
    .cp code { font-size: 24px; font-weight: 800; letter-spacing: .18em; direction: ltr; color: var(--o-acc); } .cp small { opacity: .7; }
    .row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 18px; } .wa { background: #25d366; color: #06301a; }
    .sg { margin-top: 22px; opacity: .7; font-style: italic; } .orn { opacity: .22 !important; }
  `];
  private async copy() { const c = this.config?.coupon ?? ''; try { await navigator.clipboard.writeText(c); } catch { /* */ } this.copied = true; toast(`تم نسخ الكود ${c}`); setTimeout(() => (this.copied = false), 1800); }
  render() {
    const c = this.config ?? {}; const o = occ(c.occasion); const msg = localizedString(c.message);
    const share = `${localizedString(c.title) || o.label} 🌙\n${msg}${c.coupon ? `\nكود الهدية: ${c.coupon}` : ''}\n${location.origin}`;
    return html`<div class="wrap"><div class="card occ" style="--o-bg:${o.bg};--o-fg:${o.fg};--o-acc:${o.acc}">${ornament(o.orn)}<div class="in">
      <span class="eyebrow" style="color:var(--o-acc)">✉️ بطاقة تهنئة</span><h2>${localizedString(c.title) || o.label}</h2>${msg ? html`<p>${msg}</p>` : ''}
      ${c.coupon ? html`<button class="cp" @click=${this.copy}><span>${localizedString(c.gift) || 'هديتنا لك'}</span><code>${c.coupon}</code><small>${this.copied ? 'تم النسخ ✓' : 'اضغط للنسخ'}</small></button>` : ''}
      ${c.share !== false ? html`<div class="row"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(share)}">شاركها على واتساب</a></div>` : ''}
      ${localizedString(c.sign) ? html`<div class="sg">— ${localizedString(c.sign)}</div>` : ''}</div></div></div>`;
  }
}
