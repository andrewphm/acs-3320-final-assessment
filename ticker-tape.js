class TickerTape extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .ticker-tape-content {
          display: inline-block;
          animation: ticker 13s linear infinite;
          color: white;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          font-family: 'Roboto Mono', monospace;
          font-style: italic;
          font-weight: 700;
          font-size: 1.2rem
        }

        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(-100%);
          }
        }
      </style>
      <div class="ticker-tape-content">${this.innerHTML}</div>
    `;
  }
}

customElements.define('ticker-tape', TickerTape);
