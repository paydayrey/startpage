// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "rey",
      background_url: `src/img/banners/cbg-8.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "mail",
              url: "mailto:Rey@Paydayrey.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
            {
              name: "drive",
              url: "https://drive.google.com/",
              icon: "brand-google-drive",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "discord",
              url: "https://discord.com/users/690293482526605495",
              icon: "brand-discord",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/paydayrey",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "code",
              icon_color: palette.blue,
            },
            {
              name: "lastfm",
              url: "https://www.last.fm/user/PAYDAYREY",
              icon: "brand-lastfm",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com/u/paydayrey/",
              icon: "brand-leetcode",
              icon_color: palette.yellow,
            },
            {
              name: "dsa",
              url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
              icon: "list-details",
              icon_color: palette.red,
            },
            {
              name: "udemy",
              url: "https://www.udemy.com/home/my-courses/learning/",
              icon: "certificate",
              icon_color: palette.lavender,
            },
          ]
        },
        {
          name: "",
          links: [
            {
              name: "perplexity",
              url: "https://perplexity.ai",
              icon: "robot",
              icon_color: palette.teal,
            },
            {
              name: "stack overflow",
              url: "https://stackoverflow.com/",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.red,
            },
          ]
        },
      ],
    },
    {
      name: "about",
      background_url: `src/img/banners/cbg-8.gif`,
      categories: [
        {
          name: "Profile",
          links: [
            {
              name: "About Me",
              url: "#",
              icon: "user-circle",
              icon_color: palette.blue,
              content: "Full-stack developer passionate about creating efficient and scalable solutions."
            },
            {
              name: "Experience",
              url: "#",
              icon: "briefcase",
              icon_color: palette.green,
              content: "Software Engineer with focus on web development and cloud technologies"
            }
          ]
        },
        {
          name: "Tech Stack",
          links: [
            {
              name: "Languages & Frameworks",
              url: "#",
              icon: "code",
              icon_color: palette.red,
              content: "JavaScript, Python, React, Node.js, Express"
            },
            {
              name: "Tools & Technologies",
              url: "#",
              icon: "tools",
              icon_color: palette.yellow,
              content: "Git, Docker, AWS, MongoDB, PostgreSQL"
            }
          ]
        }
      ]
    }
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
