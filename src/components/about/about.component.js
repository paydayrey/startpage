class AboutComponent extends Component {
  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.className = "about-section";
  }

  render() {
    this.element.innerHTML = `
      <div class="about-content">
        <h1>About Rey</h1>
        <p>Full-stack developer passionate about creating efficient and scalable solutions.</p>
        <div class="about-details">
          <div class="about-item">
            <i class="ti ti-code" style="color: ${CONFIG.palette.blue}"></i>
            <span>Technologies: JavaScript, Python, React, Node.js</span>
          </div>
          <div class="about-item">
            <i class="ti ti-tools" style="color: ${CONFIG.palette.green}"></i>
            <span>Tools: Git, Docker, VS Code, Linux</span>
          </div>
          <div class="about-item">
            <i class="ti ti-target" style="color: ${CONFIG.palette.yellow}"></i>
            <span>Focus: Full Stack Development, System Design, Cloud Technologies</span>
          </div>
        </div>
      </div>
    `;
    return this.element;
  }

  style() {
    return `
      .about-section {
        background: ${CONFIG.palette.base};
        border-radius: 15px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
      }
      .about-content h1 {
        color: ${CONFIG.palette.text};
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .about-content p {
        color: ${CONFIG.palette.text};
        margin-bottom: 1.5rem;
      }
      .about-details {
        display: grid;
        gap: 1rem;
      }
      .about-item {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .about-item i {
        font-size: 1.5rem;
      }
      .about-item span {
        color: ${CONFIG.palette.text};
      }
    `;
  }
}

customElements.define("about-section", AboutComponent);
