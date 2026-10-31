var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o6) {
        if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s6 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s6 && 1 === s6.length;
          e5 && (t3 = o.get(s6)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s6, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o6 = 1 === t3.length ? t3[0] : e5.reduce((e6, s6, o7) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s6) + t3[o7 + 1], t3[0]);
      return new n(o6, t3, s);
    };
    S = (s6, o6) => {
      if (e) s6.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o6) {
        const o7 = document.createElement("style"), n5 = t.litNonce;
        void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s6.appendChild(o7);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s6 of t4.cssRules) e5 += s6.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s6) => t3;
    u = { toAttribute(t3, s6) {
      switch (s6) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s6) {
      let i7 = t3;
      switch (s6) {
        case Boolean:
          i7 = null !== t3;
          break;
        case Number:
          i7 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i7 = JSON.parse(t3);
          } catch (t4) {
            i7 = null;
          }
      }
      return i7;
    } };
    f = (t3, s6) => !i2(t3, s6);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s6 = b) {
        if (s6.state && (s6.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s6 = Object.create(s6)).wrapped = true), this.elementProperties.set(t3, s6), !s6.noAccessor) {
          const i7 = Symbol(), h6 = this.getPropertyDescriptor(t3, i7, s6);
          void 0 !== h6 && e2(this.prototype, t3, h6);
        }
      }
      static getPropertyDescriptor(t3, s6, i7) {
        const { get: e5, set: r6 } = h(this.prototype, t3) ?? { get() {
          return this[s6];
        }, set(t4) {
          this[s6] = t4;
        } };
        return { get: e5, set(s7) {
          const h6 = e5?.call(this);
          r6?.call(this, s7), this.requestUpdate(t3, h6, i7);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s6 = [...r2(t4), ...o2(t4)];
          for (const i7 of s6) this.createProperty(i7, t4[i7]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s6 = litPropertyMetadata.get(t3);
          if (void 0 !== s6) for (const [t4, i7] of s6) this.elementProperties.set(t4, i7);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s6] of this.elementProperties) {
          const i7 = this._$Eu(t4, s6);
          void 0 !== i7 && this._$Eh.set(i7, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s6) {
        const i7 = [];
        if (Array.isArray(s6)) {
          const e5 = new Set(s6.flat(1 / 0).reverse());
          for (const s7 of e5) i7.unshift(c(s7));
        } else void 0 !== s6 && i7.push(c(s6));
        return i7;
      }
      static _$Eu(t3, s6) {
        const i7 = s6.attribute;
        return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s6 = this.constructor.elementProperties;
        for (const i7 of s6.keys()) this.hasOwnProperty(i7) && (t3.set(i7, this[i7]), delete this[i7]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s6, i7) {
        this._$AK(t3, i7);
      }
      _$ET(t3, s6) {
        const i7 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i7);
        if (void 0 !== e5 && true === i7.reflect) {
          const h6 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s6, i7.type);
          this._$Em = t3, null == h6 ? this.removeAttribute(e5) : this.setAttribute(e5, h6), this._$Em = null;
        }
      }
      _$AK(t3, s6) {
        const i7 = this.constructor, e5 = i7._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i7.getPropertyOptions(e5), h6 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r6 = h6.fromAttribute(s6, t4.type);
          this[e5] = r6 ?? this._$Ej?.get(e5) ?? r6, this._$Em = null;
        }
      }
      requestUpdate(t3, s6, i7, e5 = false, h6) {
        if (void 0 !== t3) {
          const r6 = this.constructor;
          if (false === e5 && (h6 = this[t3]), i7 ??= r6.getPropertyOptions(t3), !((i7.hasChanged ?? f)(h6, s6) || i7.useDefault && i7.reflect && h6 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i7)))) return;
          this.C(t3, s6, i7);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s6, { useDefault: i7, reflect: e5, wrapped: h6 }, r6) {
        i7 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s6 ?? this[t3]), true !== h6 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i7 || (s6 = void 0), this._$AL.set(t3, s6)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s7] of this._$Ep) this[t5] = s7;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s7, i7] of t4) {
            const { wrapped: t5 } = i7, e5 = this[s7];
            true !== t5 || this._$AL.has(s7) || void 0 === e5 || this.C(s7, void 0, i7, e5);
          }
        }
        let t3 = false;
        const s6 = this._$AL;
        try {
          t3 = this.shouldUpdate(s6), t3 ? (this.willUpdate(s6), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s6)) : this._$EM();
        } catch (s7) {
          throw t3 = false, this._$EM(), s7;
        }
        t3 && this._$AE(s6);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i7) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i7) : i7;
}
function M(t3, i7, s6 = t3, e5) {
  if (i7 === E) return i7;
  let h6 = void 0 !== e5 ? s6._$Co?.[e5] : s6._$Cl;
  const o6 = a2(i7) ? void 0 : i7._$litDirective$;
  return h6?.constructor !== o6 && (h6?._$AO?.(false), void 0 === o6 ? h6 = void 0 : (h6 = new o6(t3), h6._$AT(t3, s6, e5)), void 0 !== e5 ? (s6._$Co ??= [])[e5] = h6 : s6._$Cl = h6), void 0 !== h6 && (i7 = M(t3, h6._$AS(t3, i7.values), h6, e5)), i7;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i7, ...s6) => ({ _$litType$: t3, strings: i7, values: s6 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i7) => {
      const s6 = t3.length - 1, e5 = [];
      let n5, l5 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c5 = v;
      for (let i8 = 0; i8 < s6; i8++) {
        const s7 = t3[i8];
        let a3, u6, d7 = -1, f7 = 0;
        for (; f7 < s7.length && (c5.lastIndex = f7, u6 = c5.exec(s7), null !== u6); ) f7 = c5.lastIndex, c5 === v ? "!--" === u6[1] ? c5 = _ : void 0 !== u6[1] ? c5 = m : void 0 !== u6[2] ? (y2.test(u6[2]) && (n5 = RegExp("</" + u6[2], "g")), c5 = p2) : void 0 !== u6[3] && (c5 = p2) : c5 === p2 ? ">" === u6[0] ? (c5 = n5 ?? v, d7 = -1) : void 0 === u6[1] ? d7 = -2 : (d7 = c5.lastIndex - u6[2].length, a3 = u6[1], c5 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n5 = void 0);
        const x7 = c5 === p2 && t3[i8 + 1].startsWith("/>") ? " " : "";
        l5 += c5 === v ? s7 + r3 : d7 >= 0 ? (e5.push(a3), s7.slice(0, d7) + h2 + s7.slice(d7) + o3 + x7) : s7 + o3 + (-2 === d7 ? i8 : x7);
      }
      return [V(t3, l5 + (t3[s6] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i7 }, e5) {
        let r6;
        this.parts = [];
        let l5 = 0, a3 = 0;
        const u6 = t3.length - 1, d7 = this.parts, [f7, v6] = N(t3, i7);
        if (this.el = _S.createElement(f7, e5), P.currentNode = this.el.content, 2 === i7 || 3 === i7) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r6 = P.nextNode()) && d7.length < u6; ) {
          if (1 === r6.nodeType) {
            if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
              const i8 = v6[a3++], s6 = r6.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i8);
              d7.push({ type: 1, index: l5, name: e6[2], strings: s6, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r6.removeAttribute(t4);
            } else t4.startsWith(o3) && (d7.push({ type: 6, index: l5 }), r6.removeAttribute(t4));
            if (y2.test(r6.tagName)) {
              const t4 = r6.textContent.split(o3), i8 = t4.length - 1;
              if (i8 > 0) {
                r6.textContent = s2 ? s2.emptyScript : "";
                for (let s6 = 0; s6 < i8; s6++) r6.append(t4[s6], c3()), P.nextNode(), d7.push({ type: 2, index: ++l5 });
                r6.append(t4[i8], c3());
              }
            }
          } else if (8 === r6.nodeType) if (r6.data === n3) d7.push({ type: 2, index: l5 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d7.push({ type: 7, index: l5 }), t4 += o3.length - 1;
          }
          l5++;
        }
      }
      static createElement(t3, i7) {
        const s6 = l2.createElement("template");
        return s6.innerHTML = t3, s6;
      }
    };
    R = class {
      constructor(t3, i7) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i7;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i7 }, parts: s6 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i7, true);
        P.currentNode = e5;
        let h6 = P.nextNode(), o6 = 0, n5 = 0, r6 = s6[0];
        for (; void 0 !== r6; ) {
          if (o6 === r6.index) {
            let i8;
            2 === r6.type ? i8 = new k(h6, h6.nextSibling, this, t3) : 1 === r6.type ? i8 = new r6.ctor(h6, r6.name, r6.strings, this, t3) : 6 === r6.type && (i8 = new Z(h6, this, t3)), this._$AV.push(i8), r6 = s6[++n5];
          }
          o6 !== r6?.index && (h6 = P.nextNode(), o6++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i7 = 0;
        for (const s6 of this._$AV) void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t3, s6, i7), i7 += s6.strings.length - 2) : s6._$AI(t3[i7])), i7++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i7, s6, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i7, this._$AM = s6, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i7 = this._$AM;
        return void 0 !== i7 && 11 === t3?.nodeType && (t3 = i7.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i7 = this) {
        t3 = M(this, t3, i7), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i7, _$litType$: s6 } = t3, e5 = "number" == typeof s6 ? this._$AC(t3) : (void 0 === s6.el && (s6.el = S2.createElement(V(s6.h, s6.h[0]), this.options)), s6);
        if (this._$AH?._$AD === e5) this._$AH.p(i7);
        else {
          const t4 = new R(e5, this), s7 = t4.u(this.options);
          t4.p(i7), this.T(s7), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i7 = C.get(t3.strings);
        return void 0 === i7 && C.set(t3.strings, i7 = new S2(t3)), i7;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i7 = this._$AH;
        let s6, e5 = 0;
        for (const h6 of t3) e5 === i7.length ? i7.push(s6 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s6 = i7[e5], s6._$AI(h6), e5++;
        e5 < i7.length && (this._$AR(s6 && s6._$AB.nextSibling, e5), i7.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s6) {
        for (this._$AP?.(false, true, s6); t3 !== this._$AB; ) {
          const s7 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s7;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i7, s6, e5, h6) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i7, this._$AM = e5, this.options = h6, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = A;
      }
      _$AI(t3, i7 = this, s6, e5) {
        const h6 = this.strings;
        let o6 = false;
        if (void 0 === h6) t3 = M(this, t3, i7, 0), o6 = !a2(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n5, r6;
          for (t3 = h6[0], n5 = 0; n5 < h6.length - 1; n5++) r6 = M(this, e6[s6 + n5], i7, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h6[n5 + 1]), this._$AH[n5] = r6;
        }
        o6 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i7, s6, e5, h6) {
        super(t3, i7, s6, e5, h6), this.type = 5;
      }
      _$AI(t3, i7 = this) {
        if ((t3 = M(this, t3, i7, 0) ?? A) === E) return;
        const s6 = this._$AH, e5 = t3 === A && s6 !== A || t3.capture !== s6.capture || t3.once !== s6.once || t3.passive !== s6.passive, h6 = t3 !== A && (s6 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s6), h6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i7, s6) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s6;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i7, s6) => {
      const e5 = s6?.renderBefore ?? i7;
      let h6 = e5._$litPart$;
      if (void 0 === h6) {
        const t4 = s6?.renderBefore ?? null;
        e5._$litPart$ = h6 = new k(i7.insertBefore(c3(), t4), t4, void 0, s6 ?? {});
      }
      return h6._$AI(t3), h6;
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r6 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o6) => "object" == typeof o6 ? r4(t3, e5, o6) : ((t4, e6, o7) => {
    const r6 = e6.hasOwnProperty(o7);
    return e6.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
  })(t3, e5, o6);
}
var o5, r4;
var init_property = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r6) => {
      const { kind: n5, metadata: i7 } = r6;
      let s6 = globalThis.litPropertyMetadata.get(i7);
      if (void 0 === s6 && globalThis.litPropertyMetadata.set(i7, s6 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s6.set(r6.name, t3), "accessor" === n5) {
        const { name: o6 } = r6;
        return { set(r7) {
          const n6 = e5.get.call(this);
          e5.set.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        }, init(e6) {
          return void 0 !== e6 && this.C(o6, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n5) {
        const { name: o6 } = r6;
        return function(r7) {
          const n6 = this[o6];
          e5.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        };
      }
      throw Error("Unsupported decorator location: " + n5);
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}
var init_state = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// ../dist/hilal-hero.js
var hilal_hero_exports = {};
__export(hilal_hero_exports, {
  default: () => s4
});
function v2(a3) {
  const t3 = [[40, 300, 6, 0], [120, 230, 4, 0.6], [230, 330, 5, 1.2], [300, 250, 3, 0.3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([e5, o6, i7, p7]) => d3(e5, o6, i7, p7)), r6 = a3 === "lantern" ? w`${f3(70, 110, 2.1, 0)}${f3(170, 210, 1.6, 0.8)}${f3(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${t3}` : a3 === "star" ? w`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${t3}${d3(250, 120, 10, 0.4)}${d3(110, 160, 8, 1)}` : a3 === "palm" ? w`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((e5) => w`<path transform="rotate(${e5} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${t3}` : a3 === "geo" ? w`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((e5) => w`<rect x="${120 + e5 * 14}" y="${150 + e5 * 14}" width="${180 - e5 * 28}" height="${180 - e5 * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${t3}` : w`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${t3}`;
  return b2`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${r6}</svg>`;
}
var u3, h3, $2, y3, f3, d3, l3, w2, k2, m2, s4;
var init_hilal_hero = __esm({
  "../dist/hilal-hero.js"() {
    "use strict";
    init_lit();
    init_decorators();
    u3 = i`
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
`;
    h3 = {
      ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", orn: "lantern" },
      eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", orn: "star" },
      national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", orn: "palm" },
      founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", orn: "geo" },
      friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", orn: "tag" }
    };
    $2 = (a3) => {
      var t3;
      return h3[String((Array.isArray(a3) ? (t3 = a3[0]) == null ? void 0 : t3.value : a3) ?? "ramadan")] ?? h3.ramadan;
    };
    y3 = i`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
    f3 = (a3, t3, r6, e5) => w`<g transform="translate(${a3} 0)"><g class="sway" style="animation-delay:${e5}s"><line x1="0" y1="0" x2="0" y2="${t3}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${t3}) scale(${r6})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`;
    d3 = (a3, t3, r6, e5) => w`<path class="tw" style="animation-delay:${e5}s;transform-box:fill-box;transform-origin:center" d="M${a3} ${t3 - r6}L${a3 + r6 * 0.3} ${t3 - r6 * 0.3}L${a3 + r6} ${t3}L${a3 + r6 * 0.3} ${t3 + r6 * 0.3}L${a3} ${t3 + r6}L${a3 - r6 * 0.3} ${t3 + r6 * 0.3}L${a3 - r6} ${t3}L${a3 - r6 * 0.3} ${t3 - r6 * 0.3}Z" fill="currentColor"/>`;
    l3 = (a3) => String(a3 && typeof a3 == "object" ? a3[(document.documentElement.lang || "ar").slice(0, 2)] ?? a3.ar ?? "" : a3 ?? "");
    w2 = Object.defineProperty;
    k2 = (a3, t3, r6, e5) => {
      for (var o6 = void 0, i7 = a3.length - 1, p7; i7 >= 0; i7--)
        (p7 = a3[i7]) && (o6 = p7(t3, r6, o6) || o6);
      return o6 && w2(t3, r6, o6), o6;
    };
    m2 = class m3 extends i4 {
      render() {
        const t3 = this.config ?? {}, r6 = $2(t3.occasion), e5 = l3(t3.title) || r6.label, [o6, ...i7] = e5.split(" ");
        return b2`<div class="wrap"><section class="occ" style="--o-bg:${r6.bg};--o-fg:${r6.fg};--o-acc:${r6.acc}">${t3.image ? "" : v2(r6.orn)}
      ${t3.image ? b2`<img class="img" src=${t3.image} alt="" />` : ""}
      <div class="in"><span class="eyebrow">✦ ${l3(t3.eyebrow) || r6.label}</span><h1>${o6} <em>${i7.join(" ")}</em></h1>
        ${l3(t3.subtitle) ? b2`<p>${l3(t3.subtitle)}</p>` : ""}${l3(t3.button) && t3.link ? b2`<a class="btn" href=${t3.link}>${l3(t3.button)} ←</a>` : ""}</div></section></div>`;
      }
    };
    m2.styles = [u3, y3, i`
    .occ { border-radius: 30px; min-height: clamp(380px, 56vh, 560px); display: grid; align-items: center; }
    .in { position: relative; z-index: 1; padding: clamp(28px, 6vw, 72px); max-width: 640px; }
    h1 { font-size: clamp(34px, 6vw, 72px); line-height: 1.15; margin: 8px 0 14px; font-weight: 800; }
    h1 em { font-style: normal; color: var(--o-acc); }
    p { opacity: .85; font-size: clamp(15px, 1.8vw, 19px); line-height: 1.8; margin: 0 0 26px; }
    .btn { background: var(--o-acc); color: #111; } .eyebrow { color: var(--o-acc); }
    .img { position: absolute; inset-inline-end: 6%; bottom: 0; height: 88%; max-width: 40%; object-fit: contain; filter: drop-shadow(0 30px 40px #0008); z-index: 1; }
    @media (max-width: 760px) { .img { display: none; } .orn { opacity: .35 !important; max-width: 90% !important; } }
  `];
    s4 = m2;
    k2([
      n4({ type: Object })
    ], s4.prototype, "config");
    typeof s4 < "u" && s4.registerSallaComponent("salla-hilal-hero");
  }
});

// ../dist/hilal-ticker.js
var hilal_ticker_exports = {};
__export(hilal_ticker_exports, {
  default: () => i5
});
var u4, g2, v3, f4, y4, x2, p3, i5;
var init_hilal_ticker = __esm({
  "../dist/hilal-ticker.js"() {
    "use strict";
    init_lit();
    init_decorators();
    u4 = i`
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
`;
    g2 = {
      ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", orn: "lantern" },
      eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", orn: "star" },
      national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", orn: "palm" },
      founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", orn: "geo" },
      friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", orn: "tag" }
    };
    v3 = (a3) => {
      var t3;
      return g2[String((Array.isArray(a3) ? (t3 = a3[0]) == null ? void 0 : t3.value : a3) ?? "ramadan")] ?? g2.ramadan;
    };
    i`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
    f4 = (a3) => String(a3 && typeof a3 == "object" ? a3[(document.documentElement.lang || "ar").slice(0, 2)] ?? a3.ar ?? "" : a3 ?? "");
    y4 = Object.defineProperty;
    x2 = (a3, t3, n5, l5) => {
      for (var e5 = void 0, s6 = a3.length - 1, r6; s6 >= 0; s6--)
        (r6 = a3[s6]) && (e5 = r6(t3, n5, e5) || e5);
      return e5 && y4(t3, n5, e5), e5;
    };
    p3 = class p4 extends i4 {
      constructor() {
        super(...arguments), this.closed = false;
      }
      connectedCallback() {
        super.connectedCallback();
        try {
          this.closed = sessionStorage.getItem("hilal-ticker") === "1";
        } catch {
        }
      }
      close() {
        this.closed = true;
        try {
          sessionStorage.setItem("hilal-ticker", "1");
        } catch {
        }
      }
      render() {
        const t3 = this.config ?? {}, n5 = v3(t3.occasion), l5 = (t3.messages ?? []).filter((r6) => f4(r6.text));
        if (this.closed || !l5.length) return b2``;
        const e5 = (r6) => l5.map((o6) => b2`<span class="m" aria-hidden=${r6}>${o6.link ? b2`<a href=${o6.link}>${f4(o6.text)}</a>` : f4(o6.text)}</span>`), s6 = Math.max(2, Math.ceil(6 / l5.length) * 2);
        return b2`<div class="t" role="region" aria-label="إعلانات" style="--o-bg:${n5.bg};--o-fg:${n5.fg};--o-acc:${n5.acc};--d:${Math.max(12, 70 - (t3.speed ?? 30))}s">
      <div class="vp"><div class="tr">${Array.from({ length: s6 }, (r6, o6) => e5(o6 > 0))}</div></div>
      ${t3.closable !== false ? b2`<button class="x" aria-label="إغلاق" @click=${this.close}>×</button>` : ""}</div>`;
      }
    };
    p3.styles = [u4, i`
    .t { position: relative; display: flex; align-items: center; color: var(--o-fg); background: var(--o-bg); overflow: hidden; height: 44px; font-size: 14px; font-weight: 700; }
    .vp { flex: 1; overflow: hidden; mask: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
    .tr { display: flex; width: max-content; animation: run var(--d) linear infinite; } .t:hover .tr { animation-play-state: paused; }
    :host-context([dir=ltr]) .tr { animation-direction: reverse; } @keyframes run { to { transform: translateX(50%); } }
    .m { padding: 0 28px; white-space: nowrap; display: inline-flex; gap: 28px; align-items: center; } .m::after { content: '✦'; color: var(--o-acc); }
    a { color: inherit; text-decoration: none; } a:hover { color: var(--o-acc); }
    .x { border: 0; background: none; color: inherit; font-size: 18px; cursor: pointer; padding: 0 14px; opacity: .7; }
  `];
    i5 = p3;
    x2([
      n4({ type: Object })
    ], i5.prototype, "config");
    x2([
      r5()
    ], i5.prototype, "closed");
    typeof i5 < "u" && i5.registerSallaComponent("salla-hilal-ticker");
  }
});

// ../dist/hilal-countdown.js
var hilal_countdown_exports = {};
__export(hilal_countdown_exports, {
  default: () => l4
});
function k3(r6) {
  const t3 = [[40, 300, 6, 0], [120, 230, 4, 0.6], [230, 330, 5, 1.2], [300, 250, 3, 0.3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([e5, o6, n5, s6]) => d4(e5, o6, n5, s6)), a3 = r6 === "lantern" ? w`${f5(70, 110, 2.1, 0)}${f5(170, 210, 1.6, 0.8)}${f5(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${t3}` : r6 === "star" ? w`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${t3}${d4(250, 120, 10, 0.4)}${d4(110, 160, 8, 1)}` : r6 === "palm" ? w`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((e5) => w`<path transform="rotate(${e5} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${t3}` : r6 === "geo" ? w`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((e5) => w`<rect x="${120 + e5 * 14}" y="${150 + e5 * 14}" width="${180 - e5 * 28}" height="${180 - e5 * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${t3}` : w`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${t3}`;
  return b2`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${a3}</svg>`;
}
var y5, b3, $3, w3, f5, d4, p5, C2, x3, m4, l4;
var init_hilal_countdown = __esm({
  "../dist/hilal-countdown.js"() {
    "use strict";
    init_lit();
    init_decorators();
    y5 = i`
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
`;
    b3 = {
      ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", orn: "lantern" },
      eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", orn: "star" },
      national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", orn: "palm" },
      founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", orn: "geo" },
      friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", orn: "tag" }
    };
    $3 = (r6) => {
      var t3;
      return b3[String((Array.isArray(r6) ? (t3 = r6[0]) == null ? void 0 : t3.value : r6) ?? "ramadan")] ?? b3.ramadan;
    };
    w3 = i`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
    f5 = (r6, t3, a3, e5) => w`<g transform="translate(${r6} 0)"><g class="sway" style="animation-delay:${e5}s"><line x1="0" y1="0" x2="0" y2="${t3}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${t3}) scale(${a3})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`;
    d4 = (r6, t3, a3, e5) => w`<path class="tw" style="animation-delay:${e5}s;transform-box:fill-box;transform-origin:center" d="M${r6} ${t3 - a3}L${r6 + a3 * 0.3} ${t3 - a3 * 0.3}L${r6 + a3} ${t3}L${r6 + a3 * 0.3} ${t3 + a3 * 0.3}L${r6} ${t3 + a3}L${r6 - a3 * 0.3} ${t3 + a3 * 0.3}L${r6 - a3} ${t3}L${r6 - a3 * 0.3} ${t3 - a3 * 0.3}Z" fill="currentColor"/>`;
    p5 = (r6) => String(r6 && typeof r6 == "object" ? r6[(document.documentElement.lang || "ar").slice(0, 2)] ?? r6.ar ?? "" : r6 ?? "");
    C2 = Object.defineProperty;
    x3 = (r6, t3, a3, e5) => {
      for (var o6 = void 0, n5 = r6.length - 1, s6; n5 >= 0; n5--)
        (s6 = r6[n5]) && (o6 = s6(t3, a3, o6) || o6);
      return o6 && C2(t3, a3, o6), o6;
    };
    m4 = class m5 extends i4 {
      constructor() {
        super(...arguments), this.left = 0;
      }
      connectedCallback() {
        super.connectedCallback(), this.tick(), this.timer = window.setInterval(() => this.tick(), 1e3);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), clearInterval(this.timer);
      }
      tick() {
        var a3;
        const t3 = Date.parse(((a3 = this.config) == null ? void 0 : a3.date) ?? "");
        this.left = Number.isFinite(t3) ? Math.max(0, Math.floor((t3 - Date.now()) / 1e3)) : 0;
      }
      render() {
        const t3 = this.config ?? {}, a3 = $3(t3.occasion), e5 = this.left, o6 = (n5) => String(n5).padStart(2, "0");
        return t3.date ? b2`<div class="wrap"><section class="occ" style="--o-bg:${a3.bg};--o-fg:${a3.fg};--o-acc:${a3.acc}">${k3(a3.orn)}<div class="in">
      ${e5 ? b2`<span class="eyebrow">⏳ العد التنازلي</span><h2 class="title">${p5(t3.title) || "\u0628\u0627\u0642\u064A \u0639\u0644\u0649 " + a3.label}</h2>
          <div class="clock" role="timer">${[[Math.floor(e5 / 86400), "\u064A\u0648\u0645"], [Math.floor(e5 % 86400 / 3600), "\u0633\u0627\u0639\u0629"], [Math.floor(e5 % 3600 / 60), "\u062F\u0642\u064A\u0642\u0629"], [e5 % 60, "\u062B\u0627\u0646\u064A\u0629"]].map(([n5, s6]) => b2`<div class="u"><b>${o6(n5)}</b><span>${s6}</span></div>`)}</div>` : b2`<span class="eyebrow">✦</span><h2 class="g">${p5(t3.greeting) || a3.label}</h2>`}
      ${p5(t3.button) && t3.link ? b2`<a class="btn" href=${t3.link}>${p5(t3.button)} ←</a>` : ""}</div></section></div>` : b2`<div class="wrap"><p class="sub">حدد تاريخ المناسبة من إعدادات العنصر.</p></div>`;
      }
    };
    m4.styles = [y5, w3, i`
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
    l4 = m4;
    x3([
      n4({ type: Object })
    ], l4.prototype, "config");
    x3([
      r5()
    ], l4.prototype, "left");
    typeof l4 < "u" && l4.registerSallaComponent("salla-hilal-countdown");
  }
});

// ../dist/hilal-greeting.js
var hilal_greeting_exports = {};
__export(hilal_greeting_exports, {
  default: () => s5
});
function k4(o6) {
  const t3 = [[40, 300, 6, 0], [120, 230, 4, 0.6], [230, 330, 5, 1.2], [300, 250, 3, 0.3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([r6, e5, l5, p7]) => f6(r6, e5, l5, p7)), a3 = o6 === "lantern" ? w`${d5(70, 110, 2.1, 0)}${d5(170, 210, 1.6, 0.8)}${d5(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${t3}` : o6 === "star" ? w`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${t3}${f6(250, 120, 10, 0.4)}${f6(110, 160, 8, 1)}` : o6 === "palm" ? w`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((r6) => w`<path transform="rotate(${r6} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${t3}` : o6 === "geo" ? w`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((r6) => w`<rect x="${120 + r6 * 14}" y="${150 + r6 * 14}" width="${180 - r6 * 28}" height="${180 - r6 * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${t3}` : w`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${t3}`;
  return b2`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${a3}</svg>`;
}
function z2(o6) {
  var t3, a3;
  try {
    (a3 = (t3 = C3()) == null ? void 0 : t3.success) == null || a3.call(t3, o6);
  } catch {
  }
}
var y6, m6, v4, w4, d5, f6, C3, i6, M2, h4, x4, s5;
var init_hilal_greeting = __esm({
  "../dist/hilal-greeting.js"() {
    "use strict";
    init_lit();
    init_decorators();
    y6 = i`
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
`;
    m6 = {
      ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", orn: "lantern" },
      eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", orn: "star" },
      national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", orn: "palm" },
      founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", orn: "geo" },
      friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", orn: "tag" }
    };
    v4 = (o6) => {
      var t3;
      return m6[String((Array.isArray(o6) ? (t3 = o6[0]) == null ? void 0 : t3.value : o6) ?? "ramadan")] ?? m6.ramadan;
    };
    w4 = i`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
    d5 = (o6, t3, a3, r6) => w`<g transform="translate(${o6} 0)"><g class="sway" style="animation-delay:${r6}s"><line x1="0" y1="0" x2="0" y2="${t3}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${t3}) scale(${a3})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`;
    f6 = (o6, t3, a3, r6) => w`<path class="tw" style="animation-delay:${r6}s;transform-box:fill-box;transform-origin:center" d="M${o6} ${t3 - a3}L${o6 + a3 * 0.3} ${t3 - a3 * 0.3}L${o6 + a3} ${t3}L${o6 + a3 * 0.3} ${t3 + a3 * 0.3}L${o6} ${t3 + a3}L${o6 - a3 * 0.3} ${t3 + a3 * 0.3}L${o6 - a3} ${t3}L${o6 - a3 * 0.3} ${t3 - a3 * 0.3}Z" fill="currentColor"/>`;
    C3 = () => window.Salla;
    i6 = (o6) => String(o6 && typeof o6 == "object" ? o6[(document.documentElement.lang || "ar").slice(0, 2)] ?? o6.ar ?? "" : o6 ?? "");
    M2 = Object.defineProperty;
    h4 = (o6, t3, a3, r6) => {
      for (var e5 = void 0, l5 = o6.length - 1, p7; l5 >= 0; l5--)
        (p7 = o6[l5]) && (e5 = p7(t3, a3, e5) || e5);
      return e5 && M2(t3, a3, e5), e5;
    };
    x4 = class x5 extends i4 {
      constructor() {
        super(...arguments), this.copied = false;
      }
      async copy() {
        var a3;
        const t3 = ((a3 = this.config) == null ? void 0 : a3.coupon) ?? "";
        try {
          await navigator.clipboard.writeText(t3);
        } catch {
        }
        this.copied = true, z2(`\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0643\u0648\u062F ${t3}`), setTimeout(() => this.copied = false, 1800);
      }
      render() {
        const t3 = this.config ?? {}, a3 = v4(t3.occasion), r6 = i6(t3.message), e5 = `${i6(t3.title) || a3.label} \u{1F319}
${r6}${t3.coupon ? `
\u0643\u0648\u062F \u0627\u0644\u0647\u062F\u064A\u0629: ${t3.coupon}` : ""}
${location.origin}`;
        return b2`<div class="wrap"><div class="card occ" style="--o-bg:${a3.bg};--o-fg:${a3.fg};--o-acc:${a3.acc}">${k4(a3.orn)}<div class="in">
      <span class="eyebrow" style="color:var(--o-acc)">✉️ بطاقة تهنئة</span><h2>${i6(t3.title) || a3.label}</h2>${r6 ? b2`<p>${r6}</p>` : ""}
      ${t3.coupon ? b2`<button class="cp" @click=${this.copy}><span>${i6(t3.gift) || "\u0647\u062F\u064A\u062A\u0646\u0627 \u0644\u0643"}</span><code>${t3.coupon}</code><small>${this.copied ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E \u2713" : "\u0627\u0636\u063A\u0637 \u0644\u0644\u0646\u0633\u062E"}</small></button>` : ""}
      ${t3.share !== false ? b2`<div class="row"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(e5)}">شاركها على واتساب</a></div>` : ""}
      ${i6(t3.sign) ? b2`<div class="sg">— ${i6(t3.sign)}</div>` : ""}</div></div></div>`;
      }
    };
    x4.styles = [y6, w4, i`
    .card { max-width: 820px; margin: 0 auto; border-radius: 30px; padding: clamp(30px, 6vw, 64px); text-align: center; box-shadow: 0 40px 80px -40px #0009; }
    .card::before { content: ''; position: absolute; inset: 14px; border-radius: 22px; border: 1px solid color-mix(in srgb, var(--o-acc) 40%, transparent); pointer-events: none; }
    .in { position: relative; z-index: 1; } h2 { font-size: clamp(30px, 5vw, 52px); margin: 6px 0 14px; color: var(--o-acc); }
    p { font-size: clamp(15px, 1.9vw, 19px); line-height: 2; opacity: .9; max-width: 52ch; margin: 0 auto 24px; white-space: pre-line; }
    .cp { all: unset; cursor: pointer; display: inline-flex; gap: 12px; align-items: center; padding: 14px 22px; border-radius: 18px; border: 1.5px dashed var(--o-acc); }
    .cp code { font-size: 24px; font-weight: 800; letter-spacing: .18em; direction: ltr; color: var(--o-acc); } .cp small { opacity: .7; }
    .row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 18px; } .wa { background: #25d366; color: #06301a; }
    .sg { margin-top: 22px; opacity: .7; font-style: italic; } .orn { opacity: .22 !important; }
  `];
    s5 = x4;
    h4([
      n4({ type: Object })
    ], s5.prototype, "config");
    h4([
      r5()
    ], s5.prototype, "copied");
    typeof s5 < "u" && s5.registerSallaComponent("salla-hilal-greeting");
  }
});

// ../dist/hilal-offers.js
var hilal_offers_exports = {};
__export(hilal_offers_exports, {
  default: () => d6
});
function S3(a3) {
  var n5, r6, o6, s6, i7, f7;
  const t3 = c4(a3 == null ? void 0 : a3.sale_price) && c4(a3 == null ? void 0 : a3.sale_price) < c4((a3 == null ? void 0 : a3.regular_price) ?? (a3 == null ? void 0 : a3.price)) ? c4(a3 == null ? void 0 : a3.sale_price) : c4(a3 == null ? void 0 : a3.price), e5 = Math.max(c4(a3 == null ? void 0 : a3.regular_price), c4(a3 == null ? void 0 : a3.price), t3);
  return {
    id: Number(a3 == null ? void 0 : a3.id),
    name: String((a3 == null ? void 0 : a3.name) ?? ""),
    url: String((a3 == null ? void 0 : a3.url) ?? "#"),
    image: String(((n5 = a3 == null ? void 0 : a3.image) == null ? void 0 : n5.url) ?? (a3 == null ? void 0 : a3.main_image) ?? (a3 == null ? void 0 : a3.thumbnail) ?? ((o6 = (r6 = a3 == null ? void 0 : a3.images) == null ? void 0 : r6[0]) == null ? void 0 : o6.url) ?? ""),
    price: t3,
    regular: e5,
    rating: c4(((s6 = a3 == null ? void 0 : a3.rating) == null ? void 0 : s6.stars) ?? ((i7 = a3 == null ? void 0 : a3.rating) == null ? void 0 : i7.rate) ?? (a3 == null ? void 0 : a3.rating)),
    ratingCount: c4((f7 = a3 == null ? void 0 : a3.rating) == null ? void 0 : f7.count),
    qty: (a3 == null ? void 0 : a3.quantity) == null || a3 != null && a3.unlimited_quantity ? null : c4(a3 == null ? void 0 : a3.quantity),
    available: (a3 == null ? void 0 : a3.is_available) !== false && (a3 == null ? void 0 : a3.status) !== "out"
  };
}
async function C4(a3) {
  return await y7(), (await Promise.all(_2(a3).map((e5) => {
    var n5, r6, o6, s6;
    return (s6 = (o6 = (r6 = (n5 = g3()) == null ? void 0 : n5.product) == null ? void 0 : r6.api) == null ? void 0 : o6.getDetails) == null ? void 0 : s6.call(o6, e5).then((i7) => S3(i7 == null ? void 0 : i7.data)).catch(() => null);
  }))).filter((e5) => !!e5 && !!e5.name);
}
async function j(a3) {
  var t3, e5, n5;
  await y7();
  try {
    await ((n5 = (e5 = (t3 = g3()) == null ? void 0 : t3.cart) == null ? void 0 : e5.addItem) == null ? void 0 : n5.call(e5, { id: a3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${a3}`;
  }
}
function q(a3) {
  var t3, e5;
  try {
    (e5 = (t3 = g3()) == null ? void 0 : t3.success) == null || e5.call(t3, a3);
  } catch {
  }
}
var z3, g3, y7, x6, c4, _2, p6, u5, A2, N2, h5, E2, P2, R2, v5, m7, d6;
var init_hilal_offers = __esm({
  "../dist/hilal-offers.js"() {
    "use strict";
    init_lit();
    init_decorators();
    z3 = i`
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
`;
    g3 = () => window.Salla;
    y7 = async () => {
      var a3, t3;
      try {
        await ((t3 = (a3 = g3()) == null ? void 0 : a3.onReady) == null ? void 0 : t3.call(a3));
      } catch {
      }
    };
    x6 = (a3, t3) => (document.documentElement.lang || "ar").startsWith("en") ? t3 : a3;
    c4 = (a3) => {
      const t3 = typeof a3 == "object" && a3 ? a3.amount : a3, e5 = Number(t3);
      return Number.isFinite(e5) ? e5 : 0;
    };
    _2 = (a3) => (Array.isArray(a3) ? a3 : []).map((t3) => Number(typeof t3 == "object" && t3 ? t3.value : t3)).filter((t3) => Number.isFinite(t3) && t3 > 0);
    p6 = (a3) => {
      var t3, e5;
      try {
        return ((e5 = (t3 = g3()) == null ? void 0 : t3.money) == null ? void 0 : e5.call(t3, a3)) ?? `${a3} ${x6("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${a3} ${x6("\u0631.\u0633", "SAR")}`;
      }
    };
    u5 = (a3) => String(a3 && typeof a3 == "object" ? a3[(document.documentElement.lang || "ar").slice(0, 2)] ?? a3.ar ?? "" : a3 ?? "");
    A2 = i`
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
`;
    N2 = (a3, t3 = "") => b2`<article class="pc">${t3 ? b2`<span class="tag">${t3}</span>` : ""}
  <a class="ph" href=${a3.url}><img src=${a3.image} alt=${a3.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${a3.url}>${a3.name}</a>
    <div class="pr"><b>${p6(a3.price)}</b>${a3.regular > a3.price ? b2`<s>${p6(a3.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!a3.available} @click=${async () => {
      await j(a3.id), q("\u0623\u064F\u0636\u064A\u0641 \u0644\u0644\u0633\u0644\u0629 \u2713");
    }}>${a3.available ? "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629" : "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"}</button></div></article>`;
    h5 = {
      ramadan: { bg: "radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26", fg: "#f6efe0", acc: "#e7c27a", label: "\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", orn: "lantern" },
      eid: { bg: "radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22", fg: "#fff4f8", acc: "#f2c6a0", label: "\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", orn: "star" },
      national: { bg: "radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f", fg: "#f2fff7", acc: "#ffffff", label: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", orn: "palm" },
      founding: { bg: "radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a", fg: "#fbf1e2", acc: "#e3b26a", label: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", orn: "geo" },
      friday: { bg: "radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505", fg: "#ffffff", acc: "#ffffff", label: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", orn: "tag" }
    };
    E2 = (a3) => {
      var t3;
      return h5[String((Array.isArray(a3) ? (t3 = a3[0]) == null ? void 0 : t3.value : a3) ?? "ramadan")] ?? h5.ramadan;
    };
    P2 = i`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
    R2 = Object.defineProperty;
    v5 = (a3, t3, e5, n5) => {
      for (var r6 = void 0, o6 = a3.length - 1, s6; o6 >= 0; o6--)
        (s6 = a3[o6]) && (r6 = s6(t3, e5, r6) || r6);
      return r6 && R2(t3, e5, r6), r6;
    };
    m7 = class m8 extends i4 {
      constructor() {
        super(...arguments), this.list = null, this.seq = 0;
      }
      willUpdate(t3) {
        var e5;
        if (t3.has("config")) {
          const n5 = ++this.seq;
          this.list = null, C4((e5 = this.config) == null ? void 0 : e5.products).then((r6) => {
            n5 === this.seq && (this.list = r6);
          });
        }
      }
      render() {
        const t3 = this.config ?? {}, e5 = E2(t3.occasion), n5 = this.list ?? [], r6 = (i7) => i7.regular > i7.price ? (i7.regular - i7.price) / i7.regular : 0, o6 = n5.reduce((i7, f7) => r6(f7) > (i7 ? r6(i7) : 0) ? f7 : i7, null), s6 = { lantern: "\u{1F3EE}", star: "\u{1F319}", palm: "\u{1F1F8}\u{1F1E6}", geo: "\u{1F3F0}", tag: "\u{1F3F7}\uFE0F" }[e5.orn];
        return b2`<div class="wrap"><section class="occ" style="--o-bg:${e5.bg};--o-fg:${e5.fg};--o-acc:${e5.acc}"><span class="lamp" aria-hidden="true">${s6}</span>
      <div class="hd"><div><span class="eyebrow">✦ ${e5.label}</span><h2 class="title">${u5(t3.title) || "\u0639\u0631\u0648\u0636 " + e5.label}</h2>${u5(t3.subtitle) ? b2`<p class="sub">${u5(t3.subtitle)}</p>` : ""}</div></div>
      <div class="grid">${this.list === null ? b2`<div class="skel" style="height:320px"></div>` : n5.map((i7) => b2`<div class=${i7 === o6 ? "best" : ""}>${N2(i7, i7 === o6 ? "\u0623\u0642\u0648\u0649 \u0639\u0631\u0636 \u{1F525}" : r6(i7) ? `\u062E\u0635\u0645 ${Math.round(r6(i7) * 100)}\u066A` : u5(t3.ribbon))}</div>`)}</div></section></div>`;
      }
    };
    m7.styles = [z3, A2, P2, i`
    .occ { border-radius: 30px; padding: clamp(24px, 4vw, 48px); }
    .eyebrow { color: var(--o-acc); } .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; position: relative; z-index: 1; }
    .pc .tag { background: var(--o-acc); color: #111; } .pc .btn { background: #111; } .best { outline: 2px solid var(--o-acc); outline-offset: 4px; border-radius: 22px; }
    .hd { display: flex; justify-content: space-between; align-items: end; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
    .lamp { position: absolute; top: 18px; inset-inline-end: 30px; font-size: 40px; animation: sw 5s ease-in-out infinite; transform-origin: top; } @keyframes sw { 50% { transform: rotate(6deg); } }
  `];
    d6 = m7;
    v5([
      n4({ type: Object })
    ], d6.prototype, "config");
    v5([
      r5()
    ], d6.prototype, "list");
    typeof d6 < "u" && d6.registerSallaComponent("salla-hilal-offers");
  }
});

// entry.js
init_lit();
i4.registerSallaComponent = function(n5) {
  if (!customElements.get(n5)) customElements.define(n5, this);
};
await Promise.resolve().then(() => (init_hilal_hero(), hilal_hero_exports));
await Promise.resolve().then(() => (init_hilal_ticker(), hilal_ticker_exports));
await Promise.resolve().then(() => (init_hilal_countdown(), hilal_countdown_exports));
await Promise.resolve().then(() => (init_hilal_greeting(), hilal_greeting_exports));
await Promise.resolve().then(() => (init_hilal_offers(), hilal_offers_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
