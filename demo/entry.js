import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/hilal-hero.js');
await import('../dist/hilal-ticker.js');
await import('../dist/hilal-countdown.js');
await import('../dist/hilal-greeting.js');
await import('../dist/hilal-offers.js');
window.__ready = true;
