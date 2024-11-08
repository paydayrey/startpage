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
    const tab = tabs.find((f) => f.name === tabName);
    const { categories } = tab;

    // Handle about tab differently
    if (tabName === 'about') {
      return `
        ${categories
          .map(({ name, links }) => {
            return `
            <li>
              <h1>${name}</h1>
              <div class="about-section">
                ${links
                  .map(
                    (link) => `
                    <div class="about-item">
                      <div class="about-icon">
                        ${Links.getIcon(link)}
                      </div>
                      <div class="about-content">
                        <h3>${link.name}</h3>
                        ${link.content ? `<p>${link.content}</p>` : ''}
                        ${link.url !== '#' ? `<a href="${link.url}" target="_blank">View</a>` : ''}
                      </div>
                    </div>`,
                  )
                  .join("")}
              </div>
            </li>`;
          })
          .join("")}
      `;
    }

    // Original link handling for other tabs
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

// Rest of the code remains the same...
