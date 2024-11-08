class Links extends Component {
  constructor() {
    super();
  }

  static getIcon(link) {
    const defaultColor = CONFIG.palette.base;
    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon"
            style="color: ${link.icon_color ?? defaultColor}"></i>`
      : "";
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);
    return `
      ${categories
        .map(({ name, links }) => {
          return `
          <li>
            <h1>${name}</h1>
            <div class="links-wrapper">
              ${links
                .map(
                  (link) => `
                  <div class="link-info">
                    <a href="${link.url}" target="_blank">
                      ${Links.getIcon(link)}
                      ${link.name ? `<p class="link-name">${link.name}</p>` : ""}
                    </a>
                  </div>`,
                )
                .join("")}
            </div>
          </li>`;
        })
        .join("")}
    `;
  }
}

class Category extends Component {
  constructor() {
    super();
  }

  static getBackgroundStyle(url) {
    return `style="background-image: url(${url}); background-repeat: no-repeat; background-size: cover; background-position: center;"`;
  }

  static getAll(tabs) {
    return `
      ${tabs
        .map(({ name, background_url }, index) => {
          return `<ul class="${name}" ${Category.getBackgroundStyle(background_url)} ${index == 0 ? "active" : ""}>
            <div class="banner"></div>
            <div class="links">${Links.getAll(name, tabs)}</div>
          </ul>`;
        })
        .join("")}
    `;
  }
}

class Tabs extends Component {
  refs = {};

  constructor() {
    super();
    this.tabs = CONFIG.tabs;
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.icons.tabler,
      this.resources.fonts.roboto,
      this.resources.fonts.raleway,
      this.resources.libs.awoo,
    ];
  }

  style() {
    return `
      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      #panels {
          border-radius: 24px;
          width: 90%;
          max-width: 1200px;
          height: 450px;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          background: ${CONFIG.palette.base};
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          overflow: hidden;
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 24px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 100%;
          height: 100%;
          right: 100%;
          background: ${CONFIG.palette.base};
          transition: all .6s ease;
      }

      .categories ul:nth-child(1) {
          --flavour: ${CONFIG.palette.blue};
      }

      .categories ul .links {
          box-shadow: inset -1px 0 var(--flavour);
      }

      .categories ul[active] {
          right: 0;
          z-index: 1;
      }

      .categories .links {
          right: 0;
          width: 70%;
          height: 100%;
          background: ${CONFIG.palette.base};
          padding: 40px;
          flex-wrap: wrap;
          overflow-y: auto;
      }

      .categories .links li {
          list-style: none;
      }

      .categories ul .links a {
          color: ${CONFIG.palette.text};
          text-decoration: none;
          font: 500 16px 'Roboto', sans-serif;
          transition: all .2s ease;
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          background: ${CONFIG.palette.mantle};
          border-radius: 12px;
          margin-bottom: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .categories .link-info {
          display: inline-flex;
          margin-right: 12px;
      }

      .categories ul .links a:hover {
          transform: translateY(2px);
          background: ${CONFIG.palette.surface0};
          color: var(--flavour);
      }

      .categories ul::after {
          content: attr(class);
          position: absolute;
          display: flex;
          text-transform: uppercase;
          width: 25px;
          height: 250px;
          padding: 1em;
          margin: auto;
          border-radius: 15px;
          box-shadow: inset 0 0 0 2px var(--flavour);
          left: calc(15% - 42.5px);
          bottom: 0;
          top: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
          color: var(--flavour);
          letter-spacing: 1px;
          font: 500 30px 'Raleway', sans-serif;
          text-align: center;
          flex-wrap: wrap;
          word-break: break-all;
          align-items: center;
          backdrop-filter: blur(10px);
      }

      .categories .links li h1 {
          color: ${CONFIG.palette.text};
          opacity: 0.7;
          font-size: 13px;
          margin-bottom: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Raleway', sans-serif;
      }

      .categories .link-icon {
          font-size: 20px;
          color: inherit;
      }

      .categories .link-icon + .link-name {
          margin-left: 12px;
          font-weight: 500;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
      }

      .ti {
          animation: fadeInAnimation ease .3s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          height: 20px;
          width: 20px;
      }

      @keyframes fadeInAnimation {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  template() {
    return `
      <div id="links" class="-">
        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("tabs-list", Tabs);
