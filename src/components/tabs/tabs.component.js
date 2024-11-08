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

  static getAboutSection() {
    return `
      <div class="about-section">
        ${[
          {
            icon: "code",
            color: CONFIG.palette.blue,
            title: "Computer Engineering Student & Full Stack Developer",
            content: "Passionate about creating efficient and scalable solutions while pursuing Computer Engineering"
          },
          {
            icon: "stack",
            color: CONFIG.palette.red,
            title: "Tech Stack",
            content: "JavaScript • TypeScript • C/C++ • Python • React • Node.js • Vue"
          },
          {
            icon: "tool",
            color: CONFIG.palette.yellow,
            title: "Tools",
            content: "Vite • Git • Docker • VS Code"
          }
        ].map((item, index) => `
          <div class="about-item" style="--index: ${index}">
            <div class="about-icon">
              <i class="ti ti-${item.icon}" style="color: ${item.color}"></i>
            </div>
            <div class="about-content">
              <h3>${item.title}</h3>
              <p>${item.content}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);
    let linkIndex = 3; // Start after about items
    return `
      ${this.getAboutSection()}
      <div class="links-section">
        ${categories
          .map(({ name, links }) => {
            return `
            <li>
              <h1>${name}</h1>
                <div class="links-wrapper">
                ${links
                  .map(
                    (link) => `
                    <div class="link-info" style="--index: ${linkIndex++}">
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
      </div>
    `;
  }
}

class Category extends Component {
  constructor() {
    super();
  }

  static getBackgroundStyle(url) {
    return `style="background-image: url(${url}); background-repeat: no-repeat; background-size: 30% auto; background-position: left center;"`;
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
      @keyframes dropIn {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      .nav {
          color: #fff;
      }

      #panels {
          border-radius: 15px;
          width: 90%;
          max-width: 1200px;
          height: 450px;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          background: ${CONFIG.palette.base};
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 15px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 100%;
          height: 100%;
          right: 100%;
          background: ${CONFIG.palette.base};
          transition: all .6s;
      }

      .categories ul.rey {
          background-image: url("src/img/banners/cbg-8.gif");
          background-repeat: no-repeat;
          background-size: 30% auto;
          background-position: left center;
      }

      .categories ul:nth-child(1) {
          --flavour: ${CONFIG.palette.sapphire};
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
          padding: 4% 6%;
          flex-wrap: wrap;
          overflow-y: auto;
      }

      .categories .links li {
          list-style: none;
      }

      .categories ul .links a {
          color: ${CONFIG.palette.text};
          text-decoration: none;
          font: 700 18px 'Roboto', sans-serif;
          transition: all .2s;
          display: inline-flex;
          align-items: center;
          padding: .4em .8em;
          background: ${CONFIG.palette.mantle};
          box-shadow: 0 4px ${CONFIG.palette.mantle}, 0 5px 5px rgb(0 0 0 / 20%);
          border-radius: 15px;
          margin-bottom: .7em;
      }

      .categories .link-info {
          display: inline-flex;
          opacity: 0;
          animation: dropIn 0.4s ease forwards;
          animation-delay: calc(var(--index) * 0.1s);
      }

      .categories .link-info:not(:last-child) { margin-right: 1em; }

      .categories ul .links a:hover {
          transform: translate(0, 4px);
          box-shadow: 0 0 rgba(0, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, .5), 0 -0px 5px rgba(0, 0, 0, .1);
          color: var(--flavour);
      }

      .categories ul::after {
          content: attr(class);
          position: absolute;
          display: flex;
          text-transform: uppercase;
          overflow-wrap: break-word;
          width: 25px;
          height: 250px;
          padding: 1em;
          margin: auto;
          border-radius: 15px;
          box-shadow: inset 0 0 0 2px var(--flavour);
          left: calc(15% - 42.5px);
          bottom: 0;
          top: 0;
          background: linear-gradient(to top, rgb(50 48 47 / 90%), transparent);
          color: var(--flavour);
          letter-spacing: 1px;
          font: 500 30px 'Nunito', sans-serif;
          text-align: center;
          flex-wrap: wrap;
          word-break: break-all;
          align-items: center;
          backdrop-filter: blur(3px);
      }

      .categories .links li h1 {
          color: ${CONFIG.palette.text};
          opacity: 0.5;
          font-size: 13px;
          margin-bottom: 1em;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Raleway', sans-serif;
      }

      .categories .link-icon {
          font-size: 27px;
          color: ${CONFIG.palette.text};
      }

      .categories .link-icon + .link-name {
          margin-left: 10px;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
      }

      .about-section {
        margin-bottom: 2rem;
        border-bottom: 1px solid ${CONFIG.palette.surface0};
        padding-bottom: 2rem;
      }

      .about-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: ${CONFIG.palette.mantle};
        border-radius: 15px;
        box-shadow: 0 4px ${CONFIG.palette.mantle}, 0 5px 5px rgb(0 0 0 / 20%);
        margin-bottom: 1rem;
        opacity: 0;
        animation: dropIn 0.4s ease forwards;
        animation-delay: calc(var(--index) * 0.1s);
      }

      .about-icon {
        padding: 0.5rem;
        background: ${CONFIG.palette.surface0};
        border-radius: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .about-content {
        flex: 1;
      }

      .about-content h3 {
        color: var(--flavour);
        font-size: 1.2rem;
        margin: 0 0 0.5rem 0;
        text-transform: capitalize;
        font-family: 'Raleway', sans-serif;
      }

      .about-content p {
        color: ${CONFIG.palette.text};
        margin: 0;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
      }

      .links-section {
        padding-top: 1rem;
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
