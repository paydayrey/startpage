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
              name: "gmail",
              url: "https://mail.google.com",
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
      component: "AboutComponent",
      categories: [
        {
          name: "Profile",
          links: [
            {
              name: "About Me",
              url: "#",
              icon: "user-circle",
              icon_color: palette.blue,
              content: "Full-stack developer with a passion for creating efficient and scalable solutions. Currently focused on web development and cloud technologies."
            },
            {
              name: "Education",
              url: "#",
              icon: "school",
              icon_color: palette.mauve,
              content: "Computer Science Graduate with focus on Software Engineering"
            },
            {
              name: "Experience",
              url: "#",
              icon: "briefcase",
              icon_color: palette.green,
              content: "3+ years of experience in full-stack development"
            }
          ]
        },
        {
          name: "Skills",
          links: [
            {
              name: "Technologies",
              url: "#",
              icon: "code",
              icon_color: palette.red,
              content: "JavaScript, Python, React, Node.js, SQL, MongoDB"
            },
            {
              name: "Tools",
              url: "#",
              icon: "tools",
              icon_color: palette.peach,
              content: "Git, Docker, AWS, VS Code, Linux"
            },
            {
              name: "Soft Skills",
              url: "#",
              icon: "users",
              icon_color: palette.yellow,
              content: "Team Collaboration, Problem Solving, Technical Writing"
            }
          ]
        },
        {
          name: "Interests",
          links: [
            {
              name: "Hobbies",
              url: "#",
              icon: "heart",
              icon_color: palette.teal,
              content: "Coding, Problem Solving, Learning New Technologies"
            },
            {
              name: "Current Focus",
              url: "#",
              icon: "target",
              icon_color: palette.lavender,
              content: "Exploring AI/ML, Contributing to Open Source"
            },
            {
              name: "Contact",
              url: "mailto:your.email@example.com",
              icon: "mail",
              icon_color: palette.blue,
              content: "Feel free to reach out for collaborations or opportunities"
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
