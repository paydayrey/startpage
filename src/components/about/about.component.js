class AboutComponent extends Component {
  constructor(o) {
    super();
    this.options = o;
    this.element = document.createElement("div");
    this.element.className = "about-container";
  }

  render() {
    const aboutContent = `
      <div class="about-grid">
        ${this.options.categories.map(category => `
          <div class="about-section">
            ${category.name ? `<h2 class="about-category-title">${category.name}</h2>` : ''}
            <div class="about-items">
              ${category.links.map(link => `
                <div class="about-item">
                  <div class="about-icon">
                    <i class="ti ti-${link.icon}"></i>
                  </div>
                  <div class="about-content">
                    <h3>${link.name}</h3>
                    ${link.content ? `<p>${link.content}</p>` : ''}
                    ${link.url !== '#' ? `<a href="${link.url}" target="_blank">View</a>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.element.innerHTML = aboutContent;
    return this.element;
  }
}
